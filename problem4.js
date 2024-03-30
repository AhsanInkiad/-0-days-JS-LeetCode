// 2665. Counter II

var createCounter = function(init) {
    var x = init; 
    function i(){
            return ++x;
    }
    function d(){
            
            return --x;
    }
    function r(){
            x = init;
            return x;
    }
    return {
        increment: i, 
        decrement: d,
        reset: r
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */