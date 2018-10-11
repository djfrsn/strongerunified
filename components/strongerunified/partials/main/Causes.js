import React from 'react';

class Causes extends React.Component {
  render() {
    return (
      <section className="causes section-padding">
        <div className="container">
          <div className="row section-title">
            <div className="col col-md-8 col-md-offset-2">
              <h2>Top causes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>{' '}
          {}
          <div className="row content">
            <div className="col col-md-4 col-xs-6">
              <div className="grid">
                <div className="img-holder">
                  <img
                    src="/static/causes/img-1.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="goal-raised">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-s2 "
                      data-percent={85}
                    />
                  </div>
                  <div className="goal-raised-inner">
                    <div className="raised">
                      <h4>
                        Raised: <span>$75,328</span>
                      </h4>
                    </div>
                    <div className="goal">
                      <h4>
                        Goals: <span>$100,000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="causes-title">
                  <h3>
                    <a href="#">Make the world green again</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
                </div>
                <div className="causes-details">
                  <p>
                    Perspiciatis unde omnis iste natus error sit volupta tem
                    accusantium doloremque laudantium.{' '}
                  </p>
                  <a href="#" className="btn theme-btn-s3">
                    Donate
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-xs-6">
              <div className="grid">
                <div className="img-holder">
                  <img
                    src="/static/causes/img-2.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="goal-raised">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-s2 "
                      data-percent={85}
                    />
                  </div>
                  <div className="goal-raised-inner">
                    <div className="raised">
                      <h4>
                        Raised: <span>$75,328</span>
                      </h4>
                    </div>
                    <div className="goal">
                      <h4>
                        Goals: <span>$100,000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="causes-title">
                  <h3>
                    <a href="#">Eradicate the word “Hunger”</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
                </div>
                <div className="causes-details">
                  <p>
                    Perspiciatis unde omnis iste natus error sit volupta tem
                    accusantium doloremque laudantium.{' '}
                  </p>
                  <a href="#" className="btn theme-btn-s3">
                    Donate
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-xs-6">
              <div className="grid">
                <div className="img-holder">
                  <img
                    src="/static/causes/img-3.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="goal-raised">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-s2 "
                      data-percent={85}
                    />
                  </div>
                  <div className="goal-raised-inner">
                    <div className="raised">
                      <h4>
                        Raised: <span>$75,328</span>
                      </h4>
                    </div>
                    <div className="goal">
                      <h4>
                        Goals: <span>$100,000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="causes-title">
                  <h3>
                    <a href="#">Relief distribution in Haiti</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
                </div>
                <div className="causes-details">
                  <p>
                    Perspiciatis unde omnis iste natus error sit volupta tem
                    accusantium doloremque laudantium.{' '}
                  </p>
                  <a href="#" className="btn theme-btn-s3">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>{' '}
          {}
        </div>{' '}
        {}
      </section>
    );
  }
}

export default Causes;
