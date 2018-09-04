import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
        <div id="header">
            <div className="row">
                <div className="col-md-offset-7 col-md-3">
                    <img id="logo" src={process.env.PUBLIC_URL + "img/codethesouth-logo-rgb-999.svg"} alt="logo" />
                    <p id="slogan">Building software solutions for the community.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;