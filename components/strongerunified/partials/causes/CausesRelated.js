import React from 'react';

class CausesRelated extends React.Component {
  render() {
    return (
      <section className="causes-s2 related-causes">
        <div className="container">
          <div className="row section-title">
            <div className="col col-xs-12">
              <h2>Related Causes</h2>
            </div>
          </div>{' '}
          {}
          <div className="row causes-s2-grids">
            <div className="col col-lg-4 col-xs-6">
              <div className="grid">
                <div className="img-goal-raised">
                  <div className="img-holder">
                    <img
                      src="/static/causes-s2/img-4.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="goal-raised-meter">
                    <div className="hrvr-center">
                      <div className="meter-2" data-value="0.9">
                        <span />
                      </div>
                      <div className="goal-raised">
                        <div>
                          <h4>Raised</h4>
                          <span>$41,089</span>
                        </div>
                        <div>
                          <h4>Goal</h4>
                          <span>$50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="causes-info">
                  <h3>
                    <a href="#">Paint the Boston orphanage</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-xs-6">
              <div className="grid">
                <div className="img-goal-raised">
                  <div className="img-holder">
                    <img
                      src="/static/causes-s2/img-2.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="goal-raised-meter">
                    <div className="hrvr-center">
                      <div className="meter-2" data-value="0.7">
                        <span />
                      </div>
                      <div className="goal-raised">
                        <div>
                          <h4>Raised</h4>
                          <span>$41,089</span>
                        </div>
                        <div>
                          <h4>Goal</h4>
                          <span>$50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="causes-info">
                  <h3>
                    <a href="#">Save water for thirsty people</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-xs-6">
              <div className="grid">
                <div className="img-goal-raised">
                  <div className="img-holder">
                    <img
                      src="/static/causes-s2/img-5.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="goal-raised-meter">
                    <div className="hrvr-center">
                      <div className="meter-2" data-value="0.5">
                        <span />
                      </div>
                      <div className="goal-raised">
                        <div>
                          <h4>Raised</h4>
                          <span>$41,089</span>
                        </div>
                        <div>
                          <h4>Goal</h4>
                          <span>$50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="causes-info">
                  <h3>
                    <a href="#">Flower sale for charity</a>
                  </h3>
                  <span className="remaining-days">
                    <i className="fi flaticon-calendar-page-with-circular-clock-symbol" />
                    3 days remaining
                  </span>
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

export default CausesRelated;
