import React, { Component } from 'react';
import '../css/GettingStarted.css';

class GettingStarted extends Component {
  render() {
    return (
        <section id="gettingStarted" className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">DO YOU WANT TO GET INVOLVED?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="text-center">Join a group that fits your expertise.</p>
            <hr className="double-hr-gray" />
          </div>
        </div>
        <br /> <br />
        <div className="roles">
          <div className="row">
            <div className="col-sm-2 col-sm-offset-3">
              <i className="fa fa-4x fa-group text-primary"></i>
              <h4 className="text-center">Community Member</h4>
              <p className="text-center">Writer, artist, organizer, storyteller or social media coordinator, we need you! Help organize meetings, steer committees or coordinate projects. Simply fill out the
                <a href="https://docs.google.com/forms/d/1wkOoGgLyuDzO6MKjsB8yZhH1U1lfV5KGqJ9HWtLS6pA/edit?usp=drive_web">committee candidate form.</a>
              </p>
            </div>
            <div className="col-sm-2 col-sm-offset-2">
              <i className="fa fa-4x fa-keyboard-o text-primary"></i>
              <h4 className="text-center">Software Developer</h4>
              <p className="text-center">Can you write code? Help us build applications to make the future better. Check out our <a href="https://github.com/codeforhuntsville">GitHub</a> page to help.</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-2 col-sm-offset-3">
              <i className="fa fa-4x fa-recycle text-primary"></i>
              <h4 className="text-center">Nonprofit Organization</h4>
              <p className="text-center">We support nonprofit agencies! If you are involved with an NGO or nonprofit organization please contact us.</p>
            </div>
            <div className="col-sm-2 col-sm-offset-2">
              <i className="fa fa-4x fa-newspaper-o text-primary"></i>
              <h4 className="text-center">Local Government Worker</h4>
              <p className="text-center">We need contacts to help us form new projects. Become a liaison for CodeTheSouth.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GettingStarted;