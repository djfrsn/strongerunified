import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col col-md-3 col-sm-6">
              <div className="widget about-widget">
                <div className="footer-logo">
                  <img
                    src="/static/footer-logo.png"
                    className="img img-responsive"
                  />
                </div>
                <div className="company-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore sed do
                    eiusmod.
                  </p>
                </div>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6">
              <div className="widget donate-widget">
                <h3 className="widget-title">Donate</h3>
                <ul>
                  <li>
                    <a href="#">Become a Monthly Giver</a>
                  </li>
                  <li>
                    <a href="#">Make a Single Donation</a>
                  </li>
                  <li>
                    <a href="#">Child Sponsorship</a>
                  </li>
                  <li>
                    <a href="#">Leave a Gift in Your Will</a>
                  </li>
                  <li>
                    <a href="#">Other Ways to Give</a>
                  </li>
                  <li>
                    <a href="#">Online Gift Catalogue</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6">
              <div className="widget action-widget">
                <h3 className="widget-title">Take action</h3>
                <ul>
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Global Reach</a>
                  </li>
                  <li>
                    <a href="#">Campaign with Us</a>
                  </li>
                  <li>
                    <a href="#">Our History</a>
                  </li>
                  <li>
                    <a href="#">Volunteer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6">
              <div className="widget twitter-post-widget">
                <h3 className="widget-title">Twitter feed</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" /> Themexriver
                    </a>{' '}
                    @envato: One subscription, 5000+ assets & unlimited August
                    30, 2016 7:49 am
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" /> Themexriver
                    </a>{' '}
                    olar bears can eat as many as 86 penguins in a single
                    sitting.July 22, 2016 11:35 am
                  </li>
                </ul>
              </div>
            </div>
          </div>{' '}
          {}
        </div>{' '}
        {}
      </footer>
    );
  }
}

export default Footer;
