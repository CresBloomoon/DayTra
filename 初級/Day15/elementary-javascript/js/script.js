// jQuery();
// document.querySelector("#js-title").innerText = "Daily Trial";

// jQuery("#js-title").text("Daily Trial");

// jQuery("h1").css("color", "red");

const elements = jQuery(".test");
elements.each(function () {
    console.log(jQuery(this).text())
})