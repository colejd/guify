# API
All options are optional unless marked as required.

## GUI

Creates and maintains the entire GUI. If you want to show or hide the menu bar or panel, use `SetVisible(show)` or `ToggleVisible()` on `menubar` or `panel`.

### `constructor(opts)`
Creates the GUI using the `opts` object for configuration.

`opts` may have the following properties:
- `title` (String): The name used on the menu bar / panel.
- `theme` (String or Object, default=`"dark"`): The name of the theme to be used, or an object matching one of the themes in `themes.js` if you want to create your own.
    - Values: `"light"`, `"dark"`, `"yorha"`, custom theme object
- `root` (Element, default=`document.body`): The HTML element that is used as the parent of the created menu and panel.
- `width` (String, default=`"300"`): The width of the panel. You can use any CSS-compatible value here, so you can use `"30%"` or `"20em"`, for example.
- `align` (String, default=`"right"`): Aligns the panel to the left or right side of the root.
    - Values:  `"left"`, `"right"`
- `barMode` (String, default=`"overlay"`): Changes the way the layout bar is inserted into the root.
    - Values:
        - `"none"`: No menu bar is created, and the panel will always show.
        - `"overlay"`: The menu bar is fixed to the top of the root, overlapping content beneath it.
        - `"above"`: The menu bar is fixed above the root. Does not alter layout within root.
        - `"offset"`: The menu bar is inserted as the first child of the root with relative positioning, so other content within the root will be pushed down. The root's size is adjusted to compensate.
- `panelMode` (String, default=`"inner"`): Changes the way the panel show relative to the container.
    - Values:
        - `"inner"`: The panel shows inside of the container.
        - `"outer"`: The panel shows outside the container, positioned along whichever side you specified with `align`.
- `opacity` (float, default=`1.0`): Opacity value for the panel.
- `pollRateMS` (int, default=`100`): The rate in milliseconds at which the components will be refreshed from their bound variables.
- `open` (bool, default=`false`): If true, the panel will be forced open at startup.


### `Toast(message, stayMS, transitionMS)`
Displays a toast-style message on screen. `stayMS` and `transitionMS` are optional values that you can use to control the duration and removal animation time of the notification.

### `Register(opts, applyToAll)`
Creates a new component in the panel based on `opts`. You can provide one `opts` object or an array if you want to create many components at once.

All properties of `applyToAll` will be applied to each opts object.

## `opts`
The properties in this object determine the type and behavior of the created component.

The common properties are:

- `type` (String, required): The component type that will be created. Can be `"button"`, `"checkbox"`, `"color"`, `"range"`, `"select"`, `"text"`, and `"title"`
- `label` (String): The text label that appears next to the component.
- `initial` (Object): The initial value of the component. If you don't specify this, it will be copied from the bound value if there is one, or otherwise initialized to the variable type's default value.
- `onChange` (callback): Fired every time the value governed by the component changes, with a single argument holding the value.
- `onInitialize` (callback): Fired when the component is initialized.
- `object` (Object): The object holding the property you want the component to be bound to.
- `property` (String): The name of the property in `object` that you want the component to be bound to. `object[property]` and the value of the component will be bound (updating one will change the other).
- `folder` (String): The label of the folder to put the component into. If none is specified it'll just go in the panel at the root level.

Some component types have their own options. These will be specified for each component listed below.

## Components

### Button
`type: 'button'`

Represents a button.

Special options:
- `action` (callback): Called when the button is clicked.

### Checkbox
`type: 'checkbox'`

Represents true/false.

### Color
`type: 'color'`

Represents a color. Can show RGB or hex colors.

Special options:
-  `format` (String): Can be either `"rgb"` or `"hex"`.

### Display
`type: 'display'`

Displays the bound value.

### File
`type: 'file'`

Button / drop area for file selection.

Special options:
- `fileReadFunc` (String): The name of the method you want the FileReader inside this class to read files with. See the [FileReader docs](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) for more about what these methods do.
    - Values: `"readAsDataURL"` (default), `"readAsArrayBuffer"`, `"readAsBinaryString"`, `"readAsText"`

### Range
`type: 'range'`

Shows a slider representing a numerical value.

Special options:
- `min` (int): The smallest possible value on the slider.
- `max` (int): The largest possible value on the slider.
- `step` (int): The amount that is incremented by each movement of the slider.
- `scale` (String): Specifies the scaling behavior of the slider.
    - Values: `"linear"`, `"log"`

### Select
`type: 'select'`

Shows a dropdown with the specified options.

Special options:
- `options` (Array(String)): A list of strings representing the different selectable options.

### Folder
`type: 'folder'`

An expanding/collapsing area that you can put other components into. To do this, use `folder: 'folderLabel'` as an option of another component, where `folderLabel` is the label of a folder.

Special options:
- `open` (bool, default=`true`): Show or hide the folder by default

