import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Volunteers from './Volunteers';
import Causes from './Causes';
import FunFact from './FunFact';
import UrgentCauses from './UrgentCauses';
import AboutUs from './AboutUs';
import VolunteersList from './VolunteersList';
import QuickDonation from './QuickDonation';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

class PageWrapper extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="preloader">
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <Header />
        <Hero />
        <Volunteers />
        <Causes />
        <FunFact />
        <UrgentCauses />
        <AboutUs />
        <VolunteersList />
        <QuickDonation />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    );
  }
}

export default PageWrapper;
