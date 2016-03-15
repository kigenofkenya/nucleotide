# nucleotide [![Build Status](https://travis-ci.org/kigenofkenya/nucleotide.svg?branch=master)](https://travis-ci.org/kigenofkenya/nucleotide)

> My outstanding module


## Install

```
$ npm install --save nucleotide
```


## Usage

```js
const nucleotide = require('nucleotide');

nucleotide('unicorns');
//=> 'unicorns & rainbows'
```


## API

### nucleotide(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global nucleotide
```

```
$ nucleotide --help

  Usage
    nucleotide [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ nucleotide
    unicorns & rainbows
    $ nucleotide ponies
    ponies & rainbows
```


## License

MIT © [kigenofkenya](https://github.com/kigenofkenya)
