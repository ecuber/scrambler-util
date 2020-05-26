module.exports.run = (amount) => {
    let arr = [];
    for (let x = 0; x < amount; x++) {
        let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw", "3Rw", "3Uw", "3Lw", "3Dw", "3Fw", "3Bw"];
        let nonWides = ["R", "U", "L", "D", "F", "B"];
        let scramble = [];
        let i = 0;
        while (scramble.length < 100) {
            let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
            if (i > 0 && (scramble[i - 1].charAt(0) === move) || i > 1 && scramble[i - 2].charAt(0) === move) {
                continue;
            } else {
                scramble.push(move);
                i++;
            }
        }
        arr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
    }
    return arr;
};
