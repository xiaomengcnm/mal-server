db.getCollection("categroys").insert( {
    _id: ObjectId("5fc0672c26420000dc005034"),
    name: "幼儿母婴",
    parentId: "0",
    type: "一级分类"
} );
db.getCollection("categroys").insert( {
    _id: ObjectId("5fc0674226420000dc005035"),
    name: "奶粉",
    parentId: "5fc0672c26420000dc005034",
    type: "二级分类"
} );
