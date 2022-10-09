var express = require('express');
var router = express.Router();
const UserModel = require('../module/UserModule')



/* GET home page. */
router.post('/', (req, res) => {
    const { username, password } = req.body
    UserModel.findOne({ username, password }).then(user => {
        if (user) {
            res.send({ status: 0, data: user })
        } else {
            res.send({ status: 1, msg: '用户名或密码不正确' })
        }
    }).catch(error => {
        console.log('登录异常', error);
        res.send({ status: 1, msg: '登录异常,请稍后再试' })
    })
});


module.exports = router;
