import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';

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
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);
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
              <Header content={header.data} />
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
        }}
      </ContentConsumer>
    );
  }
}

export default scriptLoader(
  [
    '/static/js/jquery.min.js',
    '/static/js/jquery-plugin-collection.js',
    '/static/js/bootstrap.min.js'
  ],
  '/static/js/script.js'
)(PageWrapper);
