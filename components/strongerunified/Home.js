import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import $ from 'jquery';

import vendorScripts from '../../pages/_vendorScripts';
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

export class Preloader extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.content &&
      this.props.content.content_ready &&
      !prevProps.content_ready
    ) {
      $('.preloader')
        .delay(100)
        .fadeOut(500);
    }
  }
  render() {
    return (
      <div className="preloader">
        <div>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);

          return (
            <div className="page-wrapper">
              <Preloader content={content} />
              {content.content_ready && (
                <React.Fragment>
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
                </React.Fragment>
              )}
            </div>
          );
        }}
      </ContentConsumer>
    );
  }
}

export default vendorScripts(Home);
