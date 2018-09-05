# thig

[![npm](https://img.shields.io/npm/v/thig.svg)](https://www.npmjs.com/package/thig) [![Build Status](https://travis-ci.org/isysd/thig.svg?branch=master)](https://travis-ci.org/isysd/thig) [![Coverage Status](https://coveralls.io/repos/github/isysd/thig/badge.svg?branch=master)](https://coveralls.io/github/isysd/thig?branch=master)

Resolve a name from this then global (or scoped) namespace. Optionally looks in a module to require.

### Installation

Please use npm to install.

`npm i thig`

##### Browser

To use in the browser, please use browserify or webpack to include and build thig. No standalone browser library is currently implemented, but can be if requested.

### Usage

##### thig

Get a property from this, global, or an optional module.

```
const thig = require('thig')
var obj = { 'prop': 'my property' }
obj = Object.assign(obj, thig)
obj.thig('prop') // my property
```

If optional module name is given, try to require it and search for the property. Otherwise return undefined.

```
// same as require('fs').readFile or undefined on error 
obj.thig('readFile', 'fs')
```

##### thisg

Get a property using thig then assign to this if not present.

```
const thig = require('thig')
var obj = {}
obj = Object.assign(obj, thig)
global.prop = 'my property' 
obj.thisg('prop') // my property
obj.prop // my property
```

##### Mixin

To use as an es6 class mixin, first use [object-to-class](https://bitbucket.org/isysd/object-to-class).

```
const o2c = require('object-to-class')
const thig = o2c(thig, 'Thig')
class MyThigClass extends thig {}
let mine = new MyThigClass()
mine instanceof Thig // true
```
