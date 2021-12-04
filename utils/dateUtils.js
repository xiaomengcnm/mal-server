// export default formatDate = ()=>{
//     const date = new Date();
//     return date.getFullYear() + "-" + date.getMonth+1+"-" + date.getDate()
// }

export const formatDate = function () {
    const date = new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}