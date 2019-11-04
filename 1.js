// const cookie = require("cookie-parse")
const session = require("express-session")
const express = require("express")
let app = express()
app.use(session({
    secret: "safe", //加密字符串
    name: "safe", //返回客户端的id
    cookie: { maxAge: 9000, httpOnly: true },
    resave: true, //加强初始化
    saveUninitialized: true, //保存未初始化session

}))
app.get("/", (req, res) => {
    if (req.session.username) {
        res.send("欢迎" + req.session.username + "回家")
    } else {
        res.send("未保存session")
    }

})
app.get("/send", (req, res) => {
    let obj = req.query.username
    req.session.username = obj
    console.log(req.session.username)

    res.send("成功")
})
app.listen(3000)