// 2623. Memoize (medium)

function memoize(fn) {
    let cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
      
        if(cache[key]==undefined){
             
            cache[key] = fn(...args);
        
            return cache[key];
            
        } else {
            return cache[key];
        }
    }
}
