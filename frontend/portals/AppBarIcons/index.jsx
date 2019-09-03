import React from 'react';
import PropTypes from 'prop-types';
import BurgerIcon from '../../components/BurgerIcon';

/**
 * @param {Node} children Portal children.
 * @returns{JSX}
 */
const AppBarIcons = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <BurgerIcon />
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
