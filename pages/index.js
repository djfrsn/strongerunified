import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/Home';
import '../components/index.scss';

const Index = props => (
  <App title="Stronger Unified">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

Index.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer', 'menu']
  });

  return getContentType(response);
};

export default Index;
