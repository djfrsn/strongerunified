import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <section
        className="about-us-section parallax"
        data-bg-image="/static/about-us-bg.jpg"
        data-speed={3}
      >
        <div className="container">
          <div className="row content">
            <div className="col col-md-7 left-col">
              <div>
                <div className="tab-list">
                  <ul className="nav">
                    <li role="presentation" className="active">
                      <a href="#about" data-toggle="tab">
                        About us
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#history" data-toggle="tab">
                        History
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade in active" id="about">
                    <p>
                      Totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="history">
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora.
                    </p>
                    <p>
                      Totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>{' '}
            {}
            <div className="right-col-bg" />
            <div className="col col-md-5 right-col">
              <div className="about-slider">
                <div>
                  <h3>How we work</h3>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitatio nem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur
                  </p>
                </div>
                <div>
                  <h3>How we work</h3>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitatio nem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur
                  </p>
                </div>
                <div>
                  <h3>How we work</h3>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitatio nem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur
                  </p>
                </div>
              </div>
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

export default AboutUs;
