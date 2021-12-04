db.getCollection("roles").insert( {

    _id: ObjectId("5fc783d126420000dc00503b"),

    authTime: "2021-03-17T13:39:42.132Z",

    authUser: "xiaofei",

    createDate: null,

    createTime: "2020-12-01",

    menus: [

        "/home",

        "/home/product",

        "/home/product/list",

        "/home/product/category",

        "/home/role",

        "/home/datav",

        "/home/datav/deal",

        "/home/datav/sale"

    ],

    name: "普通管理员",

    state: NumberInt("1"),

    updateDate: ISODate("2021-03-17T13:39:42.143Z")

} );
db.getCollection("roles").insert( {

    _id: ObjectId("5fc7842d26420000dc00503c"),

    authTime: "2021-03-17T13:00:30.502Z",

    authUser: "xiaofei",

    createDate: null,

    createTime: "2020-12-02",

    menus: [

        "/home",

        "/home/user",

        "/home/role",

        "/home/shop",

        "/home/product",

        "/home/product/list",

        "/home/product/category",

        "/home/datav",

        "/home/datav/deal",

        "/home/datav/sale"

    ],

    name: "超级管理员",

    state: NumberInt("1"),

    updateDate: ISODate("2021-03-17T13:00:30.509Z")

} );
db.getCollection("roles").insert( {

    _id: ObjectId("5fc79a771bd06831d09bcabe"),

    authTime: "2021-03-17T12:59:01.861Z",

    authUser: "xiaofei",

    createDate: ISODate("2020-12-02T13:45:27.397Z"),

    createTime: "2020-12-2",

    menus: [

        "/home",

        "/home/user",

        "/home/shop",

        "/home/product",

        "/home/product/list",

        "/home/product/category"

    ],

    name: "商品管理员",

    state: NumberInt("1"),

    updateDate: ISODate("2021-03-17T12:59:01.868Z")

} );
db.getCollection("roles").insert( {

    _id: ObjectId("604ced708d237e3d9061f8e9"),

    authTime: "2021-01-06",

    authUser: "xiaoliu",

    createDate: ISODate("2021-03-13T16:50:56.439Z"),

    createTime: "2021-3-14",

    menus: [

        "[ \"/home\", \"/product\", \"/product/category\", \"/product/list\"]"

    ],

    name: "数据管理员",

    state: NumberInt("0"),

    updateDate: ISODate("2021-03-13T16:57:52.4Z")

} );
