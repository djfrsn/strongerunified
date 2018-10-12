import React from "react";

class AboutCompany extends React.Component {
  render() {
    return (
      <section className="about-company-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-md-7 left-col">
              <div className="about-company">
                <span>About the company</span>
                <h2>
                  Charity World is a simple, replicable and scalable approach
                  with proven success towards humanity.
                </h2>
                <p>
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nos trud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excep teur sint occaecat cupidatat non
                  proident
                </p>
                <a href="#" className="theme-btn-s4">
                  Read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col col-md-5 right-col">
              <div className="some-info">
                <div className="circle" />
                <div className="info-box">
                  <span className="icon">
                    <i className="fi flaticon-coins-1" />
                  </span>
                  <div className="details">
                    <h4>2.40 m</h4>
                    <span>Donation</span>
                  </div>
                </div>
                <div className="info-box">
                  <span className="icon">
                    <i className="fi flaticon-medical" />
                  </span>
                  <div className="details">
                    <h4>01</h4>
                    <span>Purpose</span>
                  </div>
                </div>
                <div className="info-box">
                  <span className="icon">
                    <i className="fi flaticon-people-1" />
                  </span>
                  <div className="details">
                    <h4>12.8 k</h4>
                    <span>Volunteers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {}
        </div>{" "}
        {}
      </section>
    );
  }
}

export default AboutCompany;
