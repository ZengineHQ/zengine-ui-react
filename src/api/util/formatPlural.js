// This is meant as an initial simple and lightweight alternative to huge libraries like FormatJS, etc.

/**
 * Returns the correct singular/plural version of a word, given a number, ie: 1 gremlin, 2 gremlins, etc.
 *
 * @param {number} num
 * @param {string} word
 * @param {string} suffix
 * @returns {string}
 */
const formatPlural = (num, word, suffix = 's') => `${word}${num !== 1 ? suffix : ''}`;

export default formatPlural;
