/**
 * 线性表设计
 * 
 */
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

// 测试
let QueueList = new queueList(10);
let result = [QueueList.getLen(),QueueList.insert(3,"admin"),QueueList.insert(0,"test"),QueueList.getVal(1),QueueList.insert(1,"admin"),QueueList.getVal(1),QueueList.delete(0),QueueList.getLen()]
console.log(result);

// 导出，其他结构会使用
export default queueList;