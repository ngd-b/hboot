/**
 * s1 字符串的某一排列出现在 s2 中
 * @param {*} s1 
 * @param {*} s2 
 */

var checkInclusion = function(s1, s2) {
    if(!s1){
       return true;
    }
    let target = s1.split(""),
        p = s2.split("");
    let i=0;
    while(p.length>0){
        if(target.length===0){
           // 处理完了
            return true;
        }
        let val = p.shift();
        let index = target.indexOf(val);
        if(index>-1){
            target.splice(index,1);
            console.log(target,val,index,p);
            continue;
        }
        i++;
        // 不满足,恢复原貌
        if(target.length!==s1.length){
            p = s2.slice(i).split("");
            target = s1.split("");
        }
        
    }
    
    if(target.length===0){
       return true;
       }
    return false;
};

// 测试
let s1 = "ab",
    s2 = "eidboaoo";

console.log(checkInclusion(s1,s2));