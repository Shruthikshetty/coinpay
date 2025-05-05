//utility used to combine custom styles and the default styles
//@Todo yet to be tested
export const getCombinedStyles = <T extends Record<string, any>>(
  defaultStyles: T,
  customStyles?: Partial<T>,
): T => {
  return Object.keys(defaultStyles).reduce((combined, key) => {
    (combined as Record<string, any>)[key] = [defaultStyles[key], customStyles?.[key]];
    return combined;
  }, {} as T);
};
