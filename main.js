/* jslint esversion: 6 */

import global from "./global.js";
import Backpack from "./backpack.js";
import Map from "./map.js";
import Startscreen from "./startscreen.js";
import Minigame from "./minigame.js";
import Beach from "./beach.js";
import Grill from "./grill.js";
import Dive from "./dive.js";
import Home from "./home.js";

/*
TODO
    items pushed to inventory when dragged into waste
    make map interactive
    SCENES + start majority disclaimer
    MINIGAME
    inv placement
    mentor
    points ++/--
    inventory item visibility + aspect ratio
    flip imgs

IMGS NEEDED:
    mentor
    aktivist
    grill scene einheimische 
    menschen variationen liegen?, surfen? ...
    palme fix
    [aquarell effekt]
VERBESSERUNGEN:
    grill scene sand körnung fixen
    sprechblase eckiger
    plastikmüll unnatürlichere farben
    grill scene ohne lichterkette / als svg?
    evtl alle als svgs?
*/

{
var screen = [];
var once = false;
var backpack;
var map;

var FONT_heebo;
var FONT_averia;

var IMG_map_folded;
var IMG_map_unfolded;
var IMG_trash;
var IMG_grillenv;
var IMG_diveenv;
var IMG_home;
var IMG_restaurant;
var IMG_beachstore;

var IMG_sea;
var IMG_sea_light;
var IMG_beach;
var IMG_sand;
var IMG_cloud;
var IMG_cloud_dark;

var IMG_doplhin_swim_up;
var IMG_doplhin_swim_down;
var IMG_fish_red;
var IMG_fish_blue;
var IMG_fish_green;

var IMG_backpack;

var IMG_stem;
var IMG_leaf;
var IMG_ball;
var IMG_grill;
var IMG_bench;
var IMG_lights;

var IMG_boat;
var IMG_litterIsland;

var IMG_phone_blank;

var litterArray = [];
var IMG_plastic_bag;
var IMG_plastic_can;
var IMG_plastic_random;
var IMG_plastic_bottle;
}

function loadHandler() {
    var canvas = new p5();
}

function preload() {
    FONT_heebo = loadFont("./NanumGothic-Regular.ttf");
    FONT_averia = loadFont("./AveriaGruesaLibre-Regular.ttf");

    IMG_map_folded = loadImage("./map_folded.png");
    IMG_map_unfolded = loadImage("./map_unfolded.png");
    IMG_trash = loadImage("./trash.png");
    IMG_grillenv = loadImage("./grill_env.png");
    IMG_diveenv = loadImage("./dive_env.png");
    IMG_home = loadImage("./home.png");
    IMG_restaurant = loadImage("./restaurant.png");
    IMG_beachstore = loadImage("./beach_store.png");

    IMG_sea = loadImage("./sea.png");
    IMG_sea_light = loadImage("./sea_light.png");
    IMG_beach = loadImage("./beach_env.png");
    IMG_sand = loadImage("./sand.png");
    IMG_cloud = loadImage("./cloud.png");
    IMG_cloud_dark = loadImage("./cloud_dark.png");

    IMG_doplhin_swim_up = loadImage("./dolphin_swim_up.png");
    IMG_doplhin_swim_down = loadImage("./dolphin_swim_down.png");
    IMG_fish_red = loadImage("./fish_red.png");
    IMG_fish_blue = loadImage("./fish_blue.png");
    IMG_fish_green = loadImage("./fish_green.png");
    
    IMG_backpack = loadImage("./backpack.png");

    IMG_stem = loadImage("./palmstemtop.png");
    IMG_leaf = loadImage("./leaf.png");
    IMG_ball = loadImage("./ball.png");
    IMG_grill = loadImage("./grill.png");
    IMG_bench = loadImage("./bench.png");
    IMG_lights = loadImage("./lights.png");

    IMG_boat = loadImage("./boat.png");
    IMG_litterIsland = loadImage("./litterisland.png");

    IMG_phone_blank = loadImage("./phone.png");

    IMG_plastic_bag = loadImage("./plastic_bag.png");
    IMG_plastic_can = loadImage("./plastic_can.png");
    IMG_plastic_random = loadImage("./plastic_random.png");
    IMG_plastic_bottle = loadImage("./plastic_bottle.png");
}

