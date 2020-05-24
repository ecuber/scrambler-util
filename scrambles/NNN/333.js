const orient = require("../../util/orient");
const getScrambles = (cube, amount) => cube.setType("333").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));


module.exports.run = (amount, cube, args) => {
    let scrambles = getScrambles(cube, amount);
    switch (args) {
    case "bld":
        return scrambles.map(s => `${s} ${orient("333")}`);
    case "fmc":
        scrambles = scrambles.map(s => {
            let arr = s.split(" ");
            while (arr[0].startsWith("F") || arr[arr.length - 1].startsWith("R")) {
                s = getScrambles(cube, 1)[0];
                arr = s.split(" ");
            }
            return `R' U' F ${s} R' U' F`;
        });
    }
    return scrambles;
};

