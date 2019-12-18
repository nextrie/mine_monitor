//this script handles what page is shown on the screen
function changePage(pageName)
{
    $(".pageContent").fadeOut(100, () => {
        //fading out page content then handling the page change
        $(".pageContent").load(get_pagehtml_path(pageName));
        $("#pageCss").attr("href", get_pagecss_path(pageName));
        $(".pageContent").fadeIn(100);
    });
}

function get_pagehtml_path(pageName)
{
    return "./pages/" + pageName + "/" + pageName + ".html"; 
}

function get_pagecss_path(pageName)
{
    return "./pages/" + pageName + "/" + pageName + ".css"; 
}