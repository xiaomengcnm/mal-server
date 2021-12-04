import mongoose from 'mongoose';
import BaseModel from './baseModel';


const {Schema} = mongoose;

//定义数据结构
const mongoSchema = new Schema({
    shopName: String,
    address: String,
    phone: String,
    desc:String,
    coverImg:String,  
},{
    timestamps: {updatedAt: 'updateDate', createdAt: 'createDate'}, // 自动插入更新时间和创建时间
    versionKey: false // 去除版本key，即数据中的 _v 字段
});

class Shops extends BaseModel {
}

mongoSchema.loadClass(Shops);

export default mongoose.model('Shops', mongoSchema, 'shops');