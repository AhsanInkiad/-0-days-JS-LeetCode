var filter = function(arr, fn) {
    let x = [];
    let i;
    for(i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            x.push(arr[i]);
        } 
    }
    return x;
};