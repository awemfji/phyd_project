var express = require('express');
var router = express.Router();
const UserModel = require('../module/UserModule')


/* GET home page. */
router.post('/', (req, res) => {
    console.log(req.body);
    const username = req.body.name
    const password = req.body.pass
    UserModel.findOne({ username }).then(user => {
        if (user) {
            res.send({ status: 1, msg: '用户已存在' })
            return new Promise(() => { })
        } else {
            return UserModel.create({ username, password })
        }
    }).then(user => {
        res.send({ status: 0, data: user })
    }).catch(error => {
        res.send({ status: 1, msg: '添加用户异常，请重试' })
    })
});


module.exports = router;
