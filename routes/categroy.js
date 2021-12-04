import CategroyC from '../controllers/categroy';

const express = require('express');
const router = express.Router();
//查询分类信息
router.get("/findCategroy",CategroyC.findCategroyByType);
//添加分类信息
router.post('/addCategroy',CategroyC.addCategroy);
// 删除分类信息
router.post('/deleteCateGroy', CategroyC.deleteCategroy)
// 修改分类名字
router.post('/updateCateGroy', CategroyC.updateCategroy)
// 获取到所有的分类信息
router.get('/findAllCategroy', CategroyC.findAllCategroy)

module.exports = router;