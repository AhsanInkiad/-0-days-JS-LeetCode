// problem 2723. Add Two Promises

var addTwoPromises = async function (promise1, promise2) {
 
    const x =  await promise1;
    const y =  await promise2;
    return x + y;

};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/