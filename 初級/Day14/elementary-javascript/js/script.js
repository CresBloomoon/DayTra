// //id名で取得
// console.log(document.querySelector("#js-title").outerHTML);
// console.log(document.getElementById("js-title").outerHTML);

//class名で取得
// console.log(document.querySelector(".text").outerHTML);

// const elements = document.querySelectorAll(".text");
// for (let element of elements) {
//   console.log(element.outerHTML);
// }

//タグ名で取得
// console.log(document.querySelector("h1").outerHTML);

//属性で取得
console.log(
  document.querySelector('[href="https://www.daily-trial.com/"]').outerHTML
);
