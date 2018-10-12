import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/Blog';
import '../components/index.scss';

const Blog = props => (
  <App title="Stronger Unified - Our Blog">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

Blog.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer']
  });

  return getContentType(response);
};

export default Blog;
