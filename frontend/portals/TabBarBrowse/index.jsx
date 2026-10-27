import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';

const { HideTabBarBrowse } = getConfig();

/**
 * The TabBarBrowse component.
 * @param {Object} props The TabBarBrowse component properties.
 * @returns {JSX}
 */
const TabBarBrowse = (props) => {
  if (HideTabBarBrowse) {
    return null;
  }
  return props.children;
};

TabBarBrowse.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabBarBrowse;
