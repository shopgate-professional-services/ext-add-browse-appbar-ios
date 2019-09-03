import { connect } from 'react-redux';
import { historyPush } from '@shopgate/pwa-common/actions/router';
import { isBurgerIconVisible } from '../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  isVisible: isBurgerIconVisible(state),
});

const mapDispatchToProps = {
  historyPush: params => historyPush(params),
};

export default connect(mapStateToProps, mapDispatchToProps);
