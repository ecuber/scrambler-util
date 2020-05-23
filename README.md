# scrambler-util

This is the scramble generator module used in the popular scrambler Discord bot. Features include the full range of random state scramblers for WCA events (where applicable) and an expanding collection of non-WCA puzzles.

# Installation and Usage

scrambler-util requires [Node.js](https://nodejs.org/) v12+. It may be backwards compatible with older versions of Node but this has not been tested.

To install:
```sh
$ npm install -g scrambler-util
```

To use:
```js
const scrambler = require('scrambler-util');
const scrambleArr = scrambler("333", 5); // returns 5 3x3 scrambles in an array
console.log(scrambleArr.join("\n"));
```

For a complete and updated events list, see `./util/aliases.json`

## Available Events

|   Event   |     Type     |                     Notes                    |
|:---------:|:------------:|:--------------------------------------------:|
|    2x2    | random state |                                              |
|    3x3    | random state |                                              |
|    4x4    | random state | js implementation from cstimer               |
|    5x5    | random moves | 5x5+ tnoodle scrambles are also random moves |
|    6x6    | random moves |                                              |
|    7x7    | random moves |                                              |
|   skewb   | random state |                                              |
|  pyraminx | random state |                                              |
|  square-1 | random state |                                              |
|   clock   | random state |                                              |
| redi cube | random moves |                                              |
|   2x2x3   | random moves |                                              |
