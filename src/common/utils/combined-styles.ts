//utility used to combine custom styles and the default styles
export const getCombinedStyles = <T extends Record<string, any>>(
  defaultStyles: T,
  customStyles?: Partial<T>,
): Record<keyof T, any[]> => {
  return Object.keys(defaultStyles).reduce((combined, key) => {
    const k = key as keyof T;
    const defaultStyle = defaultStyles[k];
    const customStyle = customStyles?.[k];

    // Combine styles, filtering out undefined
    combined[k] = [defaultStyle, customStyle].filter(Boolean);

    return combined;
  }, {} as Record<keyof T, any[]>);
};

