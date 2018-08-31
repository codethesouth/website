import React, { Component } from 'react';
import '../css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#home">
                        <img id="logoicon" src="/img/codethesouth-icon-rgb.svg" alt="logo" height="50" width="50" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">About</a></li>
                        <li><a href="#gettingStarted">Getting Started</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navigation;