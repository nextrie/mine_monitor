async function getApiStatus()
{
    var ApiStatus;
    await $.getJSON("https://status.mojang.com/check", (data) => {
        ApiStatus = data;
    });

    return ApiStatus;
}

function checkAllApiAreAlive()
{
    var ApiStatus = getApiStatus();

    for (let status = 0; status < ApiStatus.length; status++)
    {
        if (ApiStatus[status] != "green")
            return false;
    }

    return true;
}

function getApiStatusDisplay()
{
    var status = checkAllApiAreAlive();

    if (status === false)
        return("All minecraft Api's are not alive, the monitor might not work properly.");
    else
        return("All minecraft Api's are alive !");
}