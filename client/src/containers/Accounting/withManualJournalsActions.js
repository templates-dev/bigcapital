import { connect } from 'react-redux';
import t from 'store/types';
import {
  deleteManualJournal,
  fetchManualJournalsTable,
  publishManualJournal,
  deleteBulkManualJournals,
  fetchManualJournal,
} from 'store/manualJournals/manualJournals.actions';

const mapActionsToProps = (dispatch) => ({
  requestDeleteManualJournal: (id) => dispatch(deleteManualJournal({ id })),
  requestFetchManualJournalsTable: (query = {}) => dispatch(fetchManualJournalsTable({ query: { ...query } })),
  requestFetchManualJournal: (id) => dispatch(fetchManualJournal({ id })),
  requestPublishManualJournal: (id) => dispatch(publishManualJournal({ id })),
  requestDeleteBulkManualJournals: (ids) => dispatch(deleteBulkManualJournals({ ids })),

  changeCurrentView: (id) => dispatch({
    type: t.MANUAL_JOURNALS_SET_CURRENT_VIEW,
    currentViewId: parseInt(id, 10),
  }),
  addManualJournalsTableQueries: (queries) => dispatch({
    type: t.MANUAL_JOURNALS_TABLE_QUERIES_ADD,
    queries,
  }),
});

export default connect(null, mapActionsToProps);
