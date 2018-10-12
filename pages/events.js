import App from '../components/App';
import { getContentTypeAPI } from '../api/prismic';
import { ContentProvider } from '../helpers/ContentContext';
import { getContentType } from '../helpers/prismic';

import PageWrapper from '../components/strongerunified/Events';
import '../components/index.scss';

const Events = props => (
  <App title="Stronger Unified - Events">
    <ContentProvider
      content={props.content}
      content_ready={props.content_ready}
    >
      <PageWrapper />
    </ContentProvider>
  </App>
);

Events.getInitialProps = async () => {
  const response = await getContentTypeAPI({
    content_type: ['header', 'footer']
  });

  return getContentType(response);
};

export default Events;
