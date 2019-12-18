function showError(divID)
{
    var defaultCSS = $("#" + divID).css("border");
    var defaultFocusCSS = $("#" + divID).css("border");

    $("#" + divID).css("border", "2px solid red");

    setTimeout(() => {
        $("#" + divID).css("border", defaultCSS);
    }, 1000);
}