/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    // 其数据结构应该是一个对象，键值对保存
    // 且默认键值‘0’ 为head
    this.list = {
        '0':{
            next:null
        }
    };
    // 数据元素
    this.attr = {
        val:null,
        next:null
    }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let head = this.list["0"];
    let j = -1;
    // 查找值
    while(head && head.next!==null && j<index){
        head = this.list[head.next];
        j++;
    }
    if(j!=index){
       console.error("取元素参数错误!");
        return -1;
       }
    return head.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let obj = Object.assign({},this.attr);
    // 头
    let head = this.list["0"];
    obj.val = val;
    let time = Symbol();
    if(head.next!=null){
        obj.next = head.next
    }
    head.next = time;
    this.list[time] = obj;
    return true;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let obj = Object.assign({},this.attr);
    // 
    obj.val = val;
    let tail = this.list["0"];
    while(tail.next!==null){
        tail = this.list[tail.next];
    }
    let time = Symbol();
    tail.next = time;
    this.list[time] = obj;
    return true;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let obj = Object.assign({},this.attr);
    // 头/默认 指向第一个元素
    let head = this.list["0"];
    // 查找index处的节点元素
    let j = -1;
    while(head.next!==null && j<index-1){
        head = this.list[head.next];
        j++;
    }
    if(j!==index-1){
       console.error("插入元素位置错误!");
        return -1;
    }
    obj.val = val;
    let time = Symbol();
    obj.next = head.next;
    head.next = time;
    this.list[time] = obj;
    return true;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let head = this.list["0"];
    let j = -1;
    while(head.next!==null &&this.list[head.next].next!=null && j<index-1){
          head = this.list[head.next];
            j++; 
    }
    if(j!==index-1){
       console.error("删除元素位置错误!");
        return false;
    }
    // 更改指向
    let id = head.next;
    head.next = this.list[head.next].next;
    // 删除数据
    Reflect.deleteProperty(this.list,id);
    return true;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var obj = new MyLinkedList();
let result = [obj.addAtHead(1),obj.addAtTail(3),obj.addAtIndex(1,2),obj.get(1),obj.deleteAtIndex(1),obj.get(1),obj.list]
console.log(result);