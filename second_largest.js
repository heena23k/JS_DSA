// let arr = [1,3,5,6,7,3,8,8,65];
// using set to store unique val
//  -- 1st approach 
// let unique = [...new Set(arr)].sort((a,b)=>b-a);
// console.log(unique[1]);


// 2md approach 
let array = [2,5,6,7,34,23,456];

function secL(array){
    let largest = -Infinity;
    let secLargest = -Infinity;
    if(array.length<2){
        return undefined;
        console.log("Not Possible");
        
    }
    for(let i =0;i<=array.length;i++){
        if(array[i]>largest){
            secLargest = largest;
            largest = array[i];
        }



    
    else if(array[i]>secLargest&& array[i]!==largest){
secLargest =array[i];
    }
    }
return secLargest=== -Infinity?"Undefined":secLargest;
}
let result = secL(array);
console.log(result);
