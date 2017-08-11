# API
All options are optional unless marked as required.

## GUI

### `constructor(opts)`
Creates the GUI using the `opts` object for configuration. 

`opts` may have the following properties:
- `useMenuBar` (bool): If true, a menu bar with a collapsing panel is created. Otherwise you get just the panel.
- `title` (string): The name used on the menu bar / panel.
- `theme` (string): The name of the theme to be used.
    - Values: `"light"`, `"dark"` (default)
- `root` (Element): The HTML element that is used as the parent of the created menu and panel. If blank, `document.body` is used.
- `width`: The width of the panel.
- `align` (string): Aligns the panel to the left or right side of the root.
    - Values:  `"left"`, `"right"` (default)
- `barMode` (string): Changes the way the layout bar is inserted into the root.
    - Values:
        - `"overlay"`: The menu bar is fixed to the top of the root, overlapping content beneath it.
        - `"above"`: The menu bar is fixed above the root. Does not alter layout within root.
        - `"offset"`: The menu bar is inserted as the first child of the root with relative positioning, so other content within the root will be pushed down. The root's size is adjusted to compensate.
- `opacity` (float between 0 and 1): Opacity value for the panel.

### `Toast(message, stayMS, transitionMS)`
Displays a toast-style message on screen. `stayMS` and `transitionMS` are optional values that you can use to control the duration and removal animation time of the notification.

### `SetPanelVisible(show)`
Makes the panel visible based on the truthiness of `show`.

### `TogglePanelVisible()`
Toggles the panel on and off.

### `RegisterVariable(object, property, opts)`
Creates a new component in the panel based on `opts`, which is bound to the variable at `object[property]`.

### `Register(opts)`
Similar to RegisterVariable but with no variable binding.

## `opts`
The properties in this object determine the type and behavior of the created component.

The common properties are:

- `type` (string, required): The component type that will be created. Can be `"button"`, `"checkbox"`, `"color"`, `"range"`, `"select"`, `"text"`, and `"title"`
- `label` (string): The text label that appears next to the component
- `initial` (Object): The initial value of the component. If you don't specify this, it will be copied from the bound value if there is one, or otherwise initialized to the variable type's default value.
- `onChange` (callback): Fired every time the value governed by the component changes, with a single argument holding the value.
- `onInitialize` (callback): Fired when the component is initialized.

Some component types have their own options:

### Button
- `action` (callback): Called when the button is clicked.

### Color
-  `format` (string): Can be either `"rgb"` or `"hex"`.

### Range
- `min` (int): The smallest possible value on the slider.
- `max` (int): The largest possible value on the slider.
- `step` (int): The amount that is incremented by each movement of the slider.

### Select
- `options` (Array(String)): A list of strings representing the different selectable options.
