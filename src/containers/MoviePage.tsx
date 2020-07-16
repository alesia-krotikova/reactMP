import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFilms, getFilm, getFilmsError } from '../reducers/search';
import { fetchFilms } from '../actions/searchActions';
import { MoviePage } from '../components/MoviePage';

const mapStateToProps = (state: any) => ({
  error: getFilmsError(state.search),
  films: getFilms(state.search),
  film: getFilm(state.search),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    fetchFilms,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
