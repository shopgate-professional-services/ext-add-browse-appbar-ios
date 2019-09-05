import React from 'react';
import PropTypes from 'prop-types';
import { isIOSTheme } from '@shopgate-ps/pwa-extension-kit/env/helpers';
import BurgerIcon from '../../components/BurgerIcon';

const isIOS = isIOSTheme();

/**
 * @param {Node} children Portal children.
 * @returns{JSX}
 */
const AppBarIcons = ({ children }) => (
  <div style={{ display: 'flex' }}>
    {isIOS && <BurgerIcon /> }
    {children}
  </div>
);

AppBarIcons.propTypes = {
  children: PropTypes.node,
};

AppBarIcons.defaultProps = {
  children: null,
};

export default AppBarIcons;
