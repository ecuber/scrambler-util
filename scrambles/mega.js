module.exports.run = (amount) => {
    for (var x = 0, result = []; x < amount; x++) {
        for (var i = 1, scramble = []; i < 78; i++) {
            if (i !== 1 && i % 11 === 0) {
                scramble[i - 2][2] === "-" ? scramble.push("U\'\n") : scramble.push("U\n");
            } else if (i === 1 || scramble[i - 2][0] === "D" || scramble[i - 2][0] === "U") {
                scramble.push(`R${Math.random() < 0.5 ? "++" : "--"}`);
            } else {
                scramble.push(`D${Math.random() < 0.5 ? "++" : "--"}`);
            }
        }
        result.push(scramble.join(" ").replace(/U\n R/g, "U\nR").replace(/U'\n R/g, "U\'\nR"));
    }
    return result;
};
