// 2705. Compact Object

var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj.map(compactObject).filter(Boolean);
    } else if (typeof obj === 'object' && obj !== null) {
        const compactedObj = {};
        for (const key in obj) {
            const compactedValue = compactObject(obj[key]);
            if (compactedValue !== undefined && compactedValue !== null) {
                compactedObj[key] = compactedValue;
            }
        }
        return compactedObj;
    } else {
        return obj ? obj : null;
    }
};