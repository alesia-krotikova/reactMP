import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { MovieApp } from './components/MovieApp';

import './styles/global.scss';

ReactDOM.render(<Provider store={store}><MovieApp /></Provider>, document.getElementById('root'));
