export default class BaseModel {
    /**
     * 分页查询文档
     * @param {Object} query 查询条件
     * @param {Object | String} projection 使用投影操作符指定返回的键
     *@param {Object} options
     * */
    
    static async findByPaginationHandler(query, projection, options) {
        const {pageSize, pageNumber, conditions} = query;
        console.log(pageSize,pageNumber,conditions);
        const totalCount = await this.countDocuments(conditions);//数据总数
        const num = (pageNumber - 1) * pageSize;//上一页到第一页的数据总条数
        if (totalCount <= num) {//表明当前页没有数据
            return [];
        }
        return {
            data:(await this.find(conditions || {}, projection).limit(pageSize).skip((pageNumber - 1) * pageSize)),
            totalCount,
        }
  
    }
}