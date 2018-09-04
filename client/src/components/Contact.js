import React, { Component } from 'react';
import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                    <h1 className="text-center">Contact Us/Submit an Idea</h1>
                    <form id="contactForm">
                        <div className="form-group">
                        <label for="nameLabel">Name</label>
                        <input type="text" className="form-control" id="nameLabel" placeholder="Name" />
                        </div>
                        <div className="form-group">
                        <label for="emailLabel">Email address</label>
                        <input type="email" className="form-control" id="emailLabel" placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <label for="formSubmissionOption">What would you like to talk about?</label>
                        <select id="formSubmissionOption" className="form-control">
                            <option value="contact">Contact Us</option>
                            <option value="idea">Submit an Idea</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label for="msgTextarea">Message</label>
                        <textarea type="text" className="form-control" id="msgTextarea" rows="10" placeholder="Message"></textarea>
                        </div>
                        <button id="submitBtn" type="submit" className="btn btn-success btn-block">Submit</button>
                    </form>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </section>
    );
  }
}

export default Contact;