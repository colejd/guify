# Examples

Each folder here is a self-contained page that loads Guify from `/lib/guify.js`, so build the library first:

```sh
npm install
npm run develop
```

That builds `/lib/guify.js`, serves the repository at `http://localhost:9000`, and opens this folder in your browser.

- [`basic`](./basic): Every component type, bound to plain JS variables. Also has a "Debug" folder for testing bindings and toasts.
- [`p5`](./p5): A small [p5.js](https://p5js.org/) painting sketch controlled by Guify. Shows how to create the GUI from `setup()` and how to feed Guify's `rgba` / `hsb` color strings straight into p5's color functions.

If you copy an example into your own project, swap the `../../lib/guify.js` script tag for the CDN build:

```html
<script src="https://unpkg.com/guify@0.15.1/lib/guify.min.js"></script>
```
