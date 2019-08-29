
module.exports = {
    title:"hboot",
    description:"static page",
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
    },
    themeConfig:{
        repo:"https://github.com/ngd-b/hboot",
        docsDir:"docs",
        editLinks:true,
        sidebar:[
            {
                title:"JavaScript",
                collapsable:false,
                children:[
                    "/",
                    "/about/"
                ]
            },
            {
                title:"Html",
                children:[]
            }
        ],
        nav:[
            {text:"Home",link:'/'},
            {text:"Guide",link:"/guide/"},
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