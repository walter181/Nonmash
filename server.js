import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

// 使用 CORS 中间件来启用跨域支持
app.use(
  cors({
    origin: 'https://nonmash.pages.dev', // 只允许从 https://nonmash.pages.dev 发起的请求
    methods: ['GET', 'POST', 'OPTIONS'], // 允许的 HTTP 方法
    allowedHeaders: ['Content-Type'] // 允许的请求头
  })
)

// 处理预检请求（OPTIONS 请求）
app.options('*', cors())

// 示例路由
app.get('/', (req, res) => {
  res.send('Hello from Node.js!')
})

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
