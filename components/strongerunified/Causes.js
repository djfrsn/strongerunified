import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/about/PageTitleWrapper';
import CausesList from './partials/causes/CausesList';
import Footer from './partials/Footer';

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
