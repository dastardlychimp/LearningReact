import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import RootComponent from './RootComponent'

const store = createStore(
    rootReducer,
    {},
    (window.devToolsExtension ? window.devToolsExtension() : undefined)
); 

const render = () => {
    ReactDOM.render(
      <Provider store={store}>
          <RootComponent />
      </Provider>,
      document.getElementById('root')
    );
}

render();

store.subscribe(render);