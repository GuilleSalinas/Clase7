const fs = require('fs');
const path = require('path');

const read = ()=> {
    const tasks = fs.readFileSync(path.join(__dirname, "../tasksData.json"),"utf-8");
    const parsedTask = JSON.parse(tasks);
    return parsedTask;
};

module.exports = read;

//  Refactor fulero
//module.exports = ()=> JSON.parse(fs.readFileSync("../tasksData.json", "utf8"));