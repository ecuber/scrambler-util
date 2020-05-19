module.exports.run = (amount) => {
    let arr = [];
    let scramble;
    for (let x = 0; x < amount; x++) {
        scramble = [];
        for (let i = 0; i < Math.round(Math.random() * 2 + 8); i++) {
            if (i % 2 == 0) {
                scramble.push(Math.random() < 0.65 ? "R2" : "F2");
            } else {
                scramble.push(`${Math.random() < 0.5 ? "U" : "D"}${Math.random() < 0.5 ? "\'" : ""}`);
            }
        }
        arr.push(scramble.join(" "));
    }
    return arr;
};
