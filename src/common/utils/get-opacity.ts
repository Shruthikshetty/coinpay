/**
 * Returns a hex color string with the specified opacity percentage added.
 *
 * Converts a standard 6-digit hex color into an 8-digit hex by appending
 * the alpha value derived from the given opacity percentage (0–100).
 *
 * @param hex - A 6-digit hex color string (e.g. "#FFFFFF")
 * @param opacityPercentage - A number between 0 and 100 representing the desired opacity
 * @returns A hex color string with opacity included (e.g. "#FFFFFF80" for 50% opacity)
 *
 * @example
 * getopacity('#FF0000', 50); // Returns: "#FF000080"
 * getopacity('#000000', 25); // Returns: "#00000040"
 */
export function getOpacity(hex: string, opacityPercentage: number): string {
  // extract # from hex
  const originalHex = hex.replace('#', '');

  //clamp the the percentage between the range of 0 - 100
  const clampedOpacity = Math.max(0, Math.min(opacityPercentage, 100));

  // convert the percentage to hex
  // this will be a approximation
  const hexOpacity = Math.round((clampedOpacity / 100) * 255)
    .toString(16)
    .padStart(2, '0');

  // retrun the converted color with opacity
  return `#${originalHex}${hexOpacity}`;
}
