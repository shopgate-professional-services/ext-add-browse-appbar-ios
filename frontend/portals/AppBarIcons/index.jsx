import React from 'react';
import PropTypes from 'prop-types';
import { IS_PAGE_PREVIEW_ACTIVE } from '@shopgate/engage/page/constants';
import { isIOSTheme } from '@shopgate-ps/pwa-extension-kit/env/helpers';
import BurgerIcon from '../../components/BurgerIcon';

const isIOS = isIOSTheme();

/**
 * @param {Node} children Portal children.
 * @returns{JSX}
 */
const AppBarIcons = ({ children }) => {
  if (IS_PAGE_PREVIEW_ACTIVE) {
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
