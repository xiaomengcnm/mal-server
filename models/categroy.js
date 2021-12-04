import mongoose from 'mongoose';
import BaseModel from "./baseModel"


const {Schema} = mongoose;

//定义数据结构
const mongoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    parentId:String
},{
    timestamps: {updatedAt: 'updateDate', createdAt: 'createDate'}, // 自动插入更新时间和创建时间
    versionKey: false // 去除版本key，即数据中的 _v 字段
});

class Categroy extends BaseModel {
}

mongoSchema.loadClass(Categroy);

export default mongoose.model('Categroy', mongoSchema, 'categroy');