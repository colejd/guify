# API
All options are optional unless marked as required.

## GUI

Creates and maintains the entire GUI. If you want to show or hide the menu bar or panel, use `SetVisible(show)` or `ToggleVisible()` on `menubar` or `panel`.

### `constructor(opts)`
Creates the GUI using the `opts` object for configuration.

`opts` may have the following properties:
- `title` (String): The name used on the menu bar / panel.
- `theme` (String or Object, default=`"dark"`): The name of the theme to be used, or an object matching one of the themes in `themes.js` if you want to create your own.
    - Values: `"light"`, `"dark"`, `"yorha"`, `custom theme object`
    - If you use a custom theme object, see `theme.js` for the variables you can set.
- `root` (Element, default=`document.body`): The HTML element that is used as the parent of the created menu and panel.
- `width` (String, default=`"300"`): The width of the panel. You can use any CSS-compatible value here, so you can use `"30%"` or `"20em"`, for example.
- `align` (String, default=`"right"`): Aligns the panel to the left or right side of the root.
    - Values:  `"left"`, `"right"`
- `barMode` (String, default=`"offset"`): Changes the way the layout bar is inserted into the root.
    - Values:
        - `"none"`: No menu bar is created, and the panel will always show.
        - `"overlay"`: The menu bar is fixed to the top of the root, overlapping content beneath it.
        - `"above"`: The menu bar is fixed above the root. Does not alter layout within root.
            - In this mode, the menu bar can overlap content just above the root. If you don't want this, you can either use the `"offset"` mode, or set `margin-top: var(--size-menu-bar-height)`.
        - `"offset"`: Similar to `"above"`, but some `"margin-top"` is added to the root to compensate for the menu bar's height.
    - I've tried to cover a variety of use cases here. If yours isn't covered, you can use `var(--size-menu-bar-height)` in your CSS to offset things yourself.
- `panelMode` (String, default=`"inner"`): Changes the way the panel is anchored relative to the container.
    - Values:
        - `"inner"`: The panel shows inside of the container.
        - `"outer"`: The panel shows outside the container, positioned along whichever side you specified with `align`.
    - If you want to put the panel anywhere, use `"inner"` and adjust the CSS however you'd like.
- `panelOverflowBehavior` (String, default=`"scroll"`): Changes the way the panel behaves when its contents exceed the height of the container.
    - Values:
        - `"scroll"`: The contents will be scrollable.
        - `"overflow"`: The panel will grow beyond the edge of the container.
- `opacity` (float, default=`1.0`): Opacity value for the panel.
- `pollRateMS` (int, default=`100`): The rate in milliseconds at which the components will be refreshed from their bound variables.
- `open` (bool, default=`false`): If true, the panel will be forced open at startup.


### `Toast(message, stayMS, transitionMS)`
Displays a toast-style message on screen. `stayMS` and `transitionMS` are optional values that you can use to control the duration and removal animation time of the notification.

### `Register(opts, applyToAll)`
Creates a new component in the panel based on `opts`. You can provide one `opts` object or an array if you want to create many components at once.
Returns the component.

### `Remove(component)`
Removes the specified component.

All properties of `applyToAll` will be applied to each opts object.

## Components

Components have a few shared methods you may call after initialization.

- `SetEnabled(enabled)`: Sets the component enabled/disabled style.
- `Remove()`: Removes the component from the GUI.

### `opts`
The properties in this object determine the type and behavior of the created component. Pass this into `Register(opts)`.

The common properties are:

- `type` (String, required): The component type that will be created. Can be `"button"`, `"checkbox"`, `"color"`, `"range"`, `"select"`, `"text"`, and `"title"`
- `label` (String): The text label that appears next to the component.
- `initial` (Object): The initial value of the component. If you don't specify this, it will be copied from the bound value if there is one, or otherwise initialized to the variable type's default value.
- `onChange` (callback): Fired every time the value governed by the component changes, with a single argument holding the value.
- `onInitialize` (callback): Fired when the component is initialized.
- `object` (Object): The object holding the property you want the component to be bound to.
- `property` (String): The name of the property in `object` that you want the component to be bound to. `object[property]` and the value of the component will be bound (updating one will change the other).
- `folder` (String): The label of the folder to put the component into. If none is specified it'll just go in the panel at the root level.
- `enabled` (Bool): Whether the component starts out enabled or not (only works for interactive components). This can be modified at runtime with `component.SetEnabled(Bool)`.

Some component types have their own options. These will be specified for each component listed below.

### Text
`type: 'text'`

Shows an editable text box.

Special options:
- `listenMode` (String, default=`"input"`): Corresponds to the string you'd pass to `addEventListener()` on a vanilla text field. Can be either `"input"` or `"change"`.
    - `"input"` makes it so that every keystroke sends an event.
    - `"change"` makes it so that an event is only sent when the field loses focus or you press Enter.

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
- `precision` (int, default=`3`): The maximum number of digits displayed for the value if it's a decimal.
- `step` (int, default=`0.01` [see notes]): The amount that is incremented by each movement of the slider. Only effective when `"scale = linear"`.
    - If the `precision` is set, then the `step` will by default be the smallest value possible given the precision. For example, if `precision = 3`, then `step = 0.01`, or if `precision = 5`, then `step = 0.0001`.
- `scale` (String): Specifies the scaling behavior of the slider.
    - Values: `"linear"`, `"log"`

### Interval
`type: 'interval'`

Shows an adjustable two-handle slider representing an interval.
- `min` (int): The smallest possible value on the slider.
- `max` (int): The largest possible value on the slider.
- `precision` (int, default=`3`): The maximum number of digits displayed for the value if it's a decimal.
- `step` (int, default=`0.01`): The amount that is incremented by each movement of the slider.
    - If the `precision` is set, then the `step` will by default be the smallest value possible given the precision. For example, if `precision = 3`, then `step = 0.01`, or if `precision = 5`, then `step = 0.0001`.
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
