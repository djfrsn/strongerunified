import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/Contact';
import '../components/index.scss';

const Contact = props => (
  <App title="Stronger Unified - Contact Us">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

Contact.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer']
  });

  return getContentType(response);
};

export default Contact;
