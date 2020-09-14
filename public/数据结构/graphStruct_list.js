/**
 * 邻接表存储结构
 */
function Node(){
    this.val = null;
    this.next = null;
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};
/**
 * 初始化头部
 */
MyLinkedList.prototype.init = function(){
    // 初始化 头部接节点
    this.head = new Node();
    this.head.next = null;
}
/**
 * 获取链表的长度 
 */
MyLinkedList.prototype.getLen = function(){
    // 
    let p = this.head;
    let size = 0;
    while(p.next!==null){
        p = p.next;
        size++;
    }
    return size;
}
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let p = this.head;
    let j = -1;
    // 查找值
    while(p.next!==null && j<index){
        p = p.next;
        j++;
    }
    if(j!=index){
        console.error("取元素参数错误!");
        return -1;
    }
    return p.val;
};
/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let p = this.head;
    // 查找index处的节点元素
    let j = -1;
    while(p.next!==null && j<index-1){
        p =p.next;
        j++;
    }
    if(j!==index-1){
        console.error("插入元素位置错误!");
        return -1;
    }
    let temp = new Node();
    temp.val = val;
    temp.next = p.next;
    p.next = temp;
    return true;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let p = this.head;
    let j = -1;
    while(p.next!==null &&p.next.next!=null && j<index-1){
        p = p.next;
        j++; 
    }
    if(j!==index-1){
        console.error("删除元素位置错误!");
        return false;
    }
    p.next = p.next.next;
    return true;
};

// var obj = new MyLinkedList();
// obj.init();
// let result = [obj.addAtIndex(0,2),obj.addAtIndex(1,10),obj.addAtIndex(2,5),obj.get(1),obj.deleteAtIndex(1),obj.get(1),JSON.stringify(obj.head)]
// console.log(result);

// 顶点数组的元素数据结构
function Point(){
    // 顶点
    this.point = null;
    // 下标值，指定
    this.index = null;
    // 指向边
    this.border = null;
}
// 定义顶点的最大个数
const MAX_POINT = 10;
// 邻接表存储结构
function GraphList(){
    // 顶点信息存储的数组
    this.pointArr = [];
    // 顶点个数
    this.pointLen = 0;
    // 边的个数
    this.borderLen = 0;
}
GraphList.prototype = {
    init(){
        // 初始化邻接表结构
        for(let i=0;i<MAX_POINT;i++){
            let point = new Point();
            // 顶点下标
            point.index = i;
            // 顶点边初始化为单链表结构对象
            point.border = new MyLinkedList();
            point.border.init();
            this.pointArr.push(point);
        }
    },
    insertPoint(i,p){
        // 在指定位置 i 插入顶点 p 
        if(i>=0&&i<MAX_POINT){
            this.pointArr[i].point = p;
            this.pointLen++; 
        }else{
            console.error("参数不合法!");
        }
    },
    insertBorder(p1,p2){
        // 指定顶点 p1 p2 建立边关系
        if(p1<0 || p1>=this.pointLen || p2<0 || p2>=this.pointLen){
            console.error("参数不合法!");
            return;
        }
        // let border = new Node();
        // border.val = p2;
        // border.next = this.pointArr[p1].border;
        // this.pointArr[p1].border = border;
        
        // 调用链表自己的方法，实现头部插入
        this.pointArr[p1].border.addAtIndex(0,p2);

        this.borderLen++;
    },
    deleteBorder(p1,p2){
        // 删除一条边 p1 p2 的顶点关系
        if(p1<0 || p1>this.pointLen || p2<0 || p2>this.pointLen){
            console.error("参数不合法!");
            return;
        }
        // 当前的顶点关系边的 链表结构
        let pre = null;
        let curr = this.pointArr[p1].border;
        while(curr!=null && curr.val!==p2){
            // 无关系边，或者 curr就是需要处理的边
            pre = curr;
            curr = curr.next;
        }
        // 删除操作
        if(curr!==null && curr.val === p2 && pre ==null){
            // p2 是 p1 的邻接边 ，且是第一个元素
            this.pointArr[p1].border = curr.next;
            this.borderLen--;
        }else if(curr!==null && curr.val===p2 && pre!==null){
            // p2 不是 p1 的链表里的第一个元素
            pre.next = curr.next;
            this.borderLen--;
        }else{
            console.error(" p1/p2 无关系边");
        }

    },
    getFirstBorder(p){
        // 获取顶点 p 的第一个邻接边
        if(p<0 || p>this.pointLen){
            console.error("参数不合法!");
            return;
        }
        let p = this.pointArr[p].border;
        if(p!==null){
            return p.val;
        }
        return false;
    }
}

// 测试
let graph = new GraphList();
// 初始化  默认大小 为 10 ；可改为动态传入大小
graph.init();
// 插入顶点
graph.insertPoint(0,"A");
graph.insertPoint(1,"B");
graph.insertPoint(2,"C");
graph.insertPoint(3,"D");
graph.insertPoint(4,"E");
graph.insertPoint(5,"F");
// 插入关系边
graph.insertBorder(0,2);
graph.insertBorder(0,1);
graph.insertBorder(0,3);
graph.insertBorder(2,4);
graph.insertBorder(3,5);
graph.insertBorder(0,5);
console.log(JSON.stringify(graph.pointArr));
