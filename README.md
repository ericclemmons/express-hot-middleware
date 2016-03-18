# express-hot-middleware

> Simple way to enable hot-reloading in your Express applications.

[![travis build](https://img.shields.io/travis/ericclemmons/express-hot-middleware.svg)](https://travis-ci.org/ericclemmons/express-hot-middleware)
[![version](https://img.shields.io/npm/v/express-hot-middleware.svg)](http://npm.im/eexpress-hot-middleware)
[![downloads](https://img.shields.io/npm/dm/express-hot-middleware.svg)](http://npm-stat.com/charts.html?package=express-hot-middleware)
[![MIT License](https://img.shields.io/npm/l/express-hot-middleware.svg)](http://opensource.org/licenses/MIT)

### Installation

```shell
$ npm install --save express-hot-middleware
```

### Usage

```js
import express from "express";
import { hot } from "express-hmr-middleware";

export default express()
  .use(hot(module, () => [
    require("./middleware/statics"),
    require("./middleware/session"),
    require("./middleware/auth"),
    require("./middleware/api"),
    require("./middleware/view"),
  ]))
;
```

_Don't worry not using `import` here.  The `default` will still be used, if it exists._


### License

> MIT License 2016 © Eric Clemmons
