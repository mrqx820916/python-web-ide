# Python Web IDE

这是一个WEB端Python IDE，用于Python基础练习。

## 访问地址

### 用户端
- 开发环境: http://localhost:3000
- 测试账号:
  - 普通用户
    - 用户名：test
    - 密码：test123

### 管理端
- 开发环境: http://localhost:8081/admin
- 测试账号:
  - 管理员
    - 用户名：admin
    - 密码：admin123

## 功能规划

### 1. 基础功能
- **代码编辑器**
  - 使用 Monaco Editor/CodeMirror
  - Python语法高亮
  - 代码自动补全
  - 行号显示
  - 代码折叠

- **代码执行**
  - 在线运行Python代码
  - 显示运行结果和错误信息
  - 支持输入/输出交互

### 2. 进阶功能
- **文件管理**
  - 创建/保存Python文件
  - 文件树结构
  - 多文件支持

- **调试功能**
  - 断点设置
  - 单步执行
  - 变量查看

- **用户系统**
  - 用户注册/登录
  - 代码保存
  - 历史记录

## 技术栈
### 前端
- React/Vue.js
- Monaco Editor/CodeMirror
- Axios

### 后端
- Python Flask/Django
- Docker
- WebSocket

## 安全特性
- 代码执行沙箱
- 资源使用限制
- 超时控制
- 危险操作拦截

## 教学功能
- **练习系统**
  - 内置Python练习题
  - 自动判题
  - 进度追踪

- **学习资源**
  - Python基础教程
  - 常见错误提示
  - 代码示例

## 项目结构
D:\AICODE\python_web_ide\python_web_ide\
├── frontend/ # 前端代码
│ ├── src/
│ └── public/
├── backend/ # 后端代码
│ ├── api/
│ ├── core/
│ └── utils/
├── docker/ # Docker配置
├── docs/ # 文档
└── tests/ # 测试代码

## 开发计划
1. 搭建基础开发环境
2. 实现简单的代码编辑器
3. 实现基础的代码执行功能
4. 添加用户系统
5. 实现文件管理
6. 添加调试功能
7. 优化性能和用户体验
8. 添加教学功能

## 性能优化
- 代码执行缓存
- 前端资源优化
- 后端并发处理
- 数据库优化

## 用户体验
- 响应式设计
- 深色/浅色主题
- 快捷键支持
- 友好的错误提示
- 加载状态提示

## 参考项目
- Jupyter Notebook
- Python Tutor
- repl.it

## 贡献
欢迎提交 Issue 和 Pull Request！

## 许可证
[MIT License](LICENSE)
## 开发指南

### 启动服务

1. 启动后端服务
```bash
cd backend
pip install flask flask-cors pyjwt
python app.py
```

2. 启动前端服务
```bash
# 启动用户端
cd frontend
yarn install
yarn dev

# 启动管理端
cd admin
yarn install
yarn dev
```
