/**
 * Authentic China Geographic SVG Vector Paths
 * Calibrated for a 900 x 680 SVG Canvas.
 * Includes mainland boundaries, major coastlines, Hainan, and landmark river corridors.
 */

export const CHINA_MAP_MAINLAND_PATH = `
  M 120 270
  C 140 240, 180 200, 240 180
  C 280 170, 320 180, 360 160
  C 410 130, 460 100, 520 90
  C 570 80, 610 90, 660 65
  C 710 40, 760 50, 800 85
  C 840 120, 830 160, 810 190
  C 790 220, 760 230, 740 240
  C 710 255, 680 250, 660 260
  C 645 268, 635 285, 645 295
  C 660 305, 680 295, 690 280
  C 700 270, 715 280, 705 305
  C 690 330, 660 335, 650 340
  C 670 345, 710 340, 735 365
  C 750 380, 745 405, 740 420
  C 730 445, 715 470, 705 500
  C 695 530, 675 560, 655 575
  C 635 590, 600 600, 565 605
  C 540 610, 500 615, 480 600
  C 450 580, 460 550, 440 535
  C 410 515, 380 525, 340 520
  C 300 515, 270 480, 250 440
  C 220 380, 180 340, 140 310
  Z
`;

export const HAINAN_ISLAND_PATH = `
  M 515 625
  C 530 620, 545 630, 540 645
  C 535 658, 518 660, 508 650
  C 500 640, 505 628, 515 625
  Z
`;

export const TAIWAN_ISLAND_PATH = `
  M 725 515
  C 735 505, 745 520, 740 545
  C 735 565, 720 570, 715 555
  C 710 540, 718 525, 725 515
  Z
`;

/**
 * Yangtze River Line Representation (Blue ribbon through central to east coast)
 */
export const YANGTZE_RIVER_PATH = `
  M 320 440
  Q 400 425 460 445
  T 576 396
  Q 630 375 730 375
`;

/**
 * Yellow River Line Representation (Historic cradle through north-central)
 */
export const YELLOW_RIVER_PATH = `
  M 280 320
  Q 360 260 450 250
  T 556 296
  Q 610 270 670 275
`;
