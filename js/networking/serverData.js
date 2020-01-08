const server = require("./data/servers.json")["servers"][0];
updateServerData(server);
window.setInterval(() => {updateServerData(server)}, 60000);

async function getServerData(serverIP)
{
    var serverData;
    var apiURL = "https://api.mcsrvstat.us/2/" + serverIP;

    await $.getJSON(apiURL, (data) => {
        serverData = data;
    });

    return serverData;
}

async function updateServerData(server)
{
    var serverData = await getServerData(server["serverIP"]);
    displayServerData(serverData);
}

async function displayServerData(serverData)
{
    $("#serverIP").text(serverData["ip"]);
    if (serverData["online"] == false)
        $("#serverIP").css("color", "red");
    else
        $("#serverIP").css("color", "rgb(20, 255, 129)");
    $("#serverMOTD").html(serverData["motd"]["html"]);
    $("#playerCountDisplay").text("Players : " + serverData["players"]["online"] + " / " + serverData["players"]["max"]);
    updatePlayerCountDisplay(serverData["players"]["online"]);
}
