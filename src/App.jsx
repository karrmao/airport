import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import Board from './flights/components/Board';
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Board />
    </BrowserRouter>
  </Provider>
);
export default App;
