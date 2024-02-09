// ჩიჩუას გაკეთებული

let result;

let a = prompt("Enter");
let b = prompt("Enter");

function checkType(a, b) {
  if (isNaN(Number(a)) !== isNaN(Number(b))) return "NOT DOABLE";

  if (!isNaN(Number(a))) {
    result = Number(a) + Number(b);
  } else result = a + b;

  return result;
}

console.log(checkType(a, b));

console.log(typeof result);

// პროექტი 11 - Tip Calculator - "ჩაის" კალკულატორი

let check = prompt("Enter the total price");
let fee = prompt("Enter a service fee");
let resultFee;
let result;

function eraseCheck(x, y) {
  x = parseFloat(x.replace(/[\$%]/g, "")).toFixed(1);
  x *= 1;
  y = y.replace(/[\$%]/g, "");
  y /= 100;

  let resultFee = parseFloat(x * y).toFixed(2) + "$";
  result = console.log(
    `Total price: ${check}\nFee: ${fee}\nService fee for the total is: ${resultFee} `
  );

  return resultFee;
}

eraseCheck(check, fee);

// პროექტი 12 - Retirement Calculator - საპენსიო კალკულატორი

let currentAge = Number(prompt("What is your current age?"));
let ageRetire = Number(prompt("At what age would you like to retire?"));
let difference = ageRetire - currentAge;
let date = new Date().getFullYear();
let retireYear = difference + date;

if (!isNaN(currentAge) || !isNaN(ageRetire)) {
  console.log(`Your age - ${currentAge}`);
  console.log(`Age you want to retire at - ${ageRetire}`);
  console.log(`You will retire in ${difference} years.`);
  console.log(`You will retire in ${retireYear}`);
} else {
  console.log("Refresh the page and enter the number boi");
}

// პროექტი 13 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი

//პროექტი 14 - Pizza Party - პიცის წვეულება

let people = Number(prompt("How many people?"));
let pizzas = Number(prompt("How many pizzas?"));
let slices = Number(prompt("How many slices in each pizza?"));
let remainder;
let totalSlices = pizzas * slices;
let sliceForEach;
let unit = "slice";

function sliceCounter(totalSlices, people) {
  if (people > totalSlices) {
    console.log("each person gets less than one pizza");
  } else {
    sliceForEach = parseInt(totalSlices / people);

    if (sliceForEach > 1) {
      unit += "s";
    }

    console.log(`How many people?: ${people}`);
    console.log(`How many pizzas?: ${pizzas}`);
    console.log(`How many slices in each pizza?: ${slices}`);
    console.log(`Total slices ${totalSlices}`);
    console.log(`Each person can eat ${sliceForEach} ${unit} `);
    if (totalSlices % people != 0) {
      remainder = totalSlices % people;
      console.log(`leftover slices: ${remainder}`);
    }
  }
}

sliceCounter(totalSlices, people);

// პროექტი 15

function occuranceCounter(arr1, arr2) {
  let count = 0;
  let j = 0;
  obj = {};

  for (let i = 0; i < arr2.length; i++) {
    count = 0;
    for (let k = 0; k < arr1.length; k++) {
      if (arr2[j] == arr1[k]) {
        count++;
      }
    }
    obj[arr2[j]] = count;

    k = 0;
    j++;
  }
  return obj;
}
let word;
let arr1 = [];
let list = [];

while (word != "") {
  word = prompt("Enter a food product");
  arr1.push(word);
}

arr1.pop();

let arr2 = [...new Set(arr1)];

// console.log(arr1);
// console.log(arr2);

let obj1 = occuranceCounter(arr1, arr2);

// console.log(obj1)

for (let i = 0; i < arr2.length; i++) {
  word = obj1[arr2[i]] + " " + arr2[i];
  word = word.toUpperCase();
  list.push(word);
}

// console.log(list)

const finalArray = [...list].sort((name1, name2) =>
  name1.split(" ")[1].localeCompare(name2.split(" ")[1])
);
// console.log(finalArray);

for (let i = 0; i < finalArray.length; i++) {
  console.log(finalArray[i]);
}

// 16 პროექტი

let word;
let arr = [];

