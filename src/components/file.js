import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';

const styles = require('styles/components/file-style.js');

/**
 * File component. Drag and drop a file or click to choose a file.
 */
export default class File extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();
        this.opts = opts;

        this.opts.fileReadFunc = this.opts.fileReadFunc || "readAsDataURL";

        this.file = null;
        this.fileName = null;

        let container = require('./partials/container')(root, opts.label, theme);
        container.classList.add(styles['guify-file-container']);
        container.setAttribute('role', 'button');
        container.setAttribute('tabIndex', '0'); // Make tabbable
        css(container, {
            width: '100%',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            height: 'unset', // Grow with content
            padding: '8px'
        });

        let label = container.appendChild(document.createElement('div'));
        label.innerHTML = opts.label;
        css(label, 'padding-bottom', '5px');

        let input = container.appendChild(document.createElement('input'));
        input.setAttribute('type', 'file');
        input.setAttribute('multiple', false);
        input.style.display = 'none';
        // Add ARIA attribute to input based on label text
        if(opts.label) input.setAttribute('aria-label', opts.label);

        this.fileLabel = container.appendChild(document.createElement('div'));
        this.fileLabel.innerHTML = 'Choose a file...';
        //css(this.fileLabel, 'color', theme.colors.textSecondary);

        let FileDropped = (event) => {
            var files;
            if(event.dataTransfer) {
                files = event.dataTransfer.files;
            } else if(event.target) {
                files = event.target.files;
            }

            //this.SetValue(files[0]);
            let value = files[0];
            var reader = new FileReader();
            reader.onload = () => {
                this.file = reader.result;
                this.fileLabel.innerHTML = files[0].name;
                this.emit('input', this.file);
            };

            reader[this.opts.fileReadFunc](files[0]);
        }

        input.addEventListener('change', FileDropped);

        container.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.stopPropagation();
            container.classList.add(styles['guify-dragover']);
        });

        container.addEventListener('dragleave', (event) => {
            event.preventDefault();
            event.stopPropagation();
            container.classList.remove(styles['guify-dragover']);
        });

        container.addEventListener('drop', (event) => {
            event.preventDefault();
            event.stopPropagation();
            container.classList.remove(styles['guify-dragover']);
            FileDropped(event);
        });

        container.onclick = () => {
            input.click();
        }

        container.addEventListener('keydown', (e) => {
            // Listen for Space or Enter
            if(e.which === 13 || e.which === 32) {
                input.click();
            }
        });

        // Defocus on mouse up (for non-accessibility users)
        container.addEventListener('mouseup', () => {
            container.blur();
        });

    }

    SetValue(value) {
        return;
        if(value === null || value === undefined) return;
    }

    GetValue() {
        return this.file;
    }

}
