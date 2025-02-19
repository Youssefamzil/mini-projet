import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


import reportWebVitals from './reportWebVitals';
// import HelloWorld from './youssef/HelloWorld';
// import Fruit from './youssef/Fruit.jsx';
// import Counter from './youssef/Counter.jsx';
// import FruitList from './youssef/FruitList.jsx';
// import ToggleName from './youssef/ToggleName.jsx';
// import Exp from './youssef/Exp.jsx';
// import Form from './youssef/form.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


// import App1 from './projet/page/App1.jsx';

import { Provider } from 'react-redux';
// import App from './projet/App';
import App from './projet/App.jsx';
import CarList from './preparation/CarList.jsx';
import Login from './projet/Login'; 
import { store } from './projet/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray =['kiwi','lemon','orange','apple']
root.render(
  // <React.StrictMode>
  //   <CarList/>
  // </React.StrictMode>
    
  // <React.StrictMode>
  <Provider store={store}>  
           
    <App/>              
  
   </Provider>,
     
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
