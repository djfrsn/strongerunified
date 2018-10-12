import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/about/PageTitleWrapper';
import EventsList from './partials/events/EventsList';
import Newsletter from './partials/causes/Newsletter';
import Footer from './partials/Footer';

class Events extends React.Component {
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
                  <PageTitleWrapper title="Events">
                    <ol className="breadcrumb">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Events</li>
                    </ol>
                  </PageTitleWrapper>
                  <EventsList />
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

export default vendorScripts(Events);
