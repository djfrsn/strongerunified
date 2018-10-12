import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/PageTitleWrapper';
import AboutCompany from './partials/about/AboutCompany';
import Partners from './partials/about/Partners';
import VolunteersList from './partials/main/VolunteersList';
import FunFact from './partials/main/FunFact';
import CTA from './partials/main/CTA';
import Footer from './partials/Footer';

class About extends React.Component {
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
                  <PageTitleWrapper title="About Us">
                    <ol className="breadcrumb">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>About</li>
                    </ol>
                  </PageTitleWrapper>
                  <AboutCompany />
                  <FunFact />
                  <VolunteersList />
                  <CTA />
                  <Partners title="Our Partners" />
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

export default vendorScripts(About);
