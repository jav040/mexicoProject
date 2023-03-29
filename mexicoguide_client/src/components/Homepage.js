import React from "react";
import { Link } from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";
<h1>SHFSDFSD</h1>
 const Homepage = ({ currentUser }) => {
 //   const Homepage = () => {
<h1>START HOMEPAGE!</h1>
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>YOU MADE IT! currentUser </h1>
    </div>
  );
}



export default Homepage;
