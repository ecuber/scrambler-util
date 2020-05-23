const scramble4 = require("../../util/scramble4");
const orient = require("../../util/orient");

module.exports.run = (amount, cube, args) => {
    if (args == "bld")
        return scramble4.getRandomScramble(amount).map(s => `${s} ${orient("444")}`);
    return scramble4.getRandomScramble(amount);
};
