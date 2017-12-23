import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision_app';
//normalize will allow my css to be apllied in the same way
//in different browser and operating system
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const APP = () => {
  return(
    <IndecisionApp />
  )
}


ReactDOM.render(<APP />, document.getElementById('app'));
