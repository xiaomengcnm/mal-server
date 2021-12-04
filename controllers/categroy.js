import CategroyModel from '../models/categroy';

export default class CategroyC {
    //根据parentId查询分类信息
    static async findCategroyByType(req, res, next) {
        try {
            const { parentId,pageSize,pageNumber} = req.query;
            if (parentId != undefined) {
                // 分页查询数据
                let query = {pageNumber:parseInt(pageNumber),pageSize:parseInt(pageSize),conditions:{"parentId":parentId}}
                const data = await CategroyModel.findByPaginationHandler(query,{},{});
                // const data = await CategroyModel.find({ "parentId": parentId });
                res.send({
                    code: 1,
                    data
                });
                // 调用模板引擎，将数据传递模板引擎
            } else {
                res.send({
                    code: 0,
                    date: []
                });
            }

        } catch (error) {
            next(error);
        }
    }
    static async addCategroy(req, resp, next) {
        const { name, type, parentId } = req.body;
        if (name && type && parentId != undefined) {
            const res = await CategroyModel.insertMany({ name, type, parentId });
            console.log(res);
            if (res.length) {
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
        } else {
            resp.send({
                code: 0,
                msg: "添加失败"
            })
        }
    }
    static async deleteCategroy(req, resp, next) {
        const { id } = req.body
        if (id != undefined) {
            const res = await CategroyModel.deleteOne({ "_id": id });
            if(res.deletedCount){
                resp.send({
                    code: 1,
                    msg:"删除成功"
                })
            }else{
                resp.send({
                    code: 0,
                    msg:"删除失败"
                })
            }
        }
    }
    static async updateCategroy(req,resp,next){
        const {id,name} = req.body;
        console.log(id,name);
        // 第一个条件，要查询的条件
        // 第二个条件, 要修改的内容
        const res = await CategroyModel.updateOne({"_id":id},{"name":name});
        console.log(res);
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
    static async findAllCategroy(req,resp,next){
        const categroyData = await CategroyModel.find({parentId:0});
        let resultData = [];
        for(let i=0;i<categroyData.length;i++){
            let data = {value:categroyData[i].name,label:categroyData[i].name,children:[]}
            const arr = await  CategroyModel.find({parentId:categroyData[i]._id});
            for(let j=0;j<arr.length;j++){
                let childrenData = {id:arr[j]._id,value:arr[j].name,label:arr[j].name}
                data.children.push(childrenData);
            }
            resultData.push(data);
        }
        resp.send({
            code: 1,
            data: resultData
        });
    }
}

