const multer = require('multer');
function filename(req, file, cb){
    const singfileArray = file.originalname.split('.');
        const fileExtension = singfileArray[singfileArray.length - 1];
        cb(null, singfileArray[0] + '-' + Date.now() + "." + fileExtension);
        console.log(file);
}
const storageToImages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: filename,
})
const storageToGoods = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/goods')
    },
    filename: filename,
})
const storageToShop = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/shop')
    },
    filename: filename,
})


export const uploadToImages = multer({
    storage: storageToImages
})
export const uploadToGoods = multer({
    storage: storageToGoods
})
export const uploadToShop = multer({
    storage: storageToShop
})


