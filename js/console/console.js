const consoleClass = "consoleContent";

/*logTypes:
Default: gray
Log: white
Information: blue / cyan
Error: red
Warn: yellow
*/

function log(data, type)
{    
    $("." + consoleClass).append("<br>");
    $("." + consoleClass).append(formatData(data, type));
}

function formatData(data, type)
{
    var formattedData;

    type = type == undefined ? type = "" : type;
    formattedData = "[" + new Date().toUTCString() + "] - (" + type + ") ";
    formattedData += "<span class='console" + type + "'" + ">" + data + "</span>"; 
    
    return formattedData;
}