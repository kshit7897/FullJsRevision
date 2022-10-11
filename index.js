let name = "kshit";
console.log(name);

// -----------------Map Revision (map always create new array)------------------------------

let arr = [12, 54, 23, 66, 78];
let NewArray = arr.map((element) => {
  console.log(element);
  return element + 1;
});
console.log(NewArray);

//--------------- Filter Revision ------------------------------

let arr = [12, 9, 54, 23, 4, 66, 78, 1, 6];
let a = arr.filter((value) => {
  return value > 10;
});
console.log(a);

let arr1 = [12, 9, 54, 23, 4, 66, 78, 1, 6];
let a1 = arr.filter((value) => {
  return value < 10;
});
console.log(a1);
