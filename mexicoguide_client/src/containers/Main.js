import React from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
//import withAuth from "../hocs/withAuth";
//import MessageForm from "../containers/MessageForm";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Routes>
        <Route
          exact
          path="/"
          //element={props => <Homepage currentUser={currentUser} {...props} />}
          element = {<Homepage currentUser={currentUser} {...props} /> }

        />
        <Route
          exact
          path="/signin"
          element= {
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              /> }
        />
        <Route
          exact
          path="/signup"
          element= {
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              signUp
              buttonText="Sign me up!"
              heading="Join Warbler today."
              {...props}
            /> }
      />
      </Routes>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

  export default connect(mapStateToProps, { authUser, removeError})(Main);

