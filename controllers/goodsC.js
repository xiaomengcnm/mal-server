import GoodsModel from '../models/goods';
import mongoose from 'mongoose';
const path = require("path")
const fs = require("fs");

export default class GoodsC {
    static async findAllGoods(req, resp, next) {
        const goodsData = await GoodsModel.find({ delstate: 1 }).populate({ path: "type" });
        resp.send({
            code: 1,
            data: goodsData
        });
    }
    static async findAllGoodsByName(req, resp, next) {
        const { searchType, searchData } = req.body;
        const regName = new RegExp(`${searchData}`);
        // 构造一个对象
        const obj = {}
        obj[searchType] = { $regex: regName }
        obj.delstate = 1;

        const goodsData = await GoodsModel.find(obj).populate({ path: "type" });
        resp.send({
            code: 1,
            data: goodsData
        });
    }
    static async addGoods(req, resp, next) {
        const { name, title, price, type, imgSrc, msg } = req.body;

        const res = await GoodsModel.insertMany({ name, title, price, type, imgSrc, msg, state: 0, delstate: 1 });
        if (res[0].createDate) {
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
    }

    static async delGoods(req, resp, next) {
        const { id } = req.body
        const res = await GoodsModel.deleteOne({ "_id": id })
        console.log(res);
        if (res.deletedCount) {
            resp.send({
                code: 1,
                msg: "删除成功"
            })
        } else {
            resp.send({
                code: 0,
                msg: "删除失败"
            })
        }
    }

    static async updateGoods(req, resp, next) {
        const { id, price, type } = req.body;
        // let types = mongoose.Types.ObjectId(type);
        const res = await GoodsModel.findByIdAndUpdate({ "_id": id }, { $set: { price, type } })
        if (res._id) {
            resp.send({
                code: 1,
                msg: "修改成功"
            })
        } else {
            resp.send({
                code: 0,
                msg: "修改失败"
            })
        }
    }
    static async findGoodsById(req, resp, next) {
        const { id } = req.body;
        const data = await GoodsModel.findById({ "_id": id }).populate("type");
        resp.send({
            code: 1,
            data
        });
    }

    static async fileUpload(req, resp, next) {
        try {
            resp.send({ code: 1, data: req.file.filename })
        } catch (error) {
            next(error);
        }
    }
    // 删除文件的接口，需要传递一个文件名字
    static async deleteFiles(req, resp, next) {
        const { fileName } = req.body;
        const delPath = path.join(__dirname, "../public/images/goods/"+fileName)
        try {
            /**
             * @des 判断文件或文件夹是否存在
             */
            if (fs.existsSync(delPath)) {
                fs.unlinkSync(delPath);
                resp.send({
                    code: 1,
                    msg: "删除成功"
                });
            } else {
                resp.send({
                    code: 1,
                    msg: "删除失败，文件不存在"
                });
            }
        } catch (error) {
            console.log(error);
            resp.send({
                code: 1,
                msg: "删除失败，服务器异常"
            });
        }
    }
}