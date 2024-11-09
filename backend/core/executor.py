import sys
from io import StringIO
import contextlib

class CodeExecutor:
    def __init__(self):
        self.stdout = StringIO()
        self.stderr = StringIO()
        self.stdin = StringIO()
        self._input_values = []
        self._input_index = 0
        self._current_output = ''
        self._execution_state = {}
        self._code_executed = False
        self._current_prompt = ''
    
    def mock_input(self, prompt=''):
        # 保存提示信息
        self._current_prompt = prompt
        
        if self._input_index < len(self._input_values):
            value = self._input_values[self._input_index]
            self._input_index += 1
            # 打印提示和输入值
            print(f"{prompt}{value}")
            return value
        else:
            # 保存当前状态和提示信息
            self._current_output = self.stdout.getvalue()
            # 只打印提示，不打印换行
            print(prompt, end='')
            print('\n等待输入...')
            return None
    
    def execute(self, code, inputs=None):
        # 保存原始的标准输入输出和内置函数
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        old_stdin = sys.stdin
        old_input = __builtins__.get('input')
        
        try:
            # 重定向输出
            sys.stdout = self.stdout
            sys.stderr = self.stderr
            
            # 设置输入值
            if inputs:
                self._input_values = inputs.split('\n')
                self._input_index = 0
            
            # 如果有保存的输出，先恢复它
            if self._current_output and inputs:
                self.stdout.write(self._current_output)
            
            # 创建局部和全局命名空间
            local_dict = {}
            global_dict = {
                '__builtins__': {
                    'print': print,
                    'input': self.mock_input,
                    'len': len,
                    'str': str,
                    'int': int,
                    'float': float,
                    'list': list,
                    'dict': dict,
                    'range': range,
                }
            }
            
            # 检查是否有足够的输入
            if inputs:
                input_count = code.count('input(')
                if len(self._input_values) >= input_count:
                    # 如果有足够的输入，执行完整代码
                    exec(code, global_dict, local_dict)
                    self._code_executed = True
                else:
                    # 如果输入不够，返回需要更多输入的标志
                    return {
                        'output': self.stdout.getvalue(),
                        'errors': '',
                        'needs_input': True,
                        'prompt': self._current_prompt
                    }
            else:
                # 如果没有输入，直接执行代码
                exec(code, global_dict, local_dict)
                self._code_executed = True
            
            # 获取输出
            output = self.stdout.getvalue()
            errors = self.stderr.getvalue()
            
            return {
                'output': output,
                'errors': errors,
                'needs_input': False if self._code_executed else True,
                'prompt': self._current_prompt
            }
        except Exception as e:
            return {
                'output': '',
                'errors': str(e),
                'needs_input': False,
                'prompt': ''
            }
        finally:
            # 恢复原始状态
            sys.stdout = old_stdout
            sys.stderr = old_stderr
            sys.stdin = old_stdin
            if old_input:
                __builtins__['input'] = old_input
            
            # 只在完成所有输入后清空缓冲区
            if self._code_executed:
                self.stdout = StringIO()
                self.stderr = StringIO()
                self.stdin = StringIO()
                self._input_values = []
                self._input_index = 0
                self._current_output = ''
                self._execution_state = {}
                self._code_executed = False
                self._current_prompt = ''
            