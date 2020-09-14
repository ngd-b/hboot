/**
 * 判断输入是否为有效数独
 * 
 * 1. 一列不能重复数字
 * 2. 一行不能重复数字
 * 3. 3X3 矩阵中不能重复数字
 */
var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        // 行
        let blockLen = board[i].filter(val=>val===".").length;
        let temp = new Set(board[i]);
        if(temp.size!==(9-blockLen+1)){
           return false;
        }
        // 列
        let j=0;
        let columArr = [];
        blockLen = 0;
        while(j<9){
            columArr.push(board[j][i]);
            if(board[j][i] === "."){
                blockLen+=1;
            }
            j++;
        }
        if(new Set(columArr).size!==(9-blockLen+1)){
           return false;
        }
    }
    // 3X3矩阵
 
    for(let n=0;n<9;n+=3){
         
        for(let m=0;m<9;m+=3){
            let gridArr = [];
            gridArr.push(board[n][m]);
            gridArr.push(board[n][m+1]);
            gridArr.push(board[n][m+2]);
            
            gridArr.push(board[n+1][m]);
            gridArr.push(board[n+1][m+1]);
            gridArr.push(board[n+1][m+2]);
            
            gridArr.push(board[n+2][m]);
            gridArr.push(board[n+2][m+1]);
            gridArr.push(board[n+2][m+2]);
            
             let blockLen = gridArr.filter(val=>val===".").length;
            if(new Set(gridArr).size!==(9-blockLen+1)){
               return false;
            }
        }
    }
    
    return true;
};

// 测试示例
let arr = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
let arr_1 = [
    [".",".","4",".",".",".","6","3","."],
    [".",".",".",".",".",".",".",".","."],
    ["5",".",".",".",".",".",".","9","."],
    [".",".",".","5","6",".",".",".","."],
    ["4",".","3",".",".",".",".",".","1"],
    [".",".",".","7",".",".",".",".","."],
    [".",".",".","5",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
];
console.log(isValidSudoku(arr_1));
