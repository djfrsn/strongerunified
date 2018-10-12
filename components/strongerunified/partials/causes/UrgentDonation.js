import React from 'react';

class UrgentDonation extends React.Component {
  render() {
    return (
      <section className="urgent-donation">
        <div className="section-bg" />
        <div className="container">
          <div className="row urgent-inner">
            <div className="col col-lg-10 col-lg-offset-1">
              <div className="urgent-slider carousel-dots-with-nav">
                <div className="urgent-box">
                  <div className="img-holder">
                    <img
                      src="/static/urgent-slider/img-2.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <span>Urgent</span>
                    <h2>Kids promenade party</h2>
                    <p className="remaing-date">3 days remaining</p>
                    <div className="progress-wrapper">
                      <div className="progress">
                        <div className="progress-bar" data-percent={85} />
                      </div>
                    </div>
                    <div className="goal-raised">
                      <div className="goal">
                        <span>Goal</span>
                        <h4>12,500</h4>
                      </div>
                      <div className="raised">
                        <span>Raised</span>
                        <h4>12,500</h4>
                      </div>
                    </div>
                    <form action="#" className="form">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="- ENTER AMOUNT -"
                          required
                        />
                      </div>
                      <div>
                        <button type="submit" className="btn theme-btn">
                          Donate
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="urgent-box">
                  <div className="img-holder">
                    <img
                      src="/static/urgent-slider/img-2.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <span>Urgent</span>
                    <h2>Kids promenade party</h2>
                    <p className="remaing-date">3 days remaining</p>
                    <div className="progress-wrapper">
                      <div className="progress">
                        <div className="progress-bar" data-percent={85} />
                      </div>
                      <div className="goal-raised">
                        <div className="goal">
                          <span>Goal</span>
                          <h4>12,500</h4>
                        </div>
                        <div className="raised">
                          <span>Raised</span>
                          <h4>12,500</h4>
                        </div>
                      </div>
                      <form action="#" className="form">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="- Enter Amount -"
                            required
                          />
                        </div>
                        <div>
                          <button type="submit" className="btn theme-btn">
                            Donate
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="urgent-box">
                  <div className="img-holder">
                    <img
                      src="/static/urgent-slider/img-2.jpg"
                      alt
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <span>Urgent</span>
                    <h2>Kids promenade party</h2>
                    <p className="remaing-date">3 days remaining</p>
                    <div className="progress-wrapper">
                      <div className="progress">
                        <div className="progress-bar" data-percent={85} />
                      </div>
                      <div className="goal-raised">
                        <div className="goal">
                          <span>Goal</span>
                          <h4>12,500</h4>
                        </div>
                        <div className="raised">
                          <span>Raised</span>
                          <h4>12,500</h4>
                        </div>
                      </div>
                      <form action="#" className="form">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="- Enter Amount -"
                            required
                          />
                        </div>
                        <div>
                          <button type="submit" className="btn theme-btn">
                            Donate
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{' '}
              {}
            </div>{' '}
            {}
          </div>{' '}
          {}
        </div>{' '}
        {}
      </section>
    );
  }
}

export default UrgentDonation;
