const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

const indexRouter = require('./routes')
app.use("/", indexRouter)
const loginRouter = require('./routes/login')
app.use("/login", loginRouter)
const userRouter = require('./routes/user')
app.use("/user", userRouter)

mongoose.connect('mongodb://localhost/phyd_db', { useNewUrlParser: true }).then(() => {
    console.log("数据库连接成功");
    app.listen('3333', () => {
        console.log('服务器启动成功,http://localhost:3333');
    })
}).catch(error => {
    console.log('数据库连接失败', error);
})