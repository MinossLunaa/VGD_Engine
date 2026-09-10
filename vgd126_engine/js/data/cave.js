/**
 * @file data/cave.js
 * @description Tile layout + sprite states for the cave layers.
 *
 * Layout uses numbers to pick sprite "states", and "x" or false to skip.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: TILESET IMAGE
   Replace src with your tileset; tiles are 64x64 in the current data.
   Add more states or remove states as each state represents a tile.
   ===================================================================== */
var x = false;
var caveData = {
  info: {
    layout: [
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,12],
      [11,1,6,1,1,6,1,1,6,1,6,6,1,1,1,6,1,1,1,6,6,6,6,1,6,1,1,6,1,6,6,1,6,1,12],
      [11,4,x,7,7,x,7,7,x,7,x,x,7,7,7,x,7,7,7,x,x,x,x,7,x,7,7,x,7,x,x,7,x,14,12],
      [11,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,15],
      [5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,15],
      [7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,15],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,12],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
    ],
    src: `images/caveTiles.png`
  },
  states: [
    { fps: 5, cycle: false, frames: [ { width: 64, height: 64, startX: 0,   startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 64,  startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 128, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 192, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 256, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 320, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 384, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 448, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 512, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 576, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 640, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 704, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 768, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 832, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 896, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 960, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 1024, startY: 0 } ] },
  ]
};

var caveBackData = {
  info: {
    layout: [
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,],
      [x,8,8,8,8,8,8,8,8,8,10,8,8,8,10,8,8,8,8,8,8,10,8,8,8,8,8,8,8,10,8,8,8,8,16],
      [x,8,8,8,10,8,8,8,8,10,8,8,8,8,8,8,10,8,8,8,8,8,8,8,10,8,8,8,8,8,8,8,8,8,16],
      [x,8,8,8,8,8,8,8,10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10,8,8,16],
      [9,8,8,8,8,8,8,8,8,8,8,8,10,8,8,8,10,8,8,8,8,10,8,8,8,8,8,8,10,8,10,8,8,8,16],
      [9,8,8,10,8,8,8,8,8,8,8,8,8,8,8,8,8,10,8,8,8,8,8,8,8,10,8,8,8,8,8,8,8,8,16],
      [9,3,8,8,8,3,3,8,3,3,8,3,3,3,8,8,8,3,8,3,3,8,8,8,3,8,3,8,3,8,8,3,3,8,16]
    ],
    src: `images/caveTiles.png`
  },
  states: caveData.states
};

var caveHitData = {
  info: {
    layout: [
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
      [2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
    ],
    src: `images/caveTiles.png`
  },
  states: caveData.states
};