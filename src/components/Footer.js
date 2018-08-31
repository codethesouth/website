import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
            <ul className="social text-center">
                <li><a href="https://www.facebook.com/groups/code4huntsville" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/intent/follow?screen_name=code4huntsville" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-twitter"></i></a></li>
                <li><a href="https://github.com/codeforhuntsville" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-github" ></i></a></li>
                <li><a href="https://codethesouth.slack.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-slack"></i></a></li>
            </ul>
        
            <p className="text-center">&copy;&nbsp;
                {(new Date().getFullYear())} - All Rights Reserved
            </p>
            </div>
        </footer>
    );
  }
}

export default Footer;