import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@shopgate/pwa-common/components/Button';
import BurgerIcon from '@shopgate/pwa-ui-shared/icons/BurgerIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import { BROWSE_PATH } from '../../constants';
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
      pathname: HamburgerMenuRoute? HamburgerMenuRoute : BROWSE_PATH,
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
        className={this.props.isHome ? styles.buttonHome : styles.button}
      >
        <Ripple
          className={styles.buttonContent}
          onComplete={this.handleClick}
        >
          {BurgerSvg ? <CustomBurgerIcon className={styles.customBurgerIcon} /> : <BurgerIcon />}
        </Ripple>
      </Button>
    );
  }
}

export default connect(Burger);
