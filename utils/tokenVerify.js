import jwt from 'jsonwebtoken';
import {PRIVATE_KEY} from '../consts';
/* 
一下路径不需要token验证
*/
const whiteList = [
    "/users/login",
    "/goods/fileUpload",
    "/"
]

export default function(req,res,next){
    if(req.method == 'OPTIONS')return next();
     const curPath = req.path;
     if(whiteList.includes(curPath))return next();
     const {token} = req.headers;
     if(!token){
         res.status(401);
         res.send({code:0,msg:'token失效'});
         return;
     }
     jwt.verify(token,PRIVATE_KEY,function(err,decode){
         if(err){
            res.status(401);
            res.send({code:0,msg:'token失效'});
            return;
         }
         
         req.user = {account:decode.account,role:decode.role,_id:decode._id}
         next();
     });

}