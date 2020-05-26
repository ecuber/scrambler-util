const orient = require("../../util/orient");

module.exports.run = (amount, cube, args) => {
    let scrambles = [];
    for (let x = 0; x < amount; x++) {
        let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw"];
        let nonWides = ["R", "U", "L", "D", "F", "B"];
        let scramble = [];
        let i = 0;
        while (scramble.length < 60) {
            let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
            if (i > 0 && (scramble[i - 1].charAt(0) === move)) {
                continue;
            } else {
                scramble.push(move);
                i++;
            }
        }
        scrambles.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
    }

    if (args == "bld")
        return scrambles.map(s => `${s} ${orient("555")}`);
    return scrambles;
};
