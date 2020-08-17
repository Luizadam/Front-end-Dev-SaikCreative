import React, { Component } from "react";
import "./navigation.css";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../../history'

class index extends Component {
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  handleLogout = () => {
    localStorage.clear()
    if (!localStorage.getItem("token")){
      history.push('/')
    }
  }
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
          <a className="text-white" onClick={this.handleLogout} style={{float:"right"}}>Logout</a>  
          
          <a href="#" className="icon" onClick={this.myFunction}>
            &#9776;
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    logout : () => dispatch ({type:"CHANGE_USER",value:{}})
  }
}

export default connect (null,mapDispatchToProps) (index);