while (word != "") {
  word = prompt("Enter a name");
  arr.push(word);
}

arr.pop();
console.log(arr);

if (arr.length == 0) {
  console.log(`Adieu, Adieu`);
}
if (arr.length == 1) {
  console.log(`Adieu, Adieu, to ${arr[0]}`);
}
if (arr.length == 2) {
  console.log(`Adieu, Adieu to ${arr[0]} and ${arr[1]}`);
}

if (arr.length == 3) {
  console.log(`Adieu, Adieu to ${arr[0]},${arr[1]} and ${arr}`);
}

// პროექტი 9 - პატარა პროფესორი.

function random(x) {
  const a = Math.floor(Math.random() * x * (10 - 0 + 1)) + 0;
  const b = Math.floor(Math.random() * x * (10 - 0 + 1)) + 0;
  const arr = [];
  arr.push(a);
  arr.push(b);
  return arr;
}

//
let score = 0;
let x = Number(prompt("What do you want the difficulty to be?"));
//

console.log(`Level  1`);

for (let k = 0; k < 10; k++) {
  let rndmNums = random(x);
  let answer = rndmNums[0] + rndmNums[1];
  let yourAnswer;
  for (let i = 0; i < 3; i++) {
    yourAnswer = Number(prompt(`${rndmNums[0]} + ${rndmNums[1]}`));
    if (answer == yourAnswer) {
      console.log(`${rndmNums[0]} + ${rndmNums[1]} = ${yourAnswer}`);
      score++;
      break;
    } else {
      console.log("EEE");
    }
  }
  if (answer != yourAnswer) {
    console.log(`answer is ${rndmNums[0]} + ${rndmNums[1]} = ${answer}`);
  }
}

console.log(`your score is ${score}`);

// emoji conversion

function convert(sentence) {
  sentence = sentence.replace(/\:\)/g, "🙂");
  return sentence;
}

function main() {
  let sentence = prompt(
    "Enter a sentence with smiley faces and i will turn it into real emoji hehe"
  );
  return console.log(convert(sentence));
}

main();

// პროექტი 7 - თამაში Mad Libs

let noun = prompt("Enter a noun!");
let verb = prompt("Enter a verb!");
let adjective = prompt("Enter an adjective!");
let adverb = prompt("Enter an adverb!");

console.log(
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's freaking hilarious mate!`
);

// longest word in array

let sentence =
  "There was this fucking hilarious human being with his atroshous laughter that left everyone in the room giggling!";

let sentenceArray = sentence.split(" ");
let longestWord = sentenceArray.length - 1;

sentenceArray.sort((a, b) => a.length - b.length);

console.log(sentenceArray[longestWord]);

/* object prototype (პროტოტიპი არის ჩონჩხი(გარკვეულ ფუნქციათა/მეთოდებთა ერთობლიობა 
რომელიც გარკვეულ data.type-ებს ახასიათებს და ყველას თავისი აქვს. მაგ. array,object,string, etc. ))*/

let basicRabbit = {
  speak(line) {
    console.log(`the ${this.type} rabbit says ${line}`);
  },
};

let obj = {
  name: "idiota",
};

let killerRabbit = Object.create(basicRabbit);
killerRabbit.type = "killer";

console.log(killerRabbit);

killerRabbit = Object.create(obj);

console.log(killerRabbit);

// important

let number = 15;
let newNumber = Math.ceil(number / 100) * 100;
console.log(newNumber);

// gallon counter

function gallonCounter(width, length) {
  let area = length * width;
  gallonForArea = 350;
  let gallonNeeded = Math.ceil(area / gallonForArea);

  return gallonNeeded;
}

let width = Number(prompt("Enter the width of the room in feet"));
let length = Number(prompt("Enter the length of the room in feet"));

console.log(gallonCounter(width, length));

// პროექტი 16 - self checkout - თვით გადახდა

