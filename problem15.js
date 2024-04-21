// 2725. Interval Cancellation

var cancellable = function(fn, args, t) {
    fn(...args);
    let interval = setInterval(function(){
        fn(...args)},t);
    return function cancelFn(){
        clearInterval(interval);
    }
};