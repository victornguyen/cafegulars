'use strict';

import Settings from 'stores/SettingsStore';

export function hasFreeCoffee(count) {
    return count === Settings.getFreeThreshold();
}

export function coffeesTillFree(count) {
    return Settings.getFreeThreshold() - count;
}
