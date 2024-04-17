// 2626. Array Reduce Transformation

var reduce = function(nums, fn, init) {
    let i;
    let sum = init;
    for(i=0; i<nums.length; i++){
        sum = fn(sum, nums[i]);
    }
    return sum;
};