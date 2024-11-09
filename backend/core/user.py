# 模拟数据库中的用户
users = {
    'admin': {
        'password': 'admin123',
        'role': 'admin',
        'name': '管理员'
    },
    'test': {
        'password': 'test123',
        'role': 'user',
        'name': '测试用户'
    }
}

def authenticate(username, password):
    """验证用户"""
    user = users.get(username)
    if user and user['password'] == password:
        return {
            'username': username,
            'role': user['role'],
            'name': user['name']
        }
    return None 