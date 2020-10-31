import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              {config.heading}
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white font-weight-light mb-5">
              {config.subHeading}
            </p>
            <Scroll type="id" element="about">
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </header>

    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4">
              We are a volunteer-driven organization that specializes in building software and technology solutions for our community.
            </p>
            <Scroll type="id" element="services">
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#getting-started"
              >
                Get Started!
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">Do You Want To Get Involved?</h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-users text-primary mb-4"></i>
              <h3 className="h4 mb-2">Community Member</h3>
              <p className="text-muted mb-0">
                Writer, artist, organizer, storyteller or social media coordinator, we need you! Help organize meetings, steer committees or coordinate projects.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 className="h4 mb-2">Software Developer</h3>
              <p className="text-muted mb-0">
                Can you write code? Help us build applications to make the future better.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
              <h3 className="h4 mb-2">Nonprofit Organization</h3>
              <p className="text-muted mb-0">
                We support nonprofit agencies! If you are involved with an NGO or nonprofit organization please contact us.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 className="h4 mb-2">Local Government Worker</h3>
              <p className="text-muted mb-0">
                We need contacts to help us form new projects. Become a liaison for Code the South.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactUs />

    <Footer />
  </Layout>
);

export default IndexPage;
