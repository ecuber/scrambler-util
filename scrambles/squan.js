module.exports.run = (amount, cube) => cube.setType("sq1").get(amount).map(n => n.scramble_string.trim().replace(/ +(?= )/g, ""));
