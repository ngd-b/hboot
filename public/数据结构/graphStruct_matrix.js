/**
 * 图的数据结构
 * 
 * 邻接矩阵存储结构、邻接表存储结构
 */

 


// 顺序表
function queueList(len){
    // 最大空间
    this.MaxSize = len;
    // 存储的数据类型使用数组
    this.list = new Array(len);
    // 当前数据元素个数
    this.size = 0;
}
queueList.prototype = {
    getLen(){
        return this.size;
    },
    insert(i,val){
        // 数据插入
        if(this.size>=this.MaxSize){
            console.error("顺序表已满，无法插入!");
            return false;
        }else if(i<0 || i>this.size){
            console.error("参数i不合法!");
            return false;
        }else{
            // 执行顺序插入，将>i 后面的元素移位。
            for(let j=this.size;j>i;j--){
                this.list[j] = this.list[j-1];
            }
            this.list[i] = val;
            this.size++;
            return true;
        }
    },
    delete(i){
        // 删除元素
        if(this.size<=0){
            console.error("顺序表无数据可删!");
            return false;
        }else if(i<0 || i>this.size-1){
            console.error("参数i不合法!");
            return false;
        }else{
            for(let j=i+1;j<this.size - 1;j++){
                this.list[j -1] = this.list[j];
            }
            this.size--;
            return true;
        }
    },
    getVal(i){
        // 获取指定位置的元素数据
        if(i<0 || i>this.size-1){
            console.error("参数i不合法!");
            return false;
        }
        return this.list[i];
    }
}

// 图
function Graph(){
    // 存储顶点的顺序表
    this.pointList = new queueList();
    // 存储边的二维数组
    this.borderArr = new Array();
    //
    this.borderLen = 0;
}
Graph.prototype = {
    init:function(n){
        // 需要初始化二维数组
        this.borderArr = new Array(n);
        for(let start=0;start<n;start++){
            // 如果默认 0 为两个顶点之间无关系边时的标识；后续不拿 0 作为权值
            this.borderArr[start] = new Array(n).fill(0);
        }
        // 初始化 n 个顶点的
        // for(let i=0;i<n;i++){
        //     for(let j=0;j<n;j++){
        //         if(i == j){
        //             this.borderArr[i][j] = 0;
        //         }
        //     }
        // }
        this.borderLen = 1;
    },
    inserPoint:function(p){
        // 新增一个顶点
        this.pointList.insert(this.pointList.size,p);
    },
    insertBorder:function(p1,p2,val){
        // 插入一条有向边；插入无向边，插入两条有向边操作；
        // p1 p2 指定一条边，有关系连接
        // val 为这条边的权值
        if(p1<0||p1>this.pointList.size || p2<0 || p2>this.pointList.size){
            console.error("参数不合法!");
            return;
        }
        this.borderArr[p1][p2] = val;
        this.borderArr[p2][p1] = val;
        this.borderLen++;
    },
    deleteBorder:function(p1,p2){
        // 删除一条边
        if(p1<0||p1>this.pointList.size || p2<0 || p2>this.pointList.size || p1 ===p2){
            console.error("参数合法!");
            return;
        }
        if(this.borderArr[p1][p2] == Infinity || p1 ==p2){
            console.error("该边不存在!");
            return;
        }
        this.borderArr[p1][p2] = Infinity;
        this.borderLen--;
    },
    getFirstPoint:function(p){
        // 获取指定点的邻接点
        if(p<0 || p>=this.pointList.size){
            console.error("参数不合法!");
            return;
        }
        for(let i=0;i<this.pointList.size;i++){
            if(this.borderArr[p][i]>0 && this.borderArr[p][i]<Infinity){
                return i;
            }
        }
        return -1;
    }
}   

// 测试
let graph = new Graph();

graph.init(5);
graph.inserPoint(1);
graph.inserPoint(2);
graph.inserPoint(3);
graph.inserPoint(4);
graph.inserPoint(5);
graph.insertBorder(0,2,1);
graph.insertBorder(0,1,1);
graph.insertBorder(0,4,1);
graph.insertBorder(0,3,1);
graph.insertBorder(1,3,1);
graph.insertBorder(2,4,1);
console.log(graph.borderArr,graph.pointList);

// let arr = [new Array(3),new Array(3)];
// arr[1][1] = 32;
// console.log(arr);