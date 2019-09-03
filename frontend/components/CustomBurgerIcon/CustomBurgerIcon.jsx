import React from 'react';
import { BurgerSvg } from '../../config';

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomBurgerIcon = props => (
  <div {...props} dangerouslySetInnerHTML={{ __html: BurgerSvg }} />
);

export default CustomBurgerIcon;
