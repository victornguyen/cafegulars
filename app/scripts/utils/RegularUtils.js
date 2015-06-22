'use strict';

import { getFreeThreshold } from '../stores/SettingsStore';

export function hasFreeCoffee(count) {
    return count === getFreeThreshold();
}

export function coffeesTillFree(count) {
    return getFreeThreshold() - count;
}
