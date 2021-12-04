import GoodsC from '../controllers/goodsC';
import {uploadToGoods} from "../utils/myUpload"

const express = require('express');
const router = express.Router();
//查询分类信息
router.get("/findGoods",GoodsC.findAllGoods);
// 根据编号来查询商品
router.post('/findGoodsById', GoodsC.findGoodsById)
// 根据名字获取描述来查询商品
router.post('/findGoodsByName', GoodsC.findAllGoodsByName)
//添加分类信息
router.post('/addGoods',GoodsC.addGoods);
// 删除分类信息
router.post('/deleteGoods', GoodsC.delGoods)
// 修改分类名字
router.post('/updateGoods', GoodsC.updateGoods)
// 文件上传接口
router.post('/fileUpload', uploadToGoods.single('imgSrc'), GoodsC.fileUpload)
// 删除文件的接口
router.post('/deleteFiles', GoodsC.deleteFiles)


module.exports = router;