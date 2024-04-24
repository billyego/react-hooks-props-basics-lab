import React from "react";
import User from '../data/user';

function About(user) {
  if(!User.bio||User.bio===''){
    return null;
  }
 
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{User.bio}</p>
      <a href="#">{User.links.github}</a>
      <a href="#">{User.links.linkedin}</a>
      
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     
      
    </div>
  );
}

export default About;