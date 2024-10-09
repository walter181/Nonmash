import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// 配置CORS
app.use(
  cors({
    origin: 'https://nonmash.pages.dev', // 允许的前端地址
    methods: ['GET', 'POST', 'OPTIONS'], // 允许的请求方法
    allowedHeaders: ['Content-Type'], // 允许的请求头
    credentials: true // 如果需要发送cookie，可以启用
  })
);

// 手动处理预检请求
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://nonmash.pages.dev');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200); // 返回成功的状态码
});

// 示例路由
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// 添加中间件检查响应头信息（可选，用于调试）
app.use((req, res, next) => {
  console.log('CORS headers set for:', req.method, req.url);
  console.log('Response Headers:', res.getHeaders());
  next();
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
