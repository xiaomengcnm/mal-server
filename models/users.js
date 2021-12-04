import mongoose from 'mongoose';
import BaseModel from './baseModel';


const {Schema} = mongoose;

//定义数据结构
const mongoSchema = new Schema({
    email: String,
    account: String,
    password: String,
    imgUrl:String,
    state:Number,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Roles"
    }
},{
    timestamps: {updatedAt: 'updateDate', createdAt: 'createDate'}, // 自动插入更新时间和创建时间
    versionKey: false // 去除版本key，即数据中的 _v 字段
});

class Users extends BaseModel {
}

mongoSchema.loadClass(Users);

export default mongoose.model('Users', mongoSchema, 'users');