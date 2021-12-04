import ShopModel from '../models/shops';
import {uploadToShop} from '../utils/myUpload';

export default class ShopC{
    //创建获取这修改店铺信息
    static async createOrEditShopInfo(req,res,next){
        try {
            const {_id} = req.body;
            if(!_id){
                const data = await ShopModel.create({...req.body});
                res.send({
                    code:1,
                    data
                });
            }else{
                const data = await ShopModel.findByIdAndUpdate(_id,{...req.body});
                res.send({
                    code:1,
                    data
                });
            }
           
        } catch (error) {
            next(error);
        }
    }
    //获取店铺列表
    static async getShopList(req,res,next){
        try {
            const data = await ShopModel.findByPaginationHandler(req.body);
            res.send({
                code:1,
                data,
            });
        } catch (error) {
            next(error);
        }
    }
        //上传店鋪封面
        static async uploadShopCover(req,res,next){
            try {
                res.send({code:1,data:req.file.filename})
            } catch (error) {
                next(error);
            }
        };

}

