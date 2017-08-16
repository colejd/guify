# guify

<p align="center">
    <img src="https://raw.githubusercontent.com/colejd/guify/master/docs/Guify.png" width="80%">
</p>
<p align="center">
    <a href="https://badge.fury.io/js/guify"><img src="https://badge.fury.io/js/guify.svg" alt="npm version" height="18"></a>
</p>

Guify provides you a simple GUI for your JS code. I made this because there wasn't anything really good for quick GUI creation for things like [three.js](https://threejs.org/) or [p5.js](https://p5js.org/) projects. 

Guify gives you toast notifications, as well as an optional header bar to give your project a "web app" look. Each component of the GUI can be bound to a variable so you don't have to manually poll its state.

Guify is designed to be accessibility-friendly, but I don't have a good way to test it. If something doesn't work for you, please file an issue and I'll do my best to help!


## Installation
`npm install --save guify`, or copy `guify.js` from [`/lib`](/lib).


## Usage
For browser projects, you can use the transpiled version in [`/lib`](/lib).
If you're working with ES6 (for example, in a Node project), you can 
use the files at [`/src`](/src) directly.

The API can be found at [api.md](/docs/api.md). 


### Quick Start
First import using either `require` or ES6 imports:
```js
// ES6
import { GUI as guify } from 'guify'

// Require
let guify = require('guify');
```

Then you can make a quick GUI this way:
```js
var panel = new guify.GUI({
    title: "Some Title",
    align: 'right'
});
```

See [example.html](/example/index.html) for a more complete example.


### Building This Package
If you want to build this package, you can run `npm install` and then `npm run build`, which will create `/lib/guify.min.js`. 

NPM commands:

- `build`: Creates `/lib/guify.min.js`, the default script used by this package.
- `dev`: Creates `/lib/guify.js`.
- `dev:watch`: Runs `dev` and serves the `/example` directory as a static web page.


## Changelog
See [changelog.md](/changelog.md).


## Known Issues
- Only the `dark` theme works right now.


## License
MIT license. See [license.md](/license.md) for specifics.


## Credit
This package is largely based on [control-panel](https://github.com/freeman-lab/control-panel).
For setting this up, I used [webpack-library-starter](https://github.com/krasimir/webpack-library-starter).

## Alternatives
- [Dat.GUI](https://github.com/dataarts/dat.gui)
- [Control-Panel](https://github.com/freeman-lab/control-panel)
