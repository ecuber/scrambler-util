const orient = require("../../util/orient");
const getScrambles = (cube, amount) => cube.setType("333").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
const elementsStartWith = (array, value, ...indexes) => {
    let found = false;
    indexes.forEach(i => array[i].startsWith(value) ? found = true : "");
    return found;
};

module.exports.run = (amount, cube, args) => {
    let scrambles = getScrambles(cube, amount);
    switch (args) {
    case "bld":
        return scrambles.map(s => `${s} ${orient("333")}`);
    case "fmc":
        scrambles = scrambles.map(s => {
            let arr = s.split(" ");
            while (elementsStartWith(arr, "F", 0, 1) || elementsStartWith(arr, "R", arr.length - 1, arr.length - 2)) {
                s = getScrambles(cube, 1)[0];
                arr = s.split(" ");
            }
            return `R' U' F ${s} R' U' F`;
        });
    }
    return scrambles;
};

