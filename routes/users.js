import UserC from '../controllers/usersC';
import {uploadToImages} from '../utils/myUpload';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',UserC.login);//登录
router.post('/getAccountList',UserC.getAccountList);//获取账户列表
router.get('/getAccountList2',UserC.getAccountList);//获取账户列表
router.post('/accountadd',UserC.accountadd);//添加账户
router.get('/delAccount',UserC.delAccount);//删除账户
router.get(`/getUserInfo`,UserC.getUserInfo);



module.exports = router;
