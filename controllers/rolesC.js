import { response } from "express";
import RolesModel from "../models/roles"
import {formatDate}  from "../utils/dateUtils"

export default class ShopC{
    //查询所有的role
    static async findAllRole(req,res,next){
        try {
            const data = await RolesModel.find({state:1});
            res.send({
                code:1,
                data:data
            });
        } catch (error) {
            res.send({
                code:0,
                data:data
            });
            next(error);
        }
    }
    //查询所有的role
    static async findRoleById(req,res,next){
        const {roleId} = req.body;
        try {
            const data = await RolesModel.find({state:1,_id:roleId});
            res.send({
                code:1,
                data:data
            });
        } catch (error) {
            res.send({
                code:0,
                data:data
            });
            next(error);
        }
    }
    //新增role
    static async AddRoles(req,resp,next){
        try {
            const {name} = req.body;
            const res = await RolesModel.insertMany({name,createTime:formatDate(),state:1})
            console.log(res);
            if (res && res.length>0) {
                resp.send({
                    code: 1,
                    msg: "添加成功"
                })
            } else {
                resp.send({
                    code: 0,
                    msg: "添加失败"
                })
            }
        } catch (error) {
            next(error);
        }
    }
    // 删除角色
    static async deleteRoles(req,resp,next){
        const {id} = req.body;
        const res = await RolesModel.updateOne({"_id":id},{state:0});
        console.log(res);
        if(res.nModified){
            resp.send({
                code: 1,
                msg:"删除成功"
            })
        }else{
            resp.send({
                code: 0,
                msg:" 删除失败"
            })
        }
    }
    // 添加权限
    static async AddAuth(req,resp,next){
        const {id,authUser,authTime,menus} = req.body;
        console.log(menus);
        const res = await RolesModel.updateOne({"_id":id},{authUser,authTime,menus});
        if(res.nModified){
            resp.send({
                code: 1,
                msg:"修改成功"
            })
        }else{
            resp.send({
                code: 0,
                msg:"修改失败"
            })
        }
    }

}