function setup() {
    createCanvas(window.innerWidth, innerHeight);
    frameRate(25);
    
    IMG_map_folded.loadPixels();
    IMG_map_unfolded.loadPixels();
    IMG_trash.loadPixels();
    IMG_grillenv.loadPixels();
    IMG_diveenv.loadPixels();
    IMG_home.loadPixels();
    IMG_restaurant.loadPixels();
    IMG_beachstore.loadPixels();

    IMG_sea.loadPixels();
    IMG_sea_light.loadPixels();
    IMG_beach.loadPixels();
    IMG_sand.loadPixels();
    IMG_cloud.loadPixels();
    IMG_cloud_dark.loadPixels();

    IMG_doplhin_swim_up.loadPixels();
    IMG_doplhin_swim_down.loadPixels();
    IMG_fish_blue.loadPixels();
    IMG_fish_green.loadPixels();
    IMG_fish_red.loadPixels();

    IMG_backpack.loadPixels();
    
    IMG_stem.loadPixels();
    IMG_leaf.loadPixels();
    IMG_ball.loadPixels();
    IMG_grill.loadPixels();
    IMG_bench.loadPixels();
    IMG_lights.loadPixels();

    IMG_boat.loadPixels();
    IMG_litterIsland.loadPixels();

    IMG_phone_blank.loadPixels();

    IMG_plastic_bottle.loadPixels();
    IMG_plastic_can.loadPixels();
    IMG_plastic_random.loadPixels();
    IMG_plastic_bag.loadPixels();
}

function draw() {
    clear();

    if (once == false) {
        backpack = new Backpack(IMG_backpack);
        map = new Map(IMG_map_folded, IMG_map_unfolded);
        once = true;
    }

    if (global.screenChanged) {
        while (screen.length > 0) screen.pop();
        while (global.litterArray.length > 0) global.litterArray.pop();
        switch (global.scene) {
            case 'start':
                screen.push(new Startscreen({
                    font_averia: FONT_averia, 
                    font_heebo: FONT_heebo , 
                    img_sand: IMG_sand, 
                    img_sea: IMG_sea_light, 
                    img_stem: IMG_stem, 
                    img_leaf: IMG_leaf, 
                    img_ball: IMG_ball
                }));
                break;
            case 'game':
                screen.push(new Minigame({
                    img_boat: IMG_boat,
                    img_waste: IMG_litterIsland,
                }));
                break;
            case 'home':
                screen.push(new Home({
                    img_env: IMG_home, 
                    img_phone: IMG_phone_blank,
                    img_car: IMG_car,
                    img_plane: IMG-plane,
                    img_train: IMG_train
                }));
                break;
            case 'beach':
                screen.push(new Beach({
                    img_trash: IMG_trash,
                    img_bottle: IMG_plastic_bottle,
                    img_can: IMG_plastic_can,
                    img_random: IMG_plastic_random,
                    img_bag: IMG_plastic_bag,
                    img_ball: IMG_ball,
                    img_env: IMG_beach, 
                    img_store: IMG_beachstore,
                    img_stem: IMG_stem, 
                    img_leaf: IMG_leaf, 
                    img_sea: IMG_sea_light
                }));
                break;
            case 'grill':
                screen.push(new Grill({
                    img_trash: IMG_trash,
                    img_bottle: IMG_plastic_bottle,
                    img_can: IMG_plastic_can,
                    img_random: IMG_plastic_random,
                    img_bag: IMG_plastic_bag,
                    img_env: IMG_grillenv, 
                    img_stem: IMG_stem, 
                    img_leaf: IMG_leaf, 
                    img_sea: IMG_sea_light, 
                    img_cloud: IMG_cloud_dark, 
                    img_grill: IMG_grill, 
                    img_bench: IMG_bench,
                    img_lights: IMG_lights
                }));
                break;
            case 'dive':
                screen.push(new Dive({
                    img_env: IMG_diveenv,
                    img_bottle: IMG_plastic_bottle,
                    img_can: IMG_plastic_can,
                    img_random: IMG_plastic_random,
                    img_bag: IMG_plastic_bag,
                    img_dolphin_one: IMG_doplhin_swim_up,
                    img_dolphin_two: IMG_doplhin_swim_down,
                    img_fish_one: IMG_fish_red,
                    img_fish_two: IMG_fish_green,
                    img_fish_three: IMG_fish_blue
                }));
                break;
            case 'restaurant':
                screen.push(new Restaurant({
                    img_trash: IMG_trash,
                    img_bottle: IMG_plastic_bottle,
                    img_can: IMG_plastic_can,
                    img_random: IMG_plastic_random,
                    img_bag: IMG_plastic_bag,
                }));
                break;
        }
        global.screenChanged = false;
    }
    screen[0].main();

    if (!(global.scene == 'start' || 
        global.scene == 'game' ||
        global.scene == 'map' ||
        global.scene == 'home')) {
            backpack.main();
            map.main();
    }
}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.addEventListener("load", loadHandler);