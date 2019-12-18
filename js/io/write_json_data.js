var fs = require('fs');

function writeJsonData(file, JSONdata, section)
{
    fs.readFile(file, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var serversData = JSON.parse(data);
            if (section == undefined)
                serversData.push(JSONdata);
            else
                serversData[section].push(JSONdata);
            json = JSON.stringify(serversData);
            fs.writeFile(file, json, 'utf8', () => {});
        }
});
}