//ドキュメントの読み込みが完了したら実行
// script.js

// ドキュメントの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", function () {
    // Aboutボタンとドロワーメニューの要素を取得
    var aboutButton = document.querySelector('.header-nav-link[href="#about"]');
    var drawerMenu = document.querySelector('.drawer-menu');
  
    // Aboutボタンがクリックされた時の処理
    aboutButton.addEventListener('click', function (event) {
      // デフォルトのリンク動作を無効化
      event.preventDefault();
  
      // ドロワーメニューの表示/非表示を切り替え
      drawerMenu.classList.toggle('open');
    });
  });


//ドロワーメニュー
jQuery("#js-menu-drawer").on("click", function(){
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-menu-drawer").slideToggle();
  // jQuery("body").toggleClass("is-fixed");
})

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//上から200pxスクロールしたら
    $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
    $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
  }else{
    if(
      $('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
      $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
      $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});