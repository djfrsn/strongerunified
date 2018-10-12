import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/PageTitleWrapper';
import Contact from './partials/Contact';
import Footer from './partials/Footer';

class Blog extends React.Component {
  render() {
    return (
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);
          return (
            <div className="contact-page page-wrapper">
              <Preloader content={content} />
              {content.content_ready && (
                <React.Fragment>
                  <Header content={header.data} />
                  <PageTitleWrapper title="Contact Us">
                    <ol className="breadcrumb">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Contact</li>
                    </ol>
                  </PageTitleWrapper>
                  <Contact />
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

export default vendorScripts(Blog);
