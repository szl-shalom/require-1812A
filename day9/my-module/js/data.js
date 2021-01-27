define(function () {
    return [{
        name: "水果",
        children: [{
            name: "热带水果",
            children: [{
                name: "菠萝"
            }, {
                name: "香蕉"
            }, {
                name: "甘蔗"
            }]
        },
        {
            name: "温带水果",
            children: [{
                name: "苹果"
            }, {
                name: "梨"
            }, {
                name: "西瓜"
            }]
        }]
    }, {
        name: "蔬菜",
        children: [{
            name: "绿色蔬菜",
            children: [{
                name: "黄瓜"
            }, {
                name: "菠菜"
            }, {
                name: "白菜"
            }]
        },
        {
            name: "其他蔬菜",
            children: [{
                name: "野菜"
            }, {
                name: "西红柿"
            }, {
                name: "土豆"
            }]
        }]
    }]
})