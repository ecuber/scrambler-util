module.exports.run = (amount, cube) => cube.setType("333").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
