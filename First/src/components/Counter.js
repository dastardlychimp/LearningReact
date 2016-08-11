import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

const CounterDumb = props => {
    console.log(props);
    return (
      <div>
        <button onClick={props.increment}>A</button>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterDumb);

export default Counter;