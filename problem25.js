// 2722. Join Two Arrays by Id

var join = function (arr1, arr2) {
    let map = new Map();
 
    function mergeObject(ob1, ob2){
     return {...ob1, ...ob2};
    }
 
    [...arr1, ...arr2].forEach((obj)=>{
     let id = obj.id;
     if(!map.has(id)){
         map.set(id, obj);
     }else{
         let merged = mergeObject(map.get(id), obj);
         map.set(id,merged);
     }
    });
 
    let arr = [...map.values()].sort((a,b)=>a.id-b.id);
    return arr;
 };