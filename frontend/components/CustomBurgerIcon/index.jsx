import React from 'react';
import getConfig from '../../helpers/getConfig';

const { BurgerSvg } = getConfig();

/**
 * The custom burger icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomBurgerIcon = props => (
  <div {...props} dangerouslySetInnerHTML={{ __html: BurgerSvg }} className="sg-appbar__custom-icon" />
);

export default CustomBurgerIcon;
