import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/about/PageTitleWrapper';
import CauseSingle from './partials/causes/CauseSingle';
import CausesRelated from './partials/causes/CausesRelated';
import Partners from './partials/about/Partners';
import Footer from './partials/Footer';

class EventSingle extends React.Component {
  render() {
    return (
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);
          return (
            <div className="cause-single-page page-wrapper">
              <Preloader content={content} />
              {content.content_ready && (
                <React.Fragment>
                  <Header content={header.data} />
                  <PageTitleWrapper>
                    <ol className="breadcrumb">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/causes">Causes</a>
                      </li>
                      <li>single cause</li>
                    </ol>
                  </PageTitleWrapper>
                  <CauseSingle />
                  <CausesRelated />
                  <Partners title="Sponsored By" />
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

export default vendorScripts(EventSingle);
