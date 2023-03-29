import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";

// const store = configureStore();
// ReactDOM.render(<App/>, document.getElementById('root'));
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //ReactDOM.render(<App />, document.getElementById("root"));
  // <h1>hello</h1>

  // root.render(<App/>);
  // <h1>hello</h1>
  <React.StrictMode>
{/* //    <Provider store={store}>

//     <Router>
//     <App />
//     </Router>
//     </Provider> */}
<h1>HELLO!</h1>
    <App />

  </React.StrictMode>
 );


reportWebVitals();
