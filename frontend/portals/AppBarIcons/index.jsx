import React from 'react';
import PropTypes from 'prop-types';
import { isPageAdminPreviewActive } from '@shopgate/engage/admin-preview/helpers';
import { isIOSTheme } from '@shopgate/engage/core/helpers';
import BurgerIcon from '../../components/BurgerIcon';

const isIOS = isIOSTheme();

/**
 * @param {Node} children Portal children.
 * @returns{JSX}
 */
const AppBarIcons = ({ children }) => {
  if (isPageAdminPreviewActive()) {
    return null;
  }

  return (
    <div style={{
      display: 'flex',
      marginLeft: 'auto',
    }}
    >
      {isIOS && <BurgerIcon /> }
      {children}
    </div>
  );
};

AppBarIcons.propTypes = {
  children: PropTypes.node,
};

AppBarIcons.defaultProps = {
  children: null,
};

export default AppBarIcons;
