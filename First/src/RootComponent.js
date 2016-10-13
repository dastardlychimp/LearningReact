import React from 'react';
import Counter from './components/Counter';
import { Link } from 'react-router';

const RootComponent = props => {
    return (
      <div>
        <Counter></Counter>
        <Link to="/home">Home</Link>
        <Link to="home/about">About</Link>
        {props.children}
      </div>
    );
}

export default RootComponent;