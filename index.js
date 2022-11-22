// let name = "kshit";
// console.log(name);

// -----------------Map Revision (map always create new array)------------------------------

// let arr = [12, 54, 23, 66, 78];
// let NewArray = arr.map((element) => {
//   console.log(element);
//   return element + 1;
// });
// console.log(NewArray);

//--------------- Filter Revision ------------------------------

// let arr = [12, 9, 54, 23, 4, 66, 78, 1, 6];
// let a = arr.filter((value) => {
//   return value > 10;
// });
// console.log(a);

// let arr1 = [12, 9, 54, 23, 4, 66, 78, 1, 6];
// let a1 = arr.filter((value) => {
//   return value < 10;
// });
// console.log(a1);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// =============================

// a = 1;
// console.log(a);
// let a;

// (function name(params) {})(); IIFE Function

// var arr = [4, 8, 7, 13, 12];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Sum is " + sum);

// var narray = [];
// for (var i = 1; i <= 3; i++) {
//   narray.push(i);
// }
// console.log(narray);

// let text = "Hello World, welcome to the universe.";
// let result = text.includes("World");
// console.log(result);

// var array = ["slider", "step", "value", "speed"];
// console.log(array.join("-"));

// var arr = [5, 6, 7, 7, 6, 8];
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// let chars = ["A", "B", "A", "C", "B"];
// let filter = [...new Set(chars)];
// console.log(filter);

// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8];
// let narr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] + 1 === arr[i]) {
//     console.log(narr.push[i]);
//   }
//   console.log(narr);
// }

// var str = "Hello, World, etc";
// var myarray = str.split("/");

// for (var i = 0; i < myarray.length; i++) {
//   console.log(myarray[i]);
// }

// let str = "aircamus is the future";
// str = str.split(" ");
// for (var i = 0; i < str.length; i++) {
//   str[i] = str[i][0].toUpperCase() + str[i].substr(1);
// }
// str = str.join(" ");
// console.log(str);

// var form = document.getElementById("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var name = document.getElementById("name").value;
//   console.log(name);
// });

function sum(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] == 0) {
        return [number, arr[j]];
      }
    }
  }
}
const result = sum([-5, -4, -3, -2, 0, 2, 4, 8]);
console.log(result);
