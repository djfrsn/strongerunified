import React from 'react';

class PageTitleWrapper extends React.Component {
  render() {
    return (
      <section className="page-title-wrapper">
        <div className="page-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="breadcrumb-wrapper">
          <div className="container">{this.props.children}</div>
        </div>
      </section>
    );
  }
}

export default PageTitleWrapper;
