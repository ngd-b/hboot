var MinStack = function(size) {
    this.arr = new Array();
    // 栈初始化大小
    this.size = size;
    // 栈顶元素下标
    this.topIndex = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.isFull()){
        console.warn("栈已满无法插入!");
        return false;
    }
    this.arr.push(x);
    this.topIndex++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.isEmpty()){
        console.warn("栈已空无数据出栈!");
        return false;
    }
    this.arr.pop();
    this.topIndex--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.topIndex - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let result = this.arr[0];
    for(let i=1,len = this.arr.length;i<len;i++){
        if(result>this.arr[i]){
           result = this.arr[i];
        }
    }
    return result;
};
/**
 * 是否为空
 */
MinStack.prototype.isEmpty = function(){
    return this.topIndex == 0;
}
/**
 * 是否已满
 */
MinStack.prototype.isFull = function(){
    return this.topIndex == this.size;
}

let myStack = new MinStack(4);
let result = [myStack.push(-2),myStack.push(0),myStack.push(-3),myStack.getMin(),myStack.pop(),myStack.top(),myStack.getMin()];
console.log(result);