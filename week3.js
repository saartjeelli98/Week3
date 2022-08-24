// 1. A) and B)last element - first element:

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

const last = ages[ages.length - 1];
const first = ages[0];
console.log(last);
console.log(first);

console.log(last - first);

ages.push(100);

//1. C) average age:


function findAverage(array){
    let sum1 = 0;
    for (let i = 0; i< array.length; i++){
        sum1 += array[i];
    }
    let avg = sum1/array.length;{
        return avg;
    }
}
console.log(findAverage(ages));


//2. a) average length of name:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


console.log(findAverage(names));

// 2. b) concatenating names array

//names.for each ();

let newNames = " ";
    for (let i=0; i<names.length; i++){
        newNames += names[i] + " ";
    }

console.log(newNames.trim());

//5. create nameLengths

let nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);

//6. sum of nameLengths

let total = 0;
nameLengths.forEach(item => total += item);

console.log(total);

//7. print word n times

function hello(word, n){
    return word.repeat(n);
}

console.log(hello("Hello", 8))

//8. print first and last name to create full name

function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(fullName("Barack", "Obama"));

//9. return true if sum of numbers > 100

let theArray = [1, 34, 56, 12, 78, 34];

function findSum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
        } if (sum > 100){
            return true;
        } else (sum < 100);{
            return false;
        }
}
console.log(findSum(theArray));


//10. average of all elements in an array


function findAverage(array){
    let sum1 = 0;
    for (let i = 0; i< array.length; i++){
        sum1 += array[i];
    }
    let avg1 = sum1/array.length;{
        return avg1;
    }
}
console.log(findAverage(theArray));

//11. if an array if larger than another, print true
let arr1 = [45, 23, 89, 344, 23, 78];
let arr2 = [67, 23, 45, 12, 77, 34];

function compareArrays(array1, array2){
    return (findAverage(array1) > findAverage(array2));
}
console.log(compareArrays(arr1, arr2));

//12. 

let isHotOutside = true;
let moneyInPocket = 9;

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
    return true;
    } else{
        return false;
    }
}

console.log(willBuyDrink(true, 9));

//13. 

/*This function was made to find out what grade a student is in 
given the arary, studentAges.*/

let studentAges = [12, 12, 13, 13, 15, 15, 14];

function findGrade(studentAges){
    if (studentAges == 12 || 13){
        return "7th Grade";
    }else if (studentAges == 14 || 15){
        return "8th Grade";
    }
}

console.log(findGrade(14));

