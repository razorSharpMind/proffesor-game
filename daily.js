let falseValues = [false, 0, NaN, null, undefined, ""];

let arrayWords = [
  NaN,
  "giorgi",
  "eqvtime",
  null,
  undefined,
  10,
  NaN,
  15,
  null,
  undefined,
  250,
  "",
  "z",
  "k2",
  false,
  0,
  null,
];

filteredTrueValues = arrayWords.filter(
  (element) => !falseValues.includes(element)
);

filteredFalseValues = arrayWords.filter((element) =>
  falseValues.includes(element)
);

console.log(filteredTrueValues);
console.log(filteredFalseValues);
