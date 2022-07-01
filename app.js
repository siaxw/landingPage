function troubleshooting(){
    const a = 1;
    const b = 1;

    let result;

    result = a + b;

    return result
}

console.log(troubleshooting());

/*
number = Number(prompt('enter a number'));

function numberChecker(){
    if(number >= 10){
        return true
    }else if(number < 10){
        return false
    }
}
*/
const a = 1 + 8;
const b = 3 * 22;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
console.log(e);

const firstName = 'Islom';
const lastName = 'Sattorov';
const birthYear = 1999;
const currentYear = 2022;
const greeting = `Hello! my name is ${firstName} ${lastName} and i am ` + (currentYear - birthYear) + ` years old!`;
console.log(greeting)
const fullName = `${firstName} ${lastName}`;
const age = currentYear - birthYear;
const greeting1 = `Hello, my name is ${fullName} and i am ${age} years old!`;
console.log(greeting1);

let text = "Hi my name is Islom and i am 23 years old!";
let n = text.search(/islom/i);
let x = text.search("islom");
let y = text.search(/islom/);
let h = text.search(/Islom/);
console.log(n);
console.log(x);
console.log(y);
console.log(h);

let text1 = "Hi my name is Islom and i am 23 years old!";
let q = text1.replace(/islom/i, "Usmon");
console.log(q);

const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));

console.log(/e/.test("The best things in life are free!"));

console.log(/e/.exec("The best things in life are free!"));

const bigmouth = 'i\'ve got no right to take my place';
console.log(bigmouth);

function add7(number){
    return number + 7;
}

function multiply(a,b){
    return a*b
}

console.log(multiply(2,2));


function capitalize(string){
    let firstLetter = string.slice(0,1);
    let upperCaseFirstLetter = firstLetter.toUpperCase();
    let stringWUpperCase = upperCaseFirstLetter + string.slice(1);
    return stringWUpperCase;
};

console.log(capitalize("islom"));
console.log(capitalize('usmon'));

for(let i = 0;i <= 10; i++){
    console.log(`Посчитано овец ${i} !`);
}

console.log('Уснул');

let cat = {
    'legs': 3,
    'name': 'Garmony',
    'color': 'Green',
};
console.log(cat)

let user = {
    'first name': 'Islom',
    'last name': "Sattorov",
    age: 23,
    'full name': `${firstName} ${lastName}`,
    email: 'slmsttrv1@gmail.com',
    phone: +992909096096
};

if(user.age >= 23){
    console.log(`Wow u look big`);
}

let shoppingDone = false;
let childsAllowance;

if(shoppingDone){
    childsAllowance = 10;
}else{
    childsAllowance = 5;
}

console.log(childsAllowance);


let cheese = 'Cheddar';
if(cheese){
    console.log('Yay! Cheese available for making cheese on toast.')
}else{
    console.log('No cheese on toast for you today.')
}
