# guify

![Example Screenshot](/docs/Guify.png)

Guify provides you an easy-to-use, flexible GUI for your JS code. I made this because
there wasn't anything really good for quick GUI creation for things like three.js or
p5.js projects. Each component of the GUI can be bound to a variable so you don't
have to manually poll its state.

Guify gives you toast notifications, as well as an optional header bar to give your
project a "web app" look.


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
See (/example.html)[/example/index.html].


## License
MIT license. See [license.md](/license.md) for specifics.


## Credit
This package is largely based on [control-panel](https://github.com/freeman-lab/control-panel).
For setting this up, I used [webpack-library-starter](https://github.com/krasimir/webpack-library-starter).
