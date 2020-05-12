/* jslint esversion: 6 */

export default {
    score: 0,
    scene: "start",
    screenChanged: true,
    vw: window.innerWidth / 100,
    vh: window.innerHeight / 100,
    inventory: [],
    litterArray: [],
    invAnimToggle: false,
    carryingItem: false,
    mapOpen: false,
    backpack_xpos: 92 * (window.innerWidth / 100),
    backpack_ypos: 80 * (window.innerHeight / 100),
    backpack_width: 7 * (window.innerWidth / 100),
    backpack_height: 30 * (window.innerHeight / 100),
    invOpen: false
    // itemIDcount: 0
};