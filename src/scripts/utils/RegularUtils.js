'use strict';

import { FREE_THRESHOLD } from 'constants/Settings';

export function hasFreeCoffee(count) {
    return count === FREE_THRESHOLD;
}

export function coffeesTillFree(count) {
    return FREE_THRESHOLD - count;
}

export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
