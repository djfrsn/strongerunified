import React from "react";

class Volunteers extends React.Component {
  render() {
    return (
      <section className="fund-volunteers">
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <div className="box">
                <div className="left-part">
                  <h2>
                    <i className="fi flaticon-medical" /> Volunteers
                  </h2>
                  <span className="time-to-go">21 more days to go</span>
                  <a href="#" className="btn theme-btn-s2">
                    Join us <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="right-part">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-s1"
                      data-percent={55}
                    />
                  </div>
                  <div className="goal-joined">
                    <div>
                      <h3>Joined</h3>
                      <span className="amount">12,387</span>
                    </div>
                    <div>
                      <h3>Goal</h3>
                      <span className="amount">30,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-6">
              <div className="box">
                <div className="left-part">
                  <h2>
                    <i className="fi flaticon-money-4" /> Fund
                  </h2>
                  <span className="time-to-go">21 more days to go</span>
                  <a href="#" className="btn theme-btn-s2">
                    Join us <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="right-part">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-s1"
                      data-percent={85}
                    />
                  </div>
                  <div className="goal-joined">
                    <div>
                      <h3>Joined</h3>
                      <span className="amount">39,209</span>
                    </div>
                    <div>
                      <h3>Goal</h3>
                      <span className="amount">50,000</span>
                    </div>
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

export default Volunteers;
