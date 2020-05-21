const orient = require("../../util/orient");

module.exports.run = (amount, cube, args) => {
    let scrambles = cube.setType("333").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
    switch (args) {
    case "bld":
        return scrambles.map(s => `${s} ${orient("333")}`);
    case "fmc":
        return scrambles.map(s => `R' U' F ${s} R' U' F`);
    }
    return scrambles;
};
