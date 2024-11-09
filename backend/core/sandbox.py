import signal
import threading
from contextlib import contextmanager
from concurrent.futures import ThreadPoolExecutor, TimeoutError

class Sandbox:
    def __init__(self):
        self.timeout = 10  # 增加超时时间到 10 秒
        self.executor = ThreadPoolExecutor(max_workers=1)
    
    def run(self, code, inputs=None):
        from core.executor import CodeExecutor
        executor = CodeExecutor()
        
        try:
            # 使用线程池执行代码，设置超时
            future = self.executor.submit(executor.execute, code, inputs)
            result = future.result(timeout=self.timeout)
            
            # 确保返回的是字符串
            output = result.get('output', '').strip()
            errors = result.get('errors', '').strip()
            needs_input = result.get('needs_input', False)
            prompt = result.get('prompt', '')  # 获取提示信息
            
            return {
                'output': output,
                'errors': errors,
                'needs_input': needs_input,
                'prompt': prompt  # 传递提示信息
            }
        except TimeoutError:
            return {
                'output': '',
                'errors': 'Code execution timed out',
                'needs_input': False,
                'prompt': ''
            }
        except Exception as e:
            return {
                'output': '',
                'errors': f"Error: {str(e)}",
                'needs_input': False,
                'prompt': ''
            }
        finally:
            # 清理资源
            future.cancel()