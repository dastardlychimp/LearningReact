import { combineReducers } from 'redux';
import counter from './reducers/counter';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    routing,
    counter
});


export default rootReducer;