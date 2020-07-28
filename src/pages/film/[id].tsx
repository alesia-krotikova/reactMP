import { MoviePage } from '../../components/MoviePage';
import { wrapper } from '../../store/configureStore';
import { fetchFilms } from '../../actions/searchActions';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  await context.store.dispatch(fetchFilms(qs.stringify(context.query), context.query.id));

  return {
    props: context.store.getState().search,
  };
});

export default MoviePage;
