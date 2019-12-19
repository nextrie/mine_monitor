var currentDisplayLine = 1;

currentDisplayLine += displayLoadingData(currentDisplayLine, getApiStatusDisplay());
displayHomePage();

function displayLoadingData(currentDisplayLine, data)
{
    $(".loadingInformation" + currentDisplayLine).text(data);

    return (1);
}

function displayHomePage()
{
    setTimeout(() => {
        changePage("homePage");
    }, 1000);
}