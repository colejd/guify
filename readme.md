# guify

<p align="center">
<img src="https://raw.githubusercontent.com/colejd/guify/master/docs/Guify.png" width="80%">
</p>

Guify provides you a simple GUI for your JS code. I made this because there wasn't anything really good for quick GUI creation for things like [three.js](https://threejs.org/) or [p5.js](https://p5js.org/) projects. 

Guify gives you toast notifications, as well as an optional header bar to give your project a "web app" look. Each component of the GUI can be bound to a variable so you don't have to manually poll its state.


## Installation
`npm install --save guify`, or copy `guify.js` from `/lib`.


## Usage
For browser projects, you can use the transpiled version in `/lib`.
If you're working with ES6 (for example, in a Node project), you can 
use the files at `/src` directly.

The API can be found at [api.md](/docs/api.md). 


### Quick Start
Node (ES6):
```
import GUI from 'guify'
```

Browser:
See [example.html](/example/index.html).


### Building This Package
If you want to build this package, you can run `npm install` and then `npm run build`, which will create `/lib/guify.min.js`. 

NPM commands:

- `build`: Creates `/lib/guify.min.js`, the default script used by this package.
- `dev`: Creates `/lib/guify.js`.
- `dev:watch`: Runs `dev` and serves the `/example` directory as a static web page.


## License
MIT license. See [license.md](/license.md) for specifics.


## Credit
This package is largely based on [control-panel](https://github.com/freeman-lab/control-panel).
For setting this up, I used [webpack-library-starter](https://github.com/krasimir/webpack-library-starter).
