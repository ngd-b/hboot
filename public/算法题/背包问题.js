/**
 * 背包：
 * 对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢
 */

 /**
  * 回溯算法解决
  * @param {物品重量数组} arr 
  * @param {物品个数} len 
  * @param {背包最大承重} maxNum 
  */
 function backTrack(arr,len,maxNum){
    // 最终的结果值
    let result = 0;
    // 缓存循环状态，减少循环次数
    let track = new Array(len);
    for(let i=0;i<len;i++){
        track[i] = new Array(maxNum).fill(0);
    }
    console.log(JSON.stringify(track));
    /**
     * 递归调用函数
     * @param {需要处理的物品} i 
     * @param {目前已加入背包的重量} w 
     */
    function f(i,w){
        if(i === len || w === maxNum){
            // 背包已满
            /**
             * 1. i===len 表明一次遍历完成，此时累加的背包重量不一定是最大的。
             * 2. w === maxNum 表明最大背包重量可以达到指定的 max.即为最理想值；在此处可优化，后续的处理无意义。
             */ 
            if(w>result) result = w;
            return;
        }
        if(track[i][w]) return;
        track[i][w] = 1;
        console.log(i,w);
        if(w + arr[i]<=maxNum){
            // 如果当前物品重量加入 w 小于最大重量，则选择加入 物品 i 
            f(i+1,w+arr[i]);
        }
        /**
         * 1. 循环 i - (len - 1) ,调用 f(i,0)
         * 2. 此处 w 和传入的背包值保持一致。
         * 3. 调用分析，同一位置的数据出现重复调用。
         */
        f(i+1,w);
    }
    // 初始调用，递归计算
    f(0,0);
    return result;
 }
 console.log(backTrack([2,2,4,6,3],5,16));