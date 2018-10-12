import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/Causes';
import '../components/index.scss';

const Causes = props => (
  <App title="Stronger Unified - Our Causes">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

Causes.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer']
  });

  return getContentType(response);
};

export default Causes;
