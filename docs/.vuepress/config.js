
module.exports = {
    title:"hboot blog",
    description:"hboot's blog . some thing will be better",
    configureWebpack:{
        resolve:{
            alias:{
                '@alias':"assets/img/"
            }
        }
    },
    base:"/hboot/",             // 项目访问子目录
    head:[                    // 页面中 de `meta` 标签内容
        ['link',{rel:"icon",href:`/site.jpg`}]
    ],
    markdown:{
        anchor:{permalink:false},
        toc:{includeLevel:[1,2]},
        lineNumbers:true,
    },
    themeConfig:{
        repo:"https://github.com/ngd-b/hboot",
        docsDir:"docs",
        editLinks:true,
        lastUpdated:"上次更新",
        sidebar:[
            {
                title:"JS 进阶学习",
                collapsable:false,
                children:[
                    ['js/',"JS学习路线"],
                    ['js/js-native/JS 阻止事件冒泡','JS 阻止事件冒泡'],
                    ['js/Vue/实现事件绑定监听（观察者模式）','实现事件绑定监听（观察者模式）']
                ]
            },
            {
                title:"Css 魔法Show",
                collapsable:true,
                children:[
                    ['css/',"css概况"],
                    ['css/css-magic/文本超出处理、背景透明-文字不透明、图片适应处理',"文本超出处理、背景透明-文字不透明、图片适应处理"]
                ]
            },
            {
                title:"Html 建筑师",
                collapsable:true,
                children:[
                    ['html/',"语义化设计"],
                ]
            },{
                title:"数据结构与算法",
                collapsable:true,
                children:[
                ]
            }
        ],
        sidebarDepth:0,
        nav:[
            {text:"Home",link:'/'},
            {text:"CSDN",link:"https://blog.csdn.net/heroboyluck"},
            {
                text:"Languages",
                items:[
                    {text:"Chinese",link:"/languages/chinese"},
                    {text:"English",link:"/languages/english"}
                ]
            }
        ]
    }
}   