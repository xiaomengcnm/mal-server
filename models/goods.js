import mongoose from 'mongoose';
import BaseModel from './baseModel';


const {Schema} = mongoose;

//定义数据结构
const mongoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    title: String,
    price: Number,
    imgSrc:String,
    msg:String,
    state:Number,
    delstate:Number,
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categroy"
    }
},{
    timestamps: {updatedAt: 'updateDate', createdAt: 'createDate'}, // 自动插入更新时间和创建时间
    versionKey: false // 去除版本key，即数据中的 _v 字段
});

class Goods extends BaseModel {
}

mongoSchema.loadClass(Goods);

export default mongoose.model('Goods', mongoSchema, 'goods');