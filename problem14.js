// 2715. Timeout Cancellation

var cancellable = function(fn, args, t) {
    let timeout = setTimeout(function(){
        fn(...args)},t);
    return function cancelFn(){
        clearTimeout(timeout);
    }
};