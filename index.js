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

/**
 * Generates an array of scrambles for the given parameters. For a full list of puzzle types,
 * please see ./util/aliases-- all keys and values will work!
 *
 * @param {string} cube - Puzzle type/alias
 * @param {number} amount - Number of scrambles (optional)
 * @param {string} args - String arguments (e.g. "fmc", "bld") (optional)
 * @returns {string[]} An array of scramble strings
 */
function egg(cube, amount = 1, args = null) {
    if (amount && isNaN(amount)) {
        if (amount == "fmc" || amount == "bld") {
            args = amount;
            amount = 1;
        } else {
            throw new Error(`Invalid argument: ${amount}`);
        }
    } else if (parseInt(amount)) {
        amount = parseInt(amount);
    }
    amount = amount >= 0 ? amount : 1;
    if (scrambles[alias(cube)]) {
        if (amount > 0)
            return scrambles[alias(cube)].run(amount, scrambow, args);
        return [];
    }
    if (cube)
        throw new Error(`Unrecognized event: ${cube}`);
}

module.exports = egg;
