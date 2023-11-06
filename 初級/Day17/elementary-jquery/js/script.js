//ボタンクリックでアラートを表示

//JavaScript
// document.querySelector("#js-button-alert").addEventListener("click", function () {
//     alert("おはよう");
// })

//jQuery
jQuery("#js-button-alert").on("click", function(){
    alert("おはよう");
})