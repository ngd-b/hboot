/**
 * 排序算法
 */
// 冒泡排序 - 1
function BubbleSort_optimal(arr){
  let len = arr.length;
  let flag = true;      // 标识是否进行了值交换
  for(let i=1;i<len&&flag;i++){       // 根据判断 flag； 如果没有交换过值，则当前数组是排序好的，
    flag = false;
    for(let j=0;j<len-i;j++){       // 内存循环依次把最大的值交换到最后
      if(arr[j]>arr[j+1]){
        flag = true;                   
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}
// 冒泡排序
function BubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr;
}
// 快速排序
function QuickSort(arr,low=0,high=arr.length-1){
  let i = low,j = high;
  let temp = arr[low];
  while(i<j){                 // 依次循环结束标识，i>=j
    while(i<j&&temp<=arr[j]){        // 找到比temp 小的值，j最小为i
      j--;
    }
    if(i<j){       // j 不等于i ，找到了比temp 小的值，进行值交换
      arr[i] = arr[j];     // i 的位置则放置为更小的值
      i++;
    }
    while(i<j&&arr[i]<temp){    // 找temp 大或相等的值，i最大为 j 
      i++;
    }
    if(i<j){          // i 不等于j ，找到了比temp大的值，进行值交换
      arr[j] = arr[i];
      j--;
    }
  }
  arr[i] = temp;
  
  if(low<i) QuickSort(arr,low,i-1);
  if(i<high) QuickSort(arr,j+1,high);
  
  return arr;
}
// 选择排序
function SelectSort(arr){
  let minIndex=0,
      len = arr.length;                               
  for(let i=0;i<len-1;i++){
    minIndex = i;                          // 默认最小值的下标值为 i ,找比它小的值得下标      
    for(let j=i+1;j<len;j++){
      if(arr[minIndex]>arr[j]){                     // 找到比i 位置小的值，记录下标值
        minIndex = j; 
      }
    }
    if(minIndex!=i){                               // 最小值小标不等于i  时，进行交换
          [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
       }
  }
}
// 插入排序
function InsertSort(arr){
  let len = arr.length;
  for(let i=0;i<len-1;i++){
    let j= i;
    temp = arr[i+1];
    while(j>-1 && temp<arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}
/**
 * 测试
 */
console.log(QuickSort([2,1,9,3,6,7,4]));