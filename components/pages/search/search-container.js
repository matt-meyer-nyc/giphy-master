//this file replaced search-form-container.js in search-form folder

import Search from './search';
import { connect } from 'react-redux';
import { newSearch, performSearch } from '../../../actions/search';

function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    onSearchSubmitted: (searchTerm) => {
      dispatch(newSearch(searchTerm));
      dispatch(performSearch());
    },
    onInfiniteScroll: () => {
      dispatch(performSearch());
    }
  }
}

export default connect(mapStateToProps, mapStateToProps)(Search);
