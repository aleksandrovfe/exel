import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
    }

    toHtml() {
        return `
            <div class="excel__formula-info">f(x)</div>
            <div class="excel__formula-input" spellcheck="false" contenteditable></div>
        `
    }

    onInput(event) {
        console.log(event.target.textContent)
    }

    onClick() {
        console.log('vvv')
    }
}
