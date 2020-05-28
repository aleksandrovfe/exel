import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    toHtml() {
        return `<h1>Toolbar</h1>`
    }
}
