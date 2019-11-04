// 路由
const exprsee = require("express")
let app = exprsee()
    // 路由中间件
let router = exprsee.Router()
app.use(router)
    // 验证码接口
router.get("/", (req, res) => {
    res.send("router")
})
router.get("/code", (req, res) => {
    // 随机数  Mtah.Random
    let Random = function(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }
    let str = "qwertyuiopasdfghjklzxcvbnm123456789"
    let strr = ""
    for (var i = 0; i < 4; i++) {
        strr += str[Random(0, str.length - 1)]
    }
    res.send({ "success": "请求成功", "data": strr })
})
app.listen(3000)