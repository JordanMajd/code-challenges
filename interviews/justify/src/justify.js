'use strict';

module.exports = justify;

/*
 * Create a method that justifies text to given width
 * See: https://en.wikipedia.org/wiki/Typographic_alignment
 * Read tests for full requirements
 */
function justify(text, width) {

  // split on any whitespace
  let words = text.split(/\s+/);

  if (words.length <= 1) {
    return text;
  }

  let characterCount = words.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  let numSpaces = width - characterCount;
  let averageSpaces = Math.floor(numSpaces / (words.length - 1));
  let remainderSpaces = numSpaces % (words.length - 1);

  return words.reduce((acc, cur, idx, arr) => {
    acc += cur;
    if (idx < arr.length - 1) {
      acc += ' '.repeat(averageSpaces);
      if (idx < remainderSpaces) {
        acc += ' ';
      }
    }
    return acc;
  }, '');
}