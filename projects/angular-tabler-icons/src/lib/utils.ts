/**
 * Converts a given string to UpperCamelCase (PascalCase).
 *
 * This function transforms the input string by:
 * 1. Converting the entire string to lowercase.
 * 2. Capitalizing the first letter of each word or uppercase letter.
 * 3. Removing any hyphens or underscores.
 *
 * @example
 * ```ts
 *  upperCamelCase('foo-bar'); // FooBar
 * ```
 *
 * @param str - The input string to be converted.
 * @returns The transformed string in UpperCamelCase format.
 */
export function upperCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => {
      return firstLetter.toUpperCase();
    })
    .replace(/[-_]/g, '');
}
