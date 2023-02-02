import { createFill } from './../../../utils/array_utils';

const BASE_REEL_SYMBOL1 = [
  ' \\▄      ',
  ' ▐ \\ ▄   ',
  '  \\▄(▄)  ',
  '  (▄)    ',
];

const BASE_REEL_SYMBOL2 = [
    '▛▀▀▀▀▀▀▀▜',
    '▌       ▐',
    '▌ *BAR* ▐',
    '▙▄▄▄▄▄▄▄▟',
];

const BASE_REEL_SYMBOL3 = [
    '   ▄▄▄   ',
    '  ▌▄  ▐  ',
    '   / /   ',
    '  /▄/    '
];

const BASE_REEL1 = [
    ...BASE_REEL_SYMBOL1,
    ...BASE_REEL_SYMBOL2,
    ...BASE_REEL_SYMBOL3,
];

const BASE_REEL_SYMBOL1_COLOR_MAP = [
  [0, 1, 1],
  [0, 1, 0, 1, 0, 10],
  [0, 0, 1, 10, 10, 10, 10],
  [0, 0, 10, 10, 10],
];

const BASE_REEL_SYMBOL2_COLOR_MAP = [
    createFill(9, 16),
    [16, ...createFill(7, 0), 16],
    [16, 0, ...createFill(5, 17), 0, 16],
    createFill(9, 16),
];

const BASE_REEL_SYMBOL3_COLOR_MAP = [
    createFill(9, 10),
    createFill(9, 10),
    createFill(9, 10),
    createFill(9, 10),
];

const BASE_REEL1_COLOR_MAP = [
    ...BASE_REEL_SYMBOL1_COLOR_MAP,
    ...BASE_REEL_SYMBOL2_COLOR_MAP,
    ...BASE_REEL_SYMBOL3_COLOR_MAP,
];

const BASE_SLOT_MACHINE_UI = [
    '              ╔═══════╗',
    '              ║Jackpot║',
    ' ╔════════════╩═══════╩════════════',
    ' ║  __    __    ___  _____   __    | ',
    ' ║ / _\\  / /   /___\\/__   \\ / _\\   | ',
    ' ║ \\ \\  / /   //  //  / /\\ \\\\ \\  25|'
];


/*const pp = `




 | _\ \/ /___/ \_//  / /  \/_\ \ []|
 | \__/\____/\___/   \/     \__/ []|
 |===_______===_______===_______===|
 ||*|\_     |*| _____ |*|\_     |*||
 ||*|| \ _  |*||     ||*|| \ _  |*||
 ||*| \_(_) |*||*BAR*||*| \_(_) |*||
 ||*| (_)   |*||_____||*| (_)   |*|| __
 ||*|_______|*|_______|*|_______|*||(__)
 |===_______===_______===_______===| ||
 ||*| _____ |*|\_     |*|  ___  |*|| ||
 ||*||     ||*|| \ _  |*| |_  | |*|| ||
 ||*||*BAR*||*| \_(_) |*|  / /  |*|| ||
 ||*||_____||*| (_)   |*| /_/   |*|| ||
 ||*|_______|*|_______|*|_______|*||_//
 |===_______===_______===_______===|_/
 ||*|  ___  |*|   |   |*| _____ |*||
 ||*| |_  | |*|  / \  |*||     ||*||
 ||*|  / /  |*| /_ _\ |*||*BAR*||*||
 ||*| /_/   |*|   O   |*||_____||*||
 ||*|_______|*|_______|*|_______|*||
 |lc=___________________________===|
 |  /___________________________\  |
 |   |                         |   |
_|    \_______________________/    |_
(_____________________________________)

`;*/

export {
    BASE_REEL_SYMBOL1,
    BASE_REEL_SYMBOL2,
    BASE_REEL_SYMBOL3,

    BASE_REEL1,

    BASE_REEL_SYMBOL1_COLOR_MAP,
    BASE_REEL_SYMBOL2_COLOR_MAP,
    BASE_REEL_SYMBOL3_COLOR_MAP,

    BASE_REEL1_COLOR_MAP,

    BASE_SLOT_MACHINE_UI,
}
