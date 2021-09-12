/**
 * Returns URL string extracted from given string.
 * @param {string} text - String to be extracted URL from.
 * @returns string
 */
const extractUrl = (text) => {
  return text.slice(2).replace('.svelte.md', '')
}

export { extractUrl }