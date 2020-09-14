/**
 * 输入参数 
 * 1. 第一个参数为 要格式花输出的字符串长度  
 * 2. 后面的输入为要格式化的字符串，长度不够时补充 ‘0’ ；超出时分割字符串；
 * @param {*} line 
 */
function main(line){
    let lines = line.trim().split(" ");

    // 标识输入的字符串
    let lienLen = lines[0];
    // 长度为 8 
    let size = 8;
    // 去除第一个标识大小的值
    lines.shift();
    for(let len=lines.length,i=len-1;i>-1;i--){
        let subLen = lines[i].length;
        if(subLen<size){
            lines[i] = lines[i]+new Array(size - subLen).fill("0").join("");
        }else if(subLen>size){
            // 多于尺寸时，处理
            let subStr = lines[i].split("");
            // 删除当前位置上的源数据
            lines.splice(i,1);
            subStr.splice(subStr.length,0,...new Array(size - subLen%size).fill("0"));
            while(subStr.length>0){
                lines.splice(i,0,subStr.splice(0,size).join(""));
            }
        }
    }

    console.log("result:"+lines);
}
main("5 wx x54on1s73ubb9c f29iiqb28l72k y y5vor");