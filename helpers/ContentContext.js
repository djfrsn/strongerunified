import React from 'react';

const ContentContext = React.createContext();

export class ContentProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
      content_ready: props.content_ready
    };
  }

  render() {
    const { children } = this.props;
    const { content, content_ready } = this.state;

    return (
      <ContentContext.Provider
        value={{
          content: content,
          content_ready: content_ready
        }}
      >
        {children}
      </ContentContext.Provider>
    );
  }
}

export const ContentConsumer = ContentContext.Consumer;
