import {connect} from 'react-redux';
import {compose} from 'utils';
import DashboardConnect from 'connectors/Dashboard.connector';
import withResourceDetail from 'containers/Resources/withResourceDetails';
import withViewsActions from 'containers/Views/withViewsActions';
import withViewsDetails from 'containers/Views/withViewDetails';

const mapStateToProps = (state, ownProps) => {
  return {
    resourceName: ownProps.viewId ?
      ownProps.viewMeta.resource?.name : ownProps.resourceName,
  };
};

const viewFormConnect = connect(mapStateToProps);

export default compose(
  DashboardConnect,
  withViewsActions,
  withViewsDetails,
  viewFormConnect,
  withResourceDetail,
);