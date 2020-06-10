module.exports.run = (amount, cube, args) => {
    let scrambles = [];
    for (let i = 0; i < amount; i++) {
        let sLen = Math.floor(Math.random() * 4 + 22);
        let moves = ["x", "y", "z"];
        let disabled = [];
        let str = [];
        for (let len = 0; len < sLen; len++) {
            let index = Math.floor(Math.random() * moves.length);
            disabled.push(moves[index]);
            str.push(moves.splice(index, 1));
            if (disabled.length > 1) {
                moves.push(disabled.splice(0, 1));
            }
        }
        scrambles.push(str.map(move => Math.random() > 0.33 ? Math.random() < 0.5 ? `${move}\'` : `${move}2` : move).join(" "));
    }
    return scrambles;
};
