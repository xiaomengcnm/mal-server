import RolesC from '../controllers/rolesC';

const express = require('express');
const router = express.Router();
//查询角色信息
router.get("/findRoles",RolesC.findAllRole);
// 添加角色
router.post('/addRoles',RolesC.AddRoles )
// 添加权限
router.post('/addAuth',RolesC.AddAuth )
// 删除
router.post('/deleteRoles',RolesC.deleteRoles )
// 根据角色的ID查询角色
router.post('/findRoleById',RolesC.findRoleById )

module.exports = router;