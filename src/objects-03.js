/* eslint-disable no-unused-vars */
/*
 * objects-03.js
 * Language: javascript
 * Test: tests/objects-03.test.js
 * Path: src/objects-03.js
 *
 * Working with objects
 */

/**
 * Returns the volume of a cube to 2 decimal places
 * @param {object} box - an object with these given properties
 *  {
 *   length: {number},
 *   width: {number},
 *   height: {number},
 * }
 * @return {number} - the volume of the cube
 *
 *
 *
 * example: getVolumeOfBox({length: 2, width: 3, height: 4}) // => 24
 * example: getVolumeOfBox({length: 2.4, width: 3, height: 1.8}) // => 12.96
 */
function getVolumeOfBox(box) {
  const { length, width, height } = box;
  const volume = length * width * height;
  if (Math.round(volume * 100) / 100 !== volume) {
    return Number(volume.toFixed(2));
  }
  return Number(volume);
}

module.exports = {
  getVolumeOfBox,
};