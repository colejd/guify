// Export GUI class as 'guify'.
// Make sure Webpack is assigning the export to the global scope (don't set library.name)
import { default as gui } from "./gui.js";
let guify = gui;
export { guify };