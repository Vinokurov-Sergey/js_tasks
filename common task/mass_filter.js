const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {return num % 2 == 0};

function filterArray(mixedArray, isEven) {

    let ar = [];

    for (let i=0; i<mixedArray.length; i++) {

        if (isEven(mixedArray[i]) == true) {

            ar.push(mixedArray[i]);
        }
    }
    
    return ar;
}

console.log(filterArray(mixedArray, isEven));