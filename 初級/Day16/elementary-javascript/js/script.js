// jQuery("#js-btn").on("click", function() {
//     jQuery("#js-title").text("Daily Trial");
// })

jQuery("#js-title").on({
    mouseenter: function() {
        jQuery(this).css("color", "orange");
    },
    mouseleave: function() {
        jQuery(this).css("color", "#082b48");
    },
});