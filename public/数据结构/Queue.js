function queue(size){
    this.size = size;
    this.arr = new Array(this.size);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
}
queue.prototype = {
    append:function(value){
        debugger;
        if(this.isFull()){
            return false;
        }
        this.arr[this.rear] = value;
        this.rear = (this.rear+1) % this.size;
        this.count++;
        return true;
    },
    delete:function(){
        if(this.isEmpty()){
            return false;
        }
        this.arr[this.front] = null;
        this.front = (this.front+1) % this.size;
        this.count--;
        return true;
    },
    frontValue:function(){
        return this.arr[this.front];
    },
    rearValue:function(){
        return this.arr[this.rear-1];
    },
    getValue:function(){
        return this.arr[this.front];
    },
    isEmpty:function(){
        if(this.count == 0){
            return true;
        }
        return false;
    },
    isFull:function(){
        if(this.count>0 && this.front == this.rear){
            return true;
        }
        return false;
    }
}
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
// var MyCircularQueue = function(k) {
//     this.size = k;
//     this.start = 0;
//     // 尾值去减一
//     this.end =0;
//     this.arr = new Array(this.size);
//     this.count = 0;
// };

// /**
//  * Insert an element into the circular queue. Return true if the operation is successful. 
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.append = function(value) {
    
//     if(this.isFull()){
//        return false;
//     }
    
//     this.arr[this.end] = value;
//     this.end = (this.end+1)%this.size;
//     this.count++;
//     return true;
// };

// /**
//  * Delete an element from the circular queue. Return true if the operation is successful.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.delete = function() {
   
//     if(this.isEmpty()){
//        return false;
//     }
//     this.arr[this.start] = null;
//     this.start = (this.start+1)%this.size;
//     this.count--;
//     return true;
// };

// /**
//  * Get the front item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.frontValue = function() {
//     if(this.isEmpty()){
//        return false;
//        }
//     return this.arr[this.start];
// };

// /**
//  * Get the last item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.rearValue = function() {
//     if(this.isEmpty()){
//        return false;
//        }
//     return this.arr[this.end-1];
// };

// /**
//  * Checks whether the circular queue is empty or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
//     if(this.count==0){
//         return true;
//        }
//     return false;
// };

// /**
//  * Checks whether the circular queue is full or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
//     if(this.count>0 && this.start == this.end){
//         return true;
//        }
//     return false;
// };

let myQueue = new queue(3);
let result = [myQueue.append(1),
    myQueue.append(2),
    myQueue.append(3),
    myQueue.append(4),
    myQueue.rearValue(),
    myQueue.isFull(),
    myQueue.delete(),
    myQueue.append(4),
    myQueue.rearValue()];
console.log(result);