const faces = ["R", "U", "L", "D", "F", "B"];

module.exports.run = (amount) => {
    let scrambles = [];
    for (let x = 0; x < amount; x++) {
        let moves = { wides: [], nonWides: [] };
        faces.forEach(face => {
            moves.nonWides.push({ wide: false, face: face });
            moves.wides.push({ wide: true, face: face });
            if (!["L", "D", "B"].includes(face)) {
                moves.wides.push({ wide: true, face: face, layers: "3" });
            }
        });
        let scramble = [];
        let i = 0;
        while (scramble.length < 80) {
            let move = Math.random() > 0.6 ? moves.nonWides[Math.floor(Math.random() * moves.nonWides.length)] : moves.wides[Math.floor(Math.random() * moves.wides.length)];
            if ((i > 0 && (scramble[i - 1].face == move.face)) || (i > 1 && scramble[i - 2].face == move.face)) {
                continue;
            } else {
                scramble.push(move);
                i++;
            }
        }
        scrambles.push(scramble.map(index => `${index.layers ? index.layers : ""}${index.face}${index.wide ? "w" : ""}${Math.random() < 0.33 ? "2" : Math.random() < 0.5 ? "\'" : ""}`).join(" "));
    }
    return scrambles;
};
