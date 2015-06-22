'use strict';

import EventEmitter from 'events';
import _ from 'lodash';

const CHANGE_EVENT      = 'settingschange';
const FREE_THRESHOLD    = 8;
const MAX_SUGAR         = 5;

let SettingsStore = _.assign({}, EventEmitter.prototype, {
    /**
     * @param {Function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param  {Function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * Return free threshold
     * @return {Number}
     */
    getFreeThreshold() {
        return FREE_THRESHOLD;
    },

    /**
     * Return max sugar
     * @return {Number}
     */
    getMaxSugar() {
        return MAX_SUGAR;
    }
});

export default SettingsStore;
