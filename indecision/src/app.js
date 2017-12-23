import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision_app';

const APP = () => {
  return(
    <IndecisionApp />
  )
}


ReactDOM.render(<APP />, document.getElementById('app'));
