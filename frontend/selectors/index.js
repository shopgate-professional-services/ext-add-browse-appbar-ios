import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/pwa-common/selectors/router';
import { burgerIconBlacklist } from '../constants';

/**
 * Checks if the browser icon is visible for the current route.
 * @return {boolean}
 */
export const isBurgerIconVisible = createSelector(
  getCurrentRoute,
  currentRoute => !burgerIconBlacklist.find(entry => currentRoute.pattern.startsWith(entry))
);

