//Conditional Statements
function numberComparator(num1, num2){
    if (num1 > num2){
        return 'number_1 is greater than number_2';
    } else if (num1 < num2){
        return 'number_1 is smaller than number_2';
    } else{
        return  'number_1 is equal to number_2';
    }
}

console.log(numberComparator(3,1));
console.log(numberComparator(1,1));
console.log(numberComparator(3,5));


//Functions
function helloWorld(){
    console.log("Hello World");
}

console.log(helloWorld());

function addNumbers(op1, op2){
    return op1 + op2;
}

console.log('Total: ' + addNumbers(3,5));


//Arrays
let fruits=["banana","apple"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);


let numbers=[0, 1, 2, 3, 4];
numbers.forEach((element)=>console.log(element));

//For loop
function even(numbers){
    for (let i = 0 ; i < numbers.length; i++){
        if (numbers[i]%2 === 0){
            console.log("number: " + numbers[i] + " is even");
        }
    }
}

even(numbers);


//While loop
function addWhile(){
    let value = 0;
    let i = 0;
    while (i <=5){
        value = value + i;
        i ++;
    }

    return value;
}

console.log (addWhile());



let expectedElementsArray = ["Pull requests", "Issues", "Marketplace", "Explore" ];
let currentMenuElements = ["Pull requests", "Issues", "Resources", "Explore" ];

function compareArrays(current, expected){
    let i = 0;
    while (i < current.length ){
        if (current[i] !== expected[i]){
            return i;
        }
        i++;
    }

    return "Are the same";
}

console.log(compareArrays(currentMenuElements,expectedElementsArray));


module.exports.numberComparator = numberComparator;
module.exports.helloWorld = helloWorld;
module.exports.addNumbers = addNumbers;
