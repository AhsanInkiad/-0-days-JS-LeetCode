// 2635. Apply Transform Over Each Element in Array

var map = function(arr, fn) {
    let i;
    for (i=0; i<arr.length; i++){
        arr[i] = fn(arr[i], i) ;
            
    }
    return arr;
};