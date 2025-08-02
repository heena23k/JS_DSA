let arr1 = [ 5, 6, 7, 8];
let arr2 = [5, 6, 7, 8];

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
         return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) 
            return false;
    }

    return true;
}

const result = arraysAreEqual(arr1, arr2);
console.log("Are arrays equal?", result);

