module.exports.run = (amount, cube) => cube.setType("pyram").get(amount).map(n => n.scramble_string);
