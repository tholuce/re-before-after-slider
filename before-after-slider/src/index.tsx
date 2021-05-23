import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Orientation} from './enums';

ReactDOM.render(
  <React.StrictMode>
    <App 
      before="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      after="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      height="400px"
      width="700px"
      orientation = {Orientation.Vertical}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
