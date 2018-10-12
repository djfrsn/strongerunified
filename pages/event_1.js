import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/EventSingle';
import '../components/index.scss';

const EventSingle = props => (
  <App title="Stronger Unified - Event 1">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

EventSingle.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer']
  });

  return getContentType(response);
};

export default EventSingle;
