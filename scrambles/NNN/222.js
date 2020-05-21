const orient = require("../../util/orient");

module.exports.run = (amount, cube, args) => {
    let scrambles = cube.setType("222").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
    if (args == "bld")
        return scrambles.map(s => `${s} ${orient("222")}`);
    return scrambles;
};
