## 0.15.1

- Fixed a bug preventing folders from being removed with `Remove()`.
- There was an issue introduced by 0.15.0 where the guify-container covers all content and has a higher z-index than the content underneath, eating all touch/click events. To fix this, the z-index of guify-container is now unset, and the sub-elements are given the z-index that guify-container used to get (9999).

## 0.15.0

- POTENTIALLY BREAKING CHANGE: Modified the way the GUI elements are constructed internally. If you're modifying the internals in your CSS, make sure everything looks right!
- Made menu bar visible in fullscreen
- If `panelMode` is `outer`, the menu will become `inner` when fullscreen
- Introduced `.guify-fullscreen` CSS class that attaches to the root when fullscreen is enabled
- Fixed up `barMode = "none"` behavior to match docs
- Added `panelOverflowBehavior` parameter to GUI opts, which lets you make the panel scrollable if it grows beyond the edge of the container.
- Fixed brief display of incorrect value when initializing `range` and `display`
- Added a bit of top margin for `title` components
- Fixed styling issues on Safari iOS for `text`, `range`, and `checkbox`
- Fixed incorrect font use on Safari iOS.
- Added an `inputFontFamily` param to theme objects, allowing a secondary font just for input fields
- If you provide your own font URL to the theme object, the default `"Hack"` font won't be downloaded
- Made `range` and `interval` components respect `precision` more closely. `precision` now affects the value itself, meaning the value and its display will always match.
- Fixed a bug in `interval` components with a `log` scale, wherein setting the value text would cause the wrong value to be used

## 0.14.3

- Fixed vertical alignment of arrow in `folder` component

## 0.14.2

- Fixed extra padding below `range` and `color` components
- Fixed vertical alignment of `title` component

## 0.14.1

- Fixed incorrect `interval` height and background
- Made component height `2rem` by default
    - Should fix component height issues on some pages
- Reduced line height for `display` component

## 0.14.0

- Allow setting input listening mode on `text` components using a new `listenMode` option. New values are `"input"` (default) and `"change"`.
- Rewrote `interval` component, and added the new features from the `range` improvements in 0.13.0.
    - `steps` has been removed for logarithmic sliders.
    - You can now specify `precision` for the readouts.
- Added the ability to enable/disable components with `SetEnabled(Bool)`.
    - I added new theme elements `"colorTextDisabled"` and `"colorComponentBackgroundDisabled"` to support this. If you're using a custom theme, make sure you add values for these!
    - This involved totally rewriting the way styles are added to components internally. This shouldn't cause any issues externally, but if you encounter anything, please file an issue!
- Updated dependencies
- Redid NPM build scripts. See readme for updated commands
- Fixed checkbox bug reported in #6
- Checkbox can now be toggled by clicking anywhere in the row
- Made it possible to have nested folders with identical names

Thank you to @indivisualvj for your PR (#20)!

## 0.13.1

- Fix missing upload artifacts

## 0.13.0

- Rewrote logic for `range` component.
    - `steps` has been removed for logarithmic sliders.
- Updated dependencies.

## 0.12.0

- Added Interval control type (Thank you @ccrisrober!)
- Step for Range and Interval controls is now 0.01 if not specified. Fixes weirdness with values changing in unexpected ways when typing in a new value.

#### 0.11.1

- Improved fullscreen API; Safari is now supported

## 0.11.0

- Addded a fullscreen button
- Updated NPM dependencies to fix vulnerabilities

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
