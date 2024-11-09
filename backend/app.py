from flask import Flask, request, jsonify
from flask_cors import CORS
from core.executor import CodeExecutor
from core.sandbox import Sandbox
from core.user import authenticate, users
import jwt
import datetime

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'

executor = CodeExecutor()
sandbox = Sandbox()

@app.route('/user/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({
            'success': False,
            'error': '用户名和密码不能为空'
        }), 400
    
    user = authenticate(username, password)
    if user:
        token = jwt.encode({
            'username': user['username'],
            'role': user['role'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, app.config['SECRET_KEY'], algorithm='HS256')
        
        return jsonify({
            'success': True,
            'data': {
                'token': token,
                'user': user
            }
        })
    
    return jsonify({
        'success': False,
        'error': '用户名或密码错误'
    }), 401

@app.route('/user/info', methods=['GET'])
def get_user_info():
    token = request.headers.get('Authorization', '').replace('Bearer ', '')
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        username = payload['username']
        user = users.get(username)
        if user:
            return jsonify({
                'success': True,
                'data': {
                    'username': username,
                    'role': user['role'],
                    'name': user['name']
                }
            })
    except jwt.ExpiredSignatureError:
        return jsonify({
            'success': False,
            'error': 'Token已过期'
        }), 401
    except jwt.InvalidTokenError:
        return jsonify({
            'success': False,
            'error': '无效的Token'
        }), 401

@app.route('/execute', methods=['POST'])
def execute_code():
    code = request.json.get('code')
    inputs = request.json.get('input', '')
    
    if not code:
        return jsonify({
            'success': False,
            'error': 'No code provided'
        }), 400
    
    try:
        result = sandbox.run(code, inputs)
        output = result.get('output', '').strip()
        errors = result.get('errors', '').strip()
        needs_input = result.get('needs_input', False)
        prompt = result.get('prompt', '')  # 获取提示信息
        
        return jsonify({
            'success': True,
            'data': {
                'output': output or errors,
                'needs_input': needs_input,
                'prompt': prompt  # 返回提示信息
            }
        })
    except Exception as e:
        print(f"执行错误: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)