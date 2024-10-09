import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(
  cors({
    origin: 'https://nonmash.pages.dev',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  })
)

app.use((req, res, next) => {
  console.log('CORS headers set for:', req.method, req.url)
  next()
})

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
