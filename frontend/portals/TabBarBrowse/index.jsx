import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';

const { HideTabBarBrowse } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const TabBarBrowse = (props) => {
  if (!HideTabBarBrowse) {
    return props.children;
  }

  return (
    null
  );
};

TabBarBrowse.propTypes = {
  children: PropTypes.node.isRequired,
};

TabBarBrowse.defaultProps = {

};

export default TabBarBrowse;
