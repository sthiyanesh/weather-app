import React from 'react';
import './CSS/header.css';
import loging from './Images/logo.png';
import inof from './Images/help.png';
import { Link} from "react-router-dom";

class Heading extends React.Component {
    render() {
      return (
        <div className="head">
          <img src={loging} alt="HTML5" id="logo"/>
          <p id="title">Quick Weather Reporter</p>   
          <Link to="/help"><img src={inof} alt="HTML5" id="help"/></Link>     
        </div>
      );
    }
  }
  export default Heading;
  /*
  
          <div className="title"></div>
          <div className="help"><Link to="/help"><img src={inof} alt="HTML5"/></Link></div>

  */