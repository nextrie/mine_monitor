$(".addServerButton").click(handle_new_server);

function handle_new_server()
{
    var serverIP = $("#serverIP").val();
    var serverPort = $("#serverPort").val();

    if (serverIP.length === 0)
    {
        showError("serverIP");
        return;
    }
    if (serverPort.length > 5 || is_digit(serverPort) === false)
    {
        showError("serverPort");
        return;
    }
    if (serverPort.length === 0)
        serverPort = 25565;
    addServer(serverIP, serverPort);
}

function addServer(serverIP, serverPort)
{
    var server = {
        serverIP: serverIP,
        serverPort: serverPort
    };

    writeJsonData("./data/servers.json", server, "servers");
}