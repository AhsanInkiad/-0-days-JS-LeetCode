// 2619. Array Prototype Last

Array.prototype.last = function() {
    let x = this.length;
    if(x){
        return this[x-1];
    } else {
        return -1;
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */