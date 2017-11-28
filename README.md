# Purpose

To encourage me to commit at least once a day.

# How?

It check events log every hour from 9pm to 12am with github api.  
and if there is no commit on that time, it sends email/slack message and even turn on lamp.
(Philips HUE lamp)

# Skills will be

Node.js
    axios
    schedule
    philips hue api

# dependencies

yarn

# Getting started

## install packages

```shell
$ yarn add babel-cli babel-preset-es2015 babel-preset-stage-2 mocha babel-register --dev
```
## config

1. make babel config file

```shell
$ vim .babelrc
```

`.babelrc`

```javascript
{
    "presets": ["es2015", "stage-2"],
    "plugins": []
}
```

2. add script

`package.json`

```javascript
//...
"scripts": {
    "test": "mocha --require babel-core/register",
    "start": "nodemon src/index.js --exec babel-node",
    "build": "babel src -d dist",
    "serve": "node dist/index.js"
},
...
```

3. move `index.js` to /src folder


4. add `dist/` folder to `.gitignore`