function subtotal() {
  let total = 0;
  let subtotal = 0;
  let tax = 0;
  let price = 0;
  let quantity = 0;
  let sum = 0;
  for (let i = 1; i <= 4; i++) {
    price = prompt(`Enter the price of item ${i} `);
    price = parseFloat(price.replace(/\$/g, ""));

    console.log(`Enter the price of item ${i}: ${price}$`);
    quantity = Number(prompt(`Enter the quantity of item ${i}`));
    console.log(`Enter the quantity of item ${i}: ${quantity}`);
    sum = price * quantity;
    subtotal += sum;
  }

  tax = subtotal * 0.055;
  total = subtotal + tax;

  console.log(`subtotal: ${subtotal}$ `);
  console.log(`Tax: ${tax}$`);
  console.log(`total: ${total}$`);
}

subtotal();

// პროექტი 18 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა

function loanCounter() {
  let P = prompt("Enter the total investment amount");
  P = parseFloat(P.replace(/\[$%]/g, ""));
  console.log(`Total investment: ${P}$`);

  let r = prompt("Enter a loan interest in %");
  r = parseFloat(r.replace(/\[$%]/g, ""));
  console.log(`Loan interest: ${r}%`);
  r /= 100;

  let t = prompt("Enter timespan of loan");
  t = parseFloat(t.replace(/\[$%]/g, ""));
  console.log(`Loan timespan: ${t} years`);

  let A = P * (1 + r * t);

  r *= 100;

  console.log(
    `After ${t} years at ${r}% interest, the investment will be worth ${A}$  `
  );
}

loanCounter();

//  პროექტი 18 - Computing compound Interest - რთული პროცენტის გამოთვლა

function InterestCounter() {
  let P = 0;
  let r = 0;
  let t = 0;
  let n = 0;

  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      P = prompt("Enter a principle");
      P = parseFloat(P.replace(/[$%]/g, ""));
      console.log(`Principle: ${P}$`);
    }
    if (i == 1) {
      r = prompt("Enter an interest %");
      r = parseFloat(r.replace(/[$%]/g, ""));
      console.log(`Interest: ${r}%`);
      r /= 100;
    }
    if (i == 2) {
      t = prompt("Enter the amount of years");
      t = parseInt(t.replace(/[$%]/g));
      console.log(`years of loan: ${t} years`);
    }
    if (i == 3) {
      n = prompt("Enter the amount of times interest is compounded");
      n = parseInt(n.replace(/[$%]/g, ""));
      console.log(`interest is compounded ${n} times yearly.`);
    }
  }

  const nt = n * t;

  A = P * (1 + r / n) ** nt;
  A = parseFloat(A.toFixed(2));

  return A;
}

const total = InterestCounter();

console.log(`Your total investment is ${total}$`);

// პროექტი 20 - ღრმა ფიქრი

let input;

let yes = "Yes";
let no = "No";

while (input != "") {
  input = prompt(
    "What is the answer to the Great Question of Life,the Universe, and Everything?"
  );

  input = input.toLowerCase();

  if (
    input == "forty two" ||
    input == "forty-two" ||
    input == "fortytwo" ||
    input == 42
  ) {
    yes += "s";
    console.log(yes);
  } else {
    no += "o";
    console.log(no);
  }
}

console.log("The loop broke because you didn't enter an answer.");

// პროექტი 21 - Home Federal Saving Bank

let input;

while (input != "") {
  input = prompt("Greeting:");

  input = input.toLowerCase();
  input = input.replace(/\s/g, "");

  if (input == "hello") {
    console.log("0$");
  } else if (input[0] == "h") {
    console.log("20$");
  } else {
    console.log("100$");
  }
}

// პროექტი 22 Felipe Taquiera -ფელიპეს სასადილო

let input;
let sum = 0;

obj = {
  "Baja Taco": 4.25,
  Burrito: 7.5,
  Bowl: 8.5,
  Nachos: 11.0,
  Quesadilla: 8.5,
  "Super Burrito": 8.5,
  "Super Quesadilla": 9.5,
  Taco: 3.0,
  "Tortilla Salad": 8.0,
};

objKeysArray = Object.keys(obj);
objValuesArray = Object.values(obj);

