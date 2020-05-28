import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            new Error('No $root provided DOM Listener')
        }

        this.$root = $root
        this.listeners = listeners
    }

    initDOMListener() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener)
            this[method] = this[method].bind(this)
            if (!this[method]) {
                new Error(`Method ${method} is not implement in ${this.name || ''} component`)
            } else {
                this.$root.on(listener, this[method])
            }
        })
    }

    removeDOMListener() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

const getMethodName = (eventName) => {
    return `on${capitalize((eventName))}`
}
