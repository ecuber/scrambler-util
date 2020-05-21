const events = require("./aliases.json");
let names = [];
Object.keys(events).forEach(key => {
    names.push({ name: key, level: 0 });
    events[key].forEach(a => names.push({ name: a, level: 1, parent: key }));
});

/**
 * Returns the event name. If string is not a valid event name, returns null
 * @param {string} string event input
 * @returns {string} event name
 */
function alias(string) {
    if (typeof string === "string") {
        let matches = names.filter(n => n.name === string.toLowerCase());
        if (matches.length > 0) {
            let obj = matches[0];
            return obj.level == 0 ? obj.name : obj.parent;
        }
    } else {
        return null;
    }
}

module.exports = alias;
