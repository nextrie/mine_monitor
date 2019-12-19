var servers = require("./data/servers.json")["servers"];

getInitialPageRender(servers);

function getInitialPageRender(servers)
{
    if (servers.length === 0)
    {
        changePage("createServer");
        return;
    }

    changePage("loadingPage");
}
