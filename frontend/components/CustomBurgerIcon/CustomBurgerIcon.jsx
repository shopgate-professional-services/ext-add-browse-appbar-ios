import React from 'react';
import getConfig from '../../helpers/getConfig';

const { BurgerSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomBurgerIcon = props => (
  <div {...props} dangerouslySetInnerHTML={{ __html: BurgerSvg }} />
);

export default CustomBurgerIcon;
