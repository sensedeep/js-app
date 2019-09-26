/*
    js-app.js -- Application global singleton
 */

import 'js-polyfill'
import Log from 'js-log'

export default class VuApp {
    config = null

    constructor(config) {
        this.config = config
        this.started = new Date()
        global.log = this.log = new Log(config.log.endpoint, {source: config.name})
    }

    define(props) {
        for (let [key, value] of Object.entries(props)) {
            this[key] = value
        }
    }

    async delay(time) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve(true), time)
        })
    }

    nop() {}
}