function menu(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]}: ${arr2[i]}`);
  }
}

console.log("Welcome to Felipe's Taqueria sir! Here is our Menu: ");

menu(objKeysArray, objValuesArray);

console.log(`💌--------------------------------💌`);

while (input != "") {
  input = prompt("What would you like to order?");

  if (input == "" || input == "thats it") {
    break;
  }

  sum += obj[input];
  sum = parseFloat(sum.toFixed(3));

  console.log(`item: ${input}`);
  console.log(`price: $${obj[input]}`);
  console.log(`subtotal: $${sum} 🤑`);
}

console.log(`Total: $${sum}`);

// პროექტი 23 - Emojize - ემოჯებად გადაქცევა

let input;

let objEmoji = {
  ":backhand_index_pointing_down_light_skin_tone:": "👇🏻",
  ":backhand_index_pointing_left:": "👈",
  ":backhand_index_pointing_left_dark_skin_tone:": "👈🏿",
  ":backhand_index_pointing_left_light_skin_tone:": "👈🏻",
  ":backhand_index_pointing_left_medium-dark_skin_tone:": "👈🏾",
  ":backhand_index_pointing_left_medium-light_skin_tone:": "👈🏼",
  ":backhand_index_pointing_left_medium_skin_tone:": "👈🏽",
  ":backhand_index_pointing_right:": "👉",
  ":backhand_index_pointing_right_dark_skin_tone:": "👉🏿",
};

console.log(`
👇🏻	:backhand_index_pointing_down_light_skin_tone:
👈	:backhand_index_pointing_left:
👈🏿	:backhand_index_pointing_left_dark_skin_tone:
👈🏻	:backhand_index_pointing_left_light_skin_tone:
👈🏾	:backhand_index_pointing_left_medium-dark_skin_tone:
👈🏼	:backhand_index_pointing_left_medium-light_skin_tone:
👈🏽	:backhand_index_pointing_left_medium_skin_tone:
👉	:backhand_index_pointing_right:
👉🏿	:backhand_index_pointing_right_dark_skin_tone:`);

while (input != "") {
  input = prompt("Emoji converter");
  input = input.toLowerCase();
  input = input.replace(/\s/g, "");
  console.log(input);
  console.log(`${objEmoji[input]}`);
}

// სავარჯიშო: შექმენი ობიექტი person რომელსაც აქვს property: სახელი,გვარი,ასაკი. (არაიში შევინახე ქიები და ლუპით ამოვპრინტე ვალუები დინამიურად.)

let person = {
  saxeli: "giorgi",
  gvari: "lortkipanidze",
  asaki: "19 wlis",
};

arrValues = Object.values(person);
arrKeys = Object.keys(person);

let i = 0;

while (i < 3) {
  console.log(person[arrKeys[i]]);
  i++;
}

//სავარჯიშო 2: დაპრინტავს სახელის values + prototype

let person = {
  specie: "human",

  hello() {
    console.log(`Hello ${this.name}`);
  },
};

let kindPerson = Object.create(person);

kindPerson.name = "giorgi";
kindPerson.lastName = "lortkipanidze";
kindPerson.age = "19";

arrKeys = Object.keys(kindPerson);

console.log(arrKeys);

// 4 სავარჯიშო: წაშალეთ property, დაამატეთ job property.

let person = {
  name: "guja",
  lastName: "nabozarishvili",
  age: "beberi",
};

delete person.name;
person.job = "programisti";

console.log(person);

// 5 სავარჯიშო: დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.

let person = {
  name: "ელპიტო",
  lastName: "ნაბოზარიშვილი",
  age: "ბებერი",

  lengthdeterminer() {
    console.log(this.job.length);
  },
};

delete person.name;
person.job = "პროგრამისტი";

person.lengthdeterminer();

let evilPerson = Object.create(person);

evilPerson.job = "მეწაღე";
evilPerson.lengthdeterminer();

// 8 გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property. 9 გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.

let object = {
  name: "gio",
  lastName: "lortkipanidze",
  age: "19",
  occupation: "programming",
  hobby: "gym",
};

let arrKeys = Object.keys(object);
let arrValues = Object.values(object);

for (let i = 0; i < arrKeys.length; i++) {
  console.log(`${arrKeys[i]} : ${arrValues[i]}`);
}

// 5 თავის ყველა სავარჯიშო ერთ პროგრამაში.

let person = {
  name: "გიუნა",
  lastName: "დედასბუშტიშვილი",
  age: "37",
  achievement: "წარმატებული დედიკოს ბიჭი",

  sayHello() {
    console.log(`Hello ${this.name} ${this.lastName}`);
  },
  jobLength() {
    console.log(this.job.length);
  },
};

delete person.age;
person.job = "ღიპიან ქართველთა თავმჯდომარე";

let arrKeys = Object.keys(person);

let i = 0;
let count = 0;
while (i < arrKeys.length) {
  if (typeof person[arrKeys[i]] === `function`) {
    count++;
  }
  i++;
}

console.log(`your object person has ${count} methods`);

if (person.hasOwnProperty("gender")) {
  console.log(`very well`);
} else {
  person.gender = function () {
    console.log("yle");
  };
}

person.gender();

arrProperties1 = Object.keys(person);
arrProperties2 = Object.values(person);

for (let i = 0; i < arrProperties1.length; i++) {
  console.log(`${arrProperties1[i]} : ${arrProperties2[i]}`);
}

// ეს დაიკიდე, პროექტი არაა, ლექციის სავარჯიშოა.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];

function labeling(i) {
  labels.push(`unit ${i + 1}`);
}

repeat(5, labeling);

console.log(labels);

//  დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

function capitalizeWords(string) {
  let updatedSentence = "";
  updatedSentence += string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i] == " ") {
      updatedSentence += string[i];
      updatedSentence += string[i + 1].toUpperCase();
      i++;
    } else {
      updatedSentence += string[i];
    }
  }

  return updatedSentence;
}

let sentence = "tetri tritina tetr trtvilze trtoda";

console.log(capitalizeWords(sentence));

//  დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

function capitalizeWords(string, capitalize) {
  let strArray = string.split(" ");
  let newArr = [];
  for (let i = 0; i < strArray.length; i++) {
    newArr.push(capitalize(strArray[i]));
  }
  let string = newArr.join(" ");

  return string;
}

function capitalize(word) {
  word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());

  return word;
}

let string = "some stupid fucking sentence mate";

console.log(capitalizeWords(string, capitalize));

// map handwritten

let person1 = {
  name: "george",
  lastName: "foreman",
  personality: "charming",
};

let person2 = {
  name: "Alice",
  lastName: "Johnson",
  personality: "friendly",
};

let person3 = {
  name: "Bob",
  lastName: "Smith",
  personality: "outgoing",
};

let person4 = {
  name: "Emily",
  lastName: "Davis",
  personality: "calm",
};

let person5 = {
  name: "Chris",
  lastName: "Roberts",
  personality: "energetic",
};

let person6 = {
  name: "Olivia",
  lastName: "Clark",
  personality: "thoughtful",
};

let arrPersons = [person1, person2, person3, person4, person5, person6];

function map(arr, change) {
  let newArr = [];
  for (let element of arr) {
    newArr.push(change(element));
  }
  return newArr;
}

console.log(map(arrPersons, (change) => change.name));

// დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

let sentence = "The quick brown fox jumps over the lazy dog";
let pngrm = "qwertyuiopasdfghjklzxcvbnm";
let result;

function check(sentence) {
  for (let i = 0; i < pngrm.length; i++) {
    if (sentence.includes(pngrm[i])) {
    } else {
      result = false;
      return result;
    }
  }
  result = true;
  return result;
}

console.log(check(sentence));

// blackbox ai example -

unction containsAllChars(charSet, str) {
  const set = new Set(str);
  for (const char of charSet) {
    if (!set.has(char)) {
      return false;
    }
  }
  return true;
}

function checkIfPangram(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[" "]/g, "");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return containsAllChars(alphabet, sentence);
}

let sentence = "the quick brown fox jumps over the lazy dog";

console.log(checkIfPangram(sentence));


// დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

function sorter(sentence) {
  let commonWords = ["the","a","an","to","at","under","in","on","for","from"];

  let split = sentence.split(" ");
  let uniqueWords = new Set(split);

  let sortedWords = Array.from(uniqueWords).sort((a, b) => a.localeCompare(b));

  let newArr = sortedWords.filter((element) => !commonWords.includes(element));

  return newArr;
}

let sentence =
  "the quick a brown fox jumps an to at in on for from guy under over the lazy dog";

console.log(sorter(sentence));