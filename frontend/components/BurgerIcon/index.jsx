import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@shopgate/pwa-common/components/Button';
import BurgerIcon from '@shopgate/pwa-ui-shared/icons/BurgerIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import { i18n } from '@shopgate/engage/core';
import { BROWSE_PATH, PORTAL_BURGER_ICON_CONTENT } from '../../constants';
import styles from './style';
import connect from './connector';
import CustomBurgerIcon from '../CustomBurgerIcon';
import getConfig from '../../helpers/getConfig';

const { BurgerSvg, HamburgerMenuRoute } = getConfig();
/**
 * Component to show the Burger icon that links to the Browse page
 */
class Burger extends Component {
  static propTypes = {
    historyPush: PropTypes.func.isRequired,
    isHome: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    state: PropTypes.shape(),
  };

  static defaultProps = {
    state: {},
  };

  /**
   * Handles a click on the icon.
   */
  handleClick = () => {
    const params = {
      pathname: HamburgerMenuRoute || BROWSE_PATH,
      state: this.props.state || {},
    };
    this.props.historyPush(params);
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return (
      <Button
        className={`${this.props.isHome
          ? `${styles.buttonHome} sg-appbar__burger-button--home`
          : styles.button
        } sg-appbar__burger-button`}
        aria-label={i18n.text('add_browse_appbar_ios.button_label')}
      >
        <SurroundPortals portalName={PORTAL_BURGER_ICON_CONTENT}>
          <Ripple
            className={styles.buttonContent}
            onComplete={this.handleClick}
          >
            {BurgerSvg ? <CustomBurgerIcon className={styles.customBurgerIcon} /> : <BurgerIcon className="sg-appbar__burger-icon" />}
          </Ripple>
        </SurroundPortals>
      </Button>
    );
  }
}

export default connect(Burger);
