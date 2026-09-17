/**
 * @file data/player.js
 * @description Player sprite sheet & animation data.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: PLAYER SPRITESHEET PATH
   - Put your PNG/JPG in /images and change the path below.
   - Each frame is currently 128x128 laid out horizontally.
   - Idle must be present and is required for the engine to work
   ===================================================================== */
var playerData = {
  info: {
    src: `images/TerryTheAlienWOW.png` // ← replace with your asset, e.g., 'images/hero.png'
  },
  states: {
    // idle
    idle: {
      fps: 15, cycle: true,
      frames: [
          { width: 96, height: 64, startX: 0,   startY: 0 },
          { width: 96, height: 64, startX: 96, startY: 0 },
          { width: 96, height: 64, startX: 192, startY: 0 },
          { width: 96, height: 64, startX: 288, startY: 0 },
          { width: 96, height: 64, startX: 384, startY: 0 },
          { width: 96, height: 64, startX: 480, startY: 0 },
          { width: 96, height: 64, startX: 576, startY: 0 },
          { width: 96, height: 64, startX: 0, startY: 0 },
          { width: 96, height: 64, startX: 0, startY: 0 },
          { width: 96, height: 64, startX: 0, startY: 0 }
      ]
    },
    // walk
    walk: {
      fps: 1, cycle: true,
      frames: [
          { width: 96, height: 64, startX: 960, startY: 0 },
          { width: 96, height: 64, startX: 1056, startY: 0 },
          { width: 96, height: 64, startX: 1152, startY: 0 },
          { width: 96, height: 64, startX: 1248, startY: 0 },
          { width: 96, height: 64, startX: 1344, startY: 0 },
          { width: 96, height: 64, startX: 1440, startY: 0 },
          { width: 96, height: 64, startX: 1536, startY: 0 },
          { width: 96, height: 64, startX: 1632, startY: 0 },
          { width: 96, height: 64, startX: 1728, startY: 0 }
        
      ]
    },
    // jump
    jump: {
      fps: 15, cycle: false,
        frames: [{ width: 96, height: 64, startX: 2592, startY: 0 } ]
    },
    // crouch
    crouch: {
      fps: 15, cycle: true,
      frames: [
          { width: 96, height: 64, startX: 1824, startY: 0 },
          { width: 96, height: 64, startX: 1824, startY: 0 },
          { width: 96, height: 64, startX: 2016, startY: 0 },
          { width: 96, height: 64, startX: 2016, startY: 0 },
          { width: 96, height: 64, startX: 2016, startY: 0 },
          { width: 96, height: 64, startX: 2016, startY: 0 },
          { width: 96, height: 64, startX: 2016, startY: 0 },
          { width: 96, height: 64, startX: 1824, startY: 0 }
      ]
    },
    // attack
    attack: {
      fps: 3, cycle: false,
      frames: [
          { width: 96, height: 64, startX: 2688, startY: 0 }
      ]
    },
    // projectile
    projectile: {
      fps: 5, cycle: true,
      frames: [
          { width: 96, height: 64, startX: 2784, startY: 0 },
          { width: 96, height: 64, startX: 2880, startY: 0 }
      ]
    }

  }
}