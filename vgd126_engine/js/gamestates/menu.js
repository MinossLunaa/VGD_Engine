/**
 * @file menu.js
 * @description Title screen and "Start" button.
 */

var startButton = new GameObject();
startButton.img.src = "images/start_red.png";
startButton.height = 150;
startButton.width = 300;
startButton.hitBoxWidth = 800;
startButton.x = 500;
startButton.y = 400;

var menuBackground = new GameObject();

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: MENU BACKGROUND IMAGE
   Replace with your own JPG/PNG; keep aspect ratio close to canvas.
   ===================================================================== */
menuBackground.img.src = "images/MainMenuTerry.png";
menuBackground.width = canvas.width;
menuBackground.height = canvas.height;

gameStates[`menu`] = function () {
  // Hover & click
  if (startButton.overlap(mouse)) {
      if (mouse.pressed) {
          gameStates.changeState(`level1`),  sounds.play(`backgroundSFX`, 0, loop = true);
      }
      startButton.img.src = "images/start_black.png";
  } else {
      startButton.img.src = "images/start_red.png";
  }

  menuBackground.drawStaticImage();
  startButton.drawStaticImage();
};