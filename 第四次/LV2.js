let arr = [1, [2, 3], [4, 5, [6, 7, 8]], 9];

//递归
function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten(arr))

//toString和split
function com(arr) {
    let result = [];
    return result = arr.toString().split(',').map(Number)
}
console.log(com(arr));


//结果 [1,2,3,4,5,6,7,8,9]