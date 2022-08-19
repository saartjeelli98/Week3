// 1. A) and B)last element - first element:

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

const last = ages[ages.length - 1];
const first = ages[0];
console.log(last);
console.log(first);

console.log(last - first);

ages.push(100);

//1. C) average age:

var sum = 0;
for(var i=0; i<ages.length; i++){
    sum += ages[i];
}

var avg = sum/ages.length; 
console.log(avg);

//2. a) average length of name:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var sum = 0;
for(var i=0; i<names.length; i++){
    sum+=names[i].length;
}
var average = sum/names.length;

console.log(average);

// 2. b) concatenating names array

for (let i=0; i<names.length; i++){
    console.log(names.join(" "));
}

/* let newName = " ";
    for (let i=0; i<names.length; i++){
        newName += names[i] + " ";
    }

console.log(newName.trim()); -> because they are strings
*/

//5. create nameLengths

let nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);

//6. sum of nameLengths

for (let i=0; i<nameLengths.length; i++){
    let sum= nameLengths.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
}
console.log(sum);

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

let myArray = [1, 34, 76, 23, 78];
let sum5 = 0;

function findSum(){
    for (let i = 0; i < myArray.length; i++){
        sum5 += myArray[i];
        } if (sum5 > 100){
            return "True";
        }
}
console.log(findSum());


//10. average of all elements in an array
let avg1 = 0;
let sum1 = 0;

function findAverage(){
    for (let i = 0; i< myArray.length; i++){
        sum1 += myArray[i];
    }
    let avg1 = sum1/myArray.length;{
        return avg1;
    }
}
console.log(findAverage());

//11.

let array1 = [45, 23, 89, 344, 23, 78];
let array2 = [67, 23, 45, 12, 77, 34];

let sum2 = 0;
let sum3 = 0;
let avg3 = 0;
let avg4 = 0;

function compareArrays(){
    for (let i=0; i<array1.length; i++){
        sum2 += array1[i];
    } avg3 = sum2 / array1.length;
    for (let i=0; i<array2.length; i++){
        sum3 += array2[i];
    } avg4 = sum3 / array2.length;
    if ( avg3 > avg4){
        return "True";
    } else{
        return "False";
    }
}

console.log(compareArrays())

//12. 

let isHotOutside = true;
let moneyInPocket = 9;

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
    return "True";
    } else{
        return "False";
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));

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

