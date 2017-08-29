#### 0.10.1

- Fix issue where checkboxes cannot be focused with tab

## 0.10.0

- **Breaking change:** Export syntax has been simplified. Instead of `new guify.GUI(...)`,
the call is now `new guify(...)`.
- Styling:
    - Components now grow to fit the `componentHeight` property of the current theme
    - Set z-index on entire plugin so it overlaps everything else
    - Styles moved from component files to style files where appropriate
    - Fix Range vertical spacing
    - Improve Checkbox style coverage (should fix issues with iOS)
- Simplify document model for container

#### 0.9.2

- Fix Range slider vertical offset in Firefox

#### 0.9.1

- Adjusted spacing of Range and Color's subcomponents
- Improved example layout
- Make Color's Value subcomponent `readonly` instead of `disabled`

## 0.9.0

- Added `"panelMode"` initialization option
- Allow user input in Range component value boxes
- Fix button text vertical alignment
- Force Value component font size to be the same across all themes

#### 0.8.1

- Fix Toast text coloring
- Added `open` opt. Set to true to have the panel forced open on startup.

## 0.8.0

- Updated Menu Bar look
- Removed `menuBarContentHeight` property of themes
- Added new button for opening/closing a Panel when `barMode` is `"none"`
- Refactored theming code
- Added new parameters for themes
- Added new theme preset (`"yorha"`, based on https://metakirby5.github.io/yorha/)
- File and Folder components now release focus if using a mouse to interact
- Fix Range component not highlighting when focused in Firefox
- Removed seam between the Panel and the container's edge on Chrome


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
