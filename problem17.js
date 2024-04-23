// 2622. Cache With Time Limit

var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    let keyExists = this.cache.get(key);
    if (keyExists) {
        clearTimeout(keyExists.timerId);
        let timerId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, { value, timerId });
        return true;
    } else {
        let timerId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, { value, timerId });
        return false;
    }


};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */