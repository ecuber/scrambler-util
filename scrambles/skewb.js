module.exports.run = (amount, cube) => cube.setType("skewb").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
