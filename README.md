# scrambler-util

This is the scramble generator module used in the popular scrambler Discord bot. Features include the full range of random state scramblers for WCA events (where applicable) and an expanding collection of non-WCA puzzles.

# Installation and Usage

scrambler-util requires [Node.js](https://nodejs.org/), and should be compatible on most versions but has only been extensively tested on v12+.

## Installation
```sh
$ npm install -g scrambler-util
```

## Usage
### Syntax
```js
const cube = require('scrambler-util');
const arr = cube(type, count, args);
```

### Basic Example
```js
const cube = require('scrambler-util');
const scrambleArr = cube('333', 5); // returns 5 skewb scrambles in an array
console.log(scrambleArr.join('\n'));
```

### Additional Arguments
```js
const cube = require('scrambler-util');
// Must pass a count argument when passing arguments
const bld4 = cube('444', 1, 'bld');
const fmc = cube('333', 3, 'fmc');
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
|    1x1    | random moves |                                              |
|   skewb   | random state |                                              |
|  pyraminx | random state |                                              |
|  square-1 | random state |                                              |
|   clock   | random state |                                              |
| redi cube | random moves |                                              |
|   2x2x3   | random moves |                                              |
