import { getFilms, getFilmsError } from '../reducers/search';
import { bindActionCreators } from 'redux';
import { fetchFilms } from '../actions/searchActions';
import { connect } from 'react-redux';
import { SearchPage } from '../components/SearchPage';

const mapStateToProps = (state: any, ownProps: any) => ({
  error: getFilmsError(state.search),
  films: getFilms(state.search),
  ...ownProps,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchFilms,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
