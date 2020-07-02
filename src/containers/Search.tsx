import { getSearch, getSort } from '../reducers/toggler';
import { bindActionCreators } from 'redux';
import { fetchFilms } from '../actions/searchActions';
import { searchToggler } from '../actions/togglerActions';
import { searchQuery } from '../actions/pageActions';
import { connect } from 'react-redux';
import { SearchBlock } from '../components/SearchBlock';

const mapStateToProps = (state: any) => ({
  sortBy: getSort(state.toggler),
  searchBy: getSearch(state.toggler),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchFilms,
      searchQuery,
      searchToggler,
      dispatch,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
