module.exports.run = (amount) => {
    let arr = [];
    for (let x = 0; x < amount; x++) {
        let wides = ["Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw"];
        let nonWides = ["R", "U", "L", "D", "F", "B"];
        let scramble = [];
        let i = 0;
        while (scramble.length < 80) {
            let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
            if (i > 0 && (scramble[i - 1].charAt(0) === move)) {
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
