import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const App = props => {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
}

const increment = ({
    type: 'INCREMENT'
});

const Counter = props => {
    let counter = store.getState().counter;
    return (
      <div>
        {counter}
        <button onClick={() => store.dispatch(increment)}>increment</button>
      </div>
    );
}



const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter
})

const store = createStore(
    rootReducer,
    {counter: 5},
    (window.devToolsExtension ? window.devToolsExtension() : undefined)
); 

const render = () => {
    ReactDOM.render(
      <Provider store={store}>
          <App/>
      </Provider>,
      document.getElementById('root')
    );
}

render();

store.subscribe(render);

export default App;
