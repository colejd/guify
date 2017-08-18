## 0.8.0

- Updated Menu Bar look
- Removed `menuBarContentHeight` property of themes
- Added new button for opening/closing a Panel when `barMode` is `"none"`
- Refactored theming code
- Added new parameters for themes
- Added new theme preset (`"yorha"`, based on https://metakirby5.github.io/yorha/)
- File and Folder components now release focus if using a mouse to interact

#### 0.7.2

- Actually fixed `"above"` barMode

#### 0.7.1 

- Fixed `"above"` barMode

## 0.7.0

- Menu Bar, Panel and Toast Area have been moved into their own classes and files
- Now using ES6-style imports in all source files
- Added `"none"` option to `opts.barMode` (removed `opts.useMenuBar`)
- Improve styling resistance against Bootstrap
- Massive rewrite of styling:
    - Using CSJS instead of Sass so we can load CSS with dynamic variables
    - **Themes now work**

## 0.6.0

- Toast notifications now have `aria-live="polite"` [accessibility]
- Components with bound variables will now update themselves only if the bound value has changed
    - This is still checked every frame, which is something I'd like to avoid. I'm looking into it.
- Made component polling rate part an option in GUI `opts`
- Text and Range components will no longer update from their bound variables while focused
- Styling update:
    - Component elements can now grow vertically
    - Range now defocuses after mouseup when using the mouse (stays focused if using a keyboard) [accessibility]
    - Checkbox now shows on/off styles when focused using a keyboard [accessibility]
    - Button and File components now give visual feedback when clicked
    - File component shows an outline when a file is dragged onto it
    - Select component now highlights on mouseover or focus
    - Fix focus highlighting issues on Firefox
    - Add font support to themes [tentative]
    - Changed Title component look
- Display component text is now selectable.
- Adjusted margin spacing for folders and titles


## 0.5.0

- Add File component
- Add Display component


## 0.4.0

- Accessibility update: made components keyboard-accessible
    - Color component still needs work
- Added folder component
- Made `Register()` a method that can accept multiple options objects to instantiate many at once
- Components now update themselves from bound variables
