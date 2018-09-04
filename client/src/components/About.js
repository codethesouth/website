import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
        <section id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-center">We are</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-center">CODE THE SOUTH</h1>
                    <hr className="double-hr" />
                </div>
            </div>
            <br /><br />
            <div className="roles">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-2">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Encourage</h4>
                        <p className="text-center">Encourage and support development of public and private innovation in the field of civic technologies.</p>
                    </div>
                <div className="col-sm-2 col-sm-offset-1">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Promote</h4>
                        <p className="text-center">Promote effective and efficient technologies for civic interaction.</p>
                    </div>
                <div className="col-sm-2 col-sm-offset-1">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Inform</h4>
                        <p className="text-center">Inform area residents of metro government data sources.</p>
                    </div>
            </div>
            <br />
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-2">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Empower</h4>
                        <p className="text-center">Empower citizen influence by working with public policy makers to expand and enhance open data standards.</p>
                    </div>
                <div className="col-sm-2 col-sm-offset-1">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Educate</h4>
                        <p className="text-center">Provide educational opportunity to those wishing to learn about application design and implementation.</p>
                    </div>
                    <div className="col-sm-2 col-sm-offset-1">
                        <i className="fa fa-4x fa-group text-orange"></i>
                        <h4 className="text-center">Sustain</h4>
                        <p className="text-center">Garner resources for and to maintain and sustain viability of Code The South.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default About;