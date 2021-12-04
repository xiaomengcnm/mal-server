import ShopC from '../controllers/shopC';
import {uploadToShop} from '../utils/myUpload';

const express = require('express');
const router = express.Router();
//创建或者修改店铺信息
router.post("/createOrEditShopInfo",ShopC.createOrEditShopInfo);
//分页查询店铺列表
router.post('/findShopList',ShopC.getShopList);
// 店铺封面上传 uploadToShop.single('shopCover')单文件上传
router.post('/shopCoverUpload', uploadToShop.single('shopCover'), ShopC.uploadShopCover)


module.exports = router;