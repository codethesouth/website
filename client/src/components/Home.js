import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import GettingStarted from './GettingStarted';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
        <GettingStarted />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
