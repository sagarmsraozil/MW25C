/*$(document).ready(function() {
    alert("Hello");
});
*/

/*
$("#mybtn").click(function() {
    //alert("Hello");
    // $("#currenttime").hide(3000);
    // $("#currenttime").fadeOut(3000);
    $("#currenttime").slideUp(3000);
    $("#currenttime").animate({ left: "0" }, 3000);

});

$("#mybtnn").click(function() {
    //$("#currenttime").show(3000);
    //$("#currenttime").fadeIn(3000);
    //$("#currenttime").slideDown(3000);
    $("#currenttime").toggleout(3000);

})*/

$("#mybtnn").click(
    function() {
        $("#myp").fadeToggle(3000, function() {
            $("#currenttime").fadeIn(2000)
        })
    }
);

$("#mybtn").click(
    function() {
        $("#currenttime").fadeOut(2000, function() {
            $("#myp").animate({ left: "5%", top: "20px" })
        })
    }
);