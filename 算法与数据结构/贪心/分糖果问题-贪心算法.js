// 分糖果问题（贪心算法）
// 一群孩子做游戏，现在请你根据游戏得分来发糖果，要求如下：
// 1. 每个孩子不管得分多少，起码分到一个糖果。
// 2. 任意两个相邻的孩子之间，得分较多的孩子必须拿多一些糖果。(若相同则无此限制)
// 给定一个数组 arr 代表得分数组，请返回最少需要多少糖果。
// 要求: 时间复杂度为 O(n)O(n) 空间复杂度为 O(n)O(n)

//思路：
//每人先分一个糖果，满足要求1。
//然后从左往右遍历，依次与右边比较，保证每一步满足要求2，且增加的糖果数最少。
//如果某一步的当前位置糖果变化了，则检查其与左边的关系，并保证依然满足要求2。
function candy( arr ) {
    const check = (arr,numArr,i) => {
        if(arr[i]<arr[i-1] && numArr[i]>=numArr[i-1]){//如果当前得分小于左边，且糖果不小于左边
            numArr[i-1]=numArr[i]+1;//左边糖果要比当前位置多1
            check(arr,numArr,i-1);
        }
    }
    let numArr=Array(arr.length).fill(1);//数组记录各位置糖果数量，初始都为1
    for(let i=0;i<arr.length-1;i++){//从左往右遍历
        if(arr[i]>arr[i+1] && numArr[i]<=numArr[i+1]){//如果当前得分大于右边，且糖果不大于右边
            numArr[i]=numArr[i+1]+1;//当前糖果要比右边多1
            check(arr,numArr,i);
        }else if(arr[i]<arr[i+1] && numArr[i]>=numArr[i+1]){//如果当前得分小于右边，且糖果不小于右边
            numArr[i+1]=numArr[i]+1;//右边糖果要比当前多1
        }
    }
    return numArr.reduce((s,n)=>s+n);//返回糖果总和
}
//检查左边
// function check(arr,numArr,i){
//     if(arr[i]<arr[i-1] && numArr[i]>=numArr[i-1]){//如果当前得分小于左边，且糖果不小于左边
//         numArr[i-1]=numArr[i]+1;//左边糖果要比当前位置多1
//         check(arr,numArr,i-1);
//     }
// }
let arr=[30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
console.log(candy(arr));
