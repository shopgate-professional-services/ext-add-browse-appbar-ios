import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerIcon, SurroundPortals } from '@shopgate/engage/components';
import { IconButton } from '@shopgate/engage/components/v2';
import { historyPush } from '@shopgate/engage/core/actions';
import { i18n } from '@shopgate/engage/core/helpers';
import { makeStyles } from '@shopgate/engage/styles';
import { BROWSE_PATH, PORTAL_BURGER_ICON_CONTENT } from '../../constants';
import { isBurgerIconVisible, isHome as getIsHome } from '../../selectors';
import CustomBurgerIcon from '../CustomBurgerIcon';
import getConfig from '../../helpers/getConfig';

const { BurgerSvg, HamburgerMenuRoute } = getConfig();

const useStyles = makeStyles()({
  button: {
    width: 44,
    height: 44,
    zIndex: 1,
  },
  buttonHome: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  customBurgerIcon: {
    width: 24,
  },
});

/**
 * Renders the burger icon that links to the browse page.
 * @returns {JSX.Element|null}
 */
const Burger = () => {
  const { classes, cx } = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(isBurgerIconVisible);
  const isHome = useSelector(getIsHome);

  const handleClick = useCallback(() => {
    dispatch(historyPush({ pathname: HamburgerMenuRoute || BROWSE_PATH }));
  }, [dispatch]);

  if (!isVisible) {
    return null;
  }

  return (
    <IconButton
      className={cx(
        classes.button,
        isHome && classes.buttonHome,
        isHome && 'sg-appbar__burger-button--home',
        'sg-appbar__burger-button'
      )}
      aria-label={i18n.text('add_browse_appbar_ios.button_label')}
      onClick={handleClick}
    >
      <SurroundPortals portalName={PORTAL_BURGER_ICON_CONTENT}>
        {BurgerSvg
          ? <CustomBurgerIcon className={cx(classes.customBurgerIcon, 'sg-appbar__burger-button-icon')} />
          : <BurgerIcon className="sg-appbar__burger-button-icon" />}
      </SurroundPortals>
    </IconButton>
  );
};

export default Burger;
