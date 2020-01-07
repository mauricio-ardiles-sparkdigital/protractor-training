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

module.exports.numberComparator = numberComparator;
module.exports.helloWorld = helloWorld;
module.exports.addNumbers = addNumbers;
