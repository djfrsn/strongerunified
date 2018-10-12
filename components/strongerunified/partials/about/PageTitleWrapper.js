import React from "react";

class PageTitleWrapper extends React.Component {
  render() {
    return (
      <section className="page-title-wrapper">
        <div className="page-title">
          <h1>About us</h1>
        </div>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default PageTitleWrapper;
