// import React, { useState, useEffect, PropTypes  } from "react";
// import {Routes, Route} from 'react-router';
// import { Provider } from "react-redux";
// import { configureStore } from "../store";
// import { BrowserRouter as Router } from "react-router-dom";
// import { connect } from "react-redux";
// import Button from '@material-ui/core/Button';
// import '../App.css';
// import WeatherSummary from '../WeatherSummary.js';
// import ResponsiveAppBar from "./ResponsiveAppBar.js";
// import ProductDisplay from "../ProductDisplay";
// import Feature from "../Feature";
// import AuthForm from "../components/AuthForm";
// import { authUser } from "../store/actions/auth.js";
// import Main from "./Main";


// const store = configureStore();

// // const App = props => {
// //   const { authUser } = props;


// const App = () => {
// //   return (
//  <div>
// <h1>HELLO FROM APP!!</h1>
// <Provider store={store}>
// <Router>
//       <div className="onboarding">
//         <ResponsiveAppBar />
//         <Main />
//       </div>
//     </Router>
// </Provider>
// // </div>
// //   );
// }

// // function mapStateToProps(state) {
// //   return {
// //     errors: state.errors
// //   };
// // }

// // //export default App;
// // export default connect(mapStateToProps, { authUser })(App);

// export default App;

import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main.js";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
