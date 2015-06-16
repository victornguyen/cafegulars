'use strict';

import { getFreeThreshold } from '../stores/settings_store';

export function hasFreeCoffee(count) {
    return count === getFreeThreshold();
}

export function coffeesTillFree(count) {
    return getFreeThreshold() - count;
}
