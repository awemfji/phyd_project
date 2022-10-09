var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
    res.send('测试成功')
});


module.exports = router;
