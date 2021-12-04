import UsersModel from '../models/users';
import { PRIVATE_KEY } from '../consts';
import jwt from 'jsonwebtoken';

//登录
export default class UserC {
    static async login(req, res, next) {
        try {
            const { account, password } = req.body;
            const users = await UsersModel.find({ account, password }).populate("role");
            if (users.length) {
                const role = users[0].role;
                const _id = users[0]._id;
                const token = jwt.sign({ account,role,_id, exp: Date.now() / 1000 + (60*60*24) }, PRIVATE_KEY);
                // res.statusCode =  500
                res.send({
                    code: 1,
                    data: {
                        userInfo: { account, role },
                        token,
                    }
                });
            } else {
                res.send({ code: 0, msg: '用户不存在' });
            }

        } catch (error) {
            console.log('error', error)
            next(error);
        }
    }
    //添加账户
    static async accountadd(req, res, next) {
        try {
            let { account, email,password, role } = req.body;
            console.log(account, email,password, role);
            if (!(account && password && role)) {
                res.send({ code: 0, msg: "参数错误!" })
                return;
            }
            //查看是否重名
            const has = await UsersModel.find({ account });
            if (has.length) {
                res.send({ code: 0, msg: "用户名重复！" });
                return;
            }

            const ret = await UsersModel.create({ account, email,password, role,state:1 });
            console.log('ret', ret)
            if (ret) {
                res.send({ code: 1, msg: '添加成功' });
            } else {
                res.send({ code: 0, msg: '添加失败' })
            }
        } catch (error) {
            next(error);
        }
    }
    //获取账户列表
    static async getAccountList(req, res, next) {
        try {
            const data = await UsersModel.find({state:1}).populate("role");
            res.send({ code: 1, data:data});
        } catch (error) {
            next(error);
        }
    }
    //删除账户
    static async delAccount(req, res, next) {
        try {
            const { id } = req.query;
            const data = await UsersModel.findByIdAndDelete(id);
            console.log(data);
            res.send({ code: 1, data, })
        } catch (error) {
            next(error);
        }
    }

    //获取用户信息
    static async getUserInfo(req,res,next){
        try {
            const {_id} = req.user;
            const data = await UsersModel.findById(_id);
            const {account,userGroup,imgUrl} = data;
            res.send({code:1,data:{account,userGroup,imgUrl,_id}});
        } catch (error) {
            next(error);
        }
    }
}