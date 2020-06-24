import { getFilms, getFilmsError } from '../reducers/search';
import { getSearch, getSort } from '../reducers/toggler';
import { getFilm, getQuery } from '../reducers/pages';
import { bindActionCreators } from 'redux';
import { fetchFilms } from '../actions/searchActions';
import { sortToggler } from '../actions/togglerActions';
import { selectFilm } from '../actions/pageActions';
import { connect } from 'react-redux';
import { MovieApp } from '../components/MovieApp';

const mapStateToProps = (state: any) => ({
  error: getFilmsError(state.search),
  films: getFilms(state.search),
  sortBy: getSort(state.toggler),
  searchBy: getSearch(state.toggler),
  film: getFilm(state.pages),
  query: getQuery(state.pages),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchFilms,
      sortToggler,
      selectFilm,
      dispatch,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
