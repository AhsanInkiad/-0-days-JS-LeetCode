// 2637. Promise Time Limit

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((res, rej)=>{
            let s = setTimeout(()=>{rej("Time Limit Exceeded")}, t);

            fn(...args)
                .then((x)=>{res(x)})
                .catch((err)=>{rej(err)})
                .finally(()=>{clearTimeout(s)});

        });
    }
};