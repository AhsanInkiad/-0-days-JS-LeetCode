// 2677. Chunk Array
var chunk = function(arr, size) {
    let chunkedArr=[];
    for(i=0; i<arr.length; i+=size){
        chunkedArr.push(arr.slice(i, i+size));
    }
    return chunkedArr;
};