module.exports.run = (amount) => {
    let arr = [];

    for (let x = 0; x < amount; x++) {
        let moves = ["R", "L"];
        let scramble = [];
        let move;
        for (let i = 0; i < Math.floor(Math.random() + 7); i++) {
            scramble.push(i == 0 ? "" : "x");
            move = Math.floor(Math.random() * moves.length);
            for (let turns = 0; turns < Math.floor(Math.random() * 3 + 3); turns++) {
                scramble.push(`${moves[move % 2]}${Math.random() < 0.5 ? "\'" : ""}`);
                move++;
            }
        }
        arr.push(scramble.join(" "));
    }
    return arr;
};
