'use strict';

import Settings from 'stores/SettingsStore';

export function hasFreeCoffee(count) {
    return count === Settings.getFreeThreshold();
}

export function coffeesTillFree(count) {
    return Settings.getFreeThreshold() - count;
}

export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
