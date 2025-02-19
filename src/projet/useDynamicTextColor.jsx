

import { useState, useEffect } from 'react';

/**
 * Custom hook to dynamically change text color based on input.
 * 
 * @param {string} color 
 * @returns {object} 
 */
const useDynamicTextColor = (color) => {
  const [textColor, setTextColor] = useState(color);

  useEffect(() => {
 
    setTextColor(color);
  }, [color]);


  return {
    color: textColor,
  };
};

export default useDynamicTextColor;
