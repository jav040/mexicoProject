import React, { Component , useState} from "react";
import PropTypes from "prop-types";
import { useNavigate, Navigate } from "react-router-dom";


  const AuthForm = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const navigate = useNavigate();
    const heading = props.heading;
    const buttonText = props.buttonText;
    const signUp = props.signUp;



  

  const HandleSubmit = (e) => {
    console.log("inside handleSubmit");
    e.preventDefault();
        console.log("inside handleSubmit");

    const data = {
      
                  email: email,
                  username: username,
                  password: password,
                  profileImageUrl: profileImageUrl
                };



     const authType = props.signUp ? "signup" : "signin";
    props
      .onAuth(authType, data)
      .then(() => {
        console.log("SIGNED IN")
        navigate("/");
      })
      .catch(() => {
        return;
      });
    
  };



    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={HandleSubmit}>
              { <h2>{heading}</h2> }
               <label htmlFor="username">Username</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={e => setUsername(e.target.value)} 
                    type="text"
                    value={username}
                  />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={e => setPassword(e.target.value)} 
                type="password"
                value={password}
              />
              {signUp && (
                <div>
 <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={e => setEmail(e.target.value)} 
                type="text"
                value={email}
              />
                  
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                { buttonText }
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};


export default AuthForm;
