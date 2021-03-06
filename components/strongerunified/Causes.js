import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/PageTitleWrapper';
import CausesList from './partials/causes/CausesList';
import Newsletter from './partials/causes/Newsletter';
import Footer from './partials/Footer';
import UrgentDonation from './partials/causes/UrgentDonation';

class About extends React.Component {
  render() {
    return (
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);
          return (
            <div className="causes-list-page page-wrapper">
              <Preloader content={content} />
              {content.content_ready && (
                <React.Fragment>
                  <Header content={header.data} />
                  <PageTitleWrapper title="Causes">
                    <ol className="breadcrumb">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Causes</li>
                    </ol>
                  </PageTitleWrapper>
                  <CausesList />
                  <UrgentDonation />
                  <Newsletter />
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
