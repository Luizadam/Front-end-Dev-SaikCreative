import React, { Component } from "react";
import "./navigation.css";

class index extends Component {
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  render() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
          <a href="#home" children="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <span
            className="btn btn-secondary dropdown-toggle profile"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Luiz adam
          </span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
          <a href="#" className="icon" onClick={this.myFunction}>
            &#9776;
          </a>
        </div>
      </div>
    );
  }
}

export default index;
