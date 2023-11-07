//ボタンクリックでアラートを表示

//JavaScript
// document.querySelector("#js-button-alert").addEventListener("click", function () {
//     alert("おはよう");
// })

// //jQuery
// jQuery("#js-button-alert").on("click", function(){
//     alert("おはよう");
// })


// //アコーディオンメニューを作る
// //jQuery
// jQuery(".js-accordion").on("click", function() {
//     jQuery(this).next().slideToggle();
// })

//トップへ戻る
// jQuery("#js-button-top").on("click", function(){
//     jQuery("html, body").animate({scrollTop: 0}, 500);
// })

//ドロワーメニュー
jQuery("#js-button-drawer").on("click", function(){
    jQuery(this).toggleClass("is-checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is-fixed");
})