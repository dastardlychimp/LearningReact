import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import RootComponent from './RootComponent';
import About from './components/About';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(
    rootReducer,
    {},
    (window.devToolsExtension ? window.devToolsExtension() : undefined)
); 

const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/home" component={RootComponent}>
                    <Route path="/home/about" component={About}/>
                </Route>
            </Router>
        </Provider>,
      document.getElementById('root')
    );
}

render();

store.subscribe(render);