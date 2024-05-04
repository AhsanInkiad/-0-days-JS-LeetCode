// 2625. Flatten Deeply Nested Array

function flat(arr, n) {
    const flattened = [];
    function flattenHelper(array, depth) {
        for (const element of array) {
            if (typeof (element) === "object" && depth < n) {
                flattenHelper(element, depth + 1);
            } else {
                flattened.push(element);
            }
        }
        return flattened;
    }

    return flattenHelper(arr, 0);
}

