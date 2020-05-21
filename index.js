const fs = require("fs");
const { Scrambow } = require("scrambow");
const scrambow = new Scrambow();
const alias = require("./util/aliases");
let scrambles = {};

(function loadFiles(dir = `${__dirname}/scrambles`) {
    fs.readdirSync(dir).map(file => {
        file = file.split(".");
        return file[1] ? scrambles[file[0]] = require(`${dir}/${file[0]}.js`) : loadFiles(`${dir}/${file[0]}`);
    });
}());

function egg(cube, amount, args = null) {
    if (!amount || isNaN(amount)) amount = 1;
    return scrambles[alias(cube)].run(amount, scrambow, args);
}

module.exports = egg;
