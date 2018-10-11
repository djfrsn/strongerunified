import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';

import Header from './partials/Header';
import Hero from './partials/main/Hero';
import Volunteers from './partials/main/Volunteers';
import Causes from './partials/main/Causes';
import FunFact from './partials/main/FunFact';
import UrgentCauses from './partials/main/UrgentCauses';
import AboutUs from './partials/main/AboutUs';
import VolunteersList from './partials/main/VolunteersList';
import QuickDonation from './partials/main/QuickDonation';
import Testimonials from './partials/main/Testimonials';
import CTA from './partials/main/CTA';
import Footer from './partials/Footer';

class Home extends React.Component {
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
)(Home);
