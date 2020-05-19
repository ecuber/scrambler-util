module.exports.run = (amount, cube) => cube.get(amount).map(n => n.scramble_string.replace(/ +(?= )/g, ""));
