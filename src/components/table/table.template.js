const CODES = {
    A: 65,
    Z: 90,
}

const createCell = () => (
    `
        <div class="excel__table-cell" contenteditable></div>
    `
)

// TODO: excel__table-selected

const createCol = (el) => (
    `
        <div class="excel__table-column">${el}</div>
    `
)

const createRow = (content) => (
    `
        <div class="excel__table-row">
            <div class="excel__table-row-info"></div>
            <div class="excel__table-row-data">${content}</div>
        </div>
    `
)

const toChar = (_, i) => String.fromCharCode(CODES.A + i)


export const createTable = (rowAmount = 20) => {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')

    rows.push(createRow(cols))

    for (let i = 0; i < rowAmount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')

        rows.push(createRow(cells))
    }

    return rows.join('')
}
