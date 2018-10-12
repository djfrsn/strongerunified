import React from 'react';
import { ContentConsumer } from '../../helpers/ContentContext';
import { keyContent } from '../../helpers/prismic';
import { Preloader } from './Home';

import vendorScripts from '../../pages/_vendorScripts';
import Header from './partials/Header';
import PageTitleWrapper from './partials/PageTitleWrapper';
import BlogSingle from './partials/blog/BlogSingle';
import Footer from './partials/Footer';

class BlogSingle extends React.Component {
  render() {
    return (
      <ContentConsumer>
        {content => {
          const { header } = keyContent(content.content);
          return (
            <div className="blog-details-page page-wrapper">
              <Preloader content={content} />
              {content.content_ready && (
                <React.Fragment>
                  <Header content={header.data} />
                  <PageTitleWrapper title="Blog Post">
                    <ol className="breadcrumb">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Blog</li>
                      <li>Blog single</li>
                    </ol>
                  </PageTitleWrapper>
                  <EventsList />
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

export default vendorScripts(BlogSingle);
