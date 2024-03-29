var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};


const f = createHelloWorld();
const x = f();
console.log(x); 
 