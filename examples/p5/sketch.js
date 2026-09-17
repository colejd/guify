// Guify + p5.js example
//
// Everything the GUI controls lives in this one object. Guify binds each component to a
// property here, so changing a control updates the property and vice versa.
//
// p5.js accepts CSS-style color strings, so the strings Guify produces can be handed
// straight to fill(), stroke(), background() etc. without any conversion.
var settings = {
    backgroundColor: 'hsb(210, 40%, 25%)', // Guify's 'hsb' format matches what p5.js expects
    fillColor: 'rgba(255, 200, 0, 0.6)',    // Guify's 'rgba' format: semi-transparent shapes blend as they overlap
    strokeColor: '#ffffff',                 // Guify's 'hex' format
    drawStroke: true,
    shape: 'circle',
    size: 60,
    clearEachFrame: false,
    mouse: '',                              // Updated every frame and shown with a 'display' component
};

var gui;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-container');

    clearCanvas();

    // Create the GUI. Doing this inside setup() guarantees the page has loaded, so
    // Guify's default `root` (document.body) exists.
    gui = new guify({
        title: 'Guify + p5.js',
        theme: 'dark',   // dark, light, yorha, or a theme object
        align: 'right',  // left, right
        width: 320,
        barMode: 'above', // none, overlay, above, offset
        panelMode: 'inner',
        opacity: 0.95,
        open: true
    });

    gui.Register([
        { type: 'title', label: 'Colors' },
        {
            type: 'color', label: 'Background',
            format: 'hsb', // Produces strings like 'hsb(210, 40%, 25%)'
            object: settings, property: 'backgroundColor',
            onChange: function () {
                clearCanvas();
            }
        },
        {
            type: 'color', label: 'Fill',
            format: 'rgba', // Produces strings like 'rgba(255, 200, 0, 0.6)' and adds an alpha slider
            object: settings, property: 'fillColor'
        },
        {
            type: 'color', label: 'Stroke',
            format: 'hex', // Produces strings like '#ffffff'
            object: settings, property: 'strokeColor'
        },
        {
            type: 'checkbox', label: 'Draw Stroke',
            object: settings, property: 'drawStroke'
        },

        { type: 'title', label: 'Brush' },
        {
            type: 'select', label: 'Shape',
            options: ['circle', 'square', 'triangle'],
            object: settings, property: 'shape'
        },
        {
            type: 'range', label: 'Size',
            min: 5, max: 200, step: 1,
            object: settings, property: 'size'
        },
        {
            type: 'checkbox', label: 'Clear Each Frame',
            object: settings, property: 'clearEachFrame'
        },

        { type: 'title', label: 'Canvas' },
        {
            type: 'button', label: 'Clear',
            action: function () {
                clearCanvas();
                gui.Toast('Canvas cleared');
            }
        },
        {
            type: 'button', label: 'Save PNG',
            action: function () {
                saveCanvas('guify-p5', 'png');
            }
        },
        {
            type: 'display', label: 'Mouse',
            object: settings, property: 'mouse'
        }
    ]);
}

function draw() {
    settings.mouse = Math.round(mouseX) + ', ' + Math.round(mouseY);

    if (settings.clearEachFrame) {
        // Preview mode: one shape follows the mouse.
        background(settings.backgroundColor);
        paint(mouseX, mouseY);
    } else if (mouseIsPressed && mouseIsOverCanvas()) {
        // Paint mode: shapes pile up wherever you drag.
        paint(mouseX, mouseY);
    }
}

function paint(x, y) {
    fill(settings.fillColor);

    if (settings.drawStroke) {
        stroke(settings.strokeColor);
    } else {
        noStroke();
    }

    var s = settings.size;
    switch (settings.shape) {
        case 'square':
            rectMode(CENTER);
            rect(x, y, s, s);
            break;
        case 'triangle':
            triangle(x, y - s / 2, x - s / 2, y + s / 2, x + s / 2, y + s / 2);
            break;
        default:
            ellipse(x, y, s, s);
            break;
    }
}

function clearCanvas() {
    background(settings.backgroundColor);
}

function mouseIsOverCanvas() {
    return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}
