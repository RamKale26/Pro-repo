import React, { Component } from "react";
import "../style/AboutUs.css";
class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our Product Management App!  
          We are passionate about building user-friendly and efficient solutions  
          to manage your products effortlessly.
        </p>
        <p>
          Our mission is to help individuals and businesses keep track of their products,  
          improve efficiency, and make better decisions through organized data.
        </p>
        <p>
          This application is built with modern web technologies to ensure a smooth and  
          responsive user experience.
        </p>
        <h6> Manged by || Babar Tushar And Ramnath Kale</h6>
      </div>
    );
  }
}
export default AboutUs;
