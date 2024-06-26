//2631. Group By

Array.prototype.groupBy = function (fn) {
    let grouped = {};

    this.forEach((item) => {
        let key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        } 
        grouped[key].push(item);
        
    });

    return grouped;
};

