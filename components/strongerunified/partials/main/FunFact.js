import React from 'react';

class FunFact extends React.Component {
  render() {
    return (
      <section
        className="fun-fact parallax"
        data-bg-image="/static/fun-fact-bg.jpg"
        data-speed={3}
      >
        <div className="container">
          <div className="row content start-count">
            <div className="col col-sm-3 col-xs-6">
              <div className="grid">
                <div className="circle-data">
                  <span className="counter" data-count={12}>
                    00
                  </span>
                </div>
                <h3>Years of Experience</h3>
              </div>
            </div>
            <div className="col col-sm-3 col-xs-6">
              <div className="grid">
                <div className="circle-data">
                  <span className="counter" data-count={14}>
                    00
                  </span>
                </div>
                <h3>Thousands Volunteers</h3>
              </div>
            </div>
            <div className="col col-sm-3 col-xs-6">
              <div className="grid">
                <div className="circle-data">
                  <span className="counter" data-count={23}>
                    00
                  </span>
                </div>
                <h3>Worldwide Offices</h3>
              </div>
            </div>
            <div className="col col-sm-3 col-xs-6">
              <div className="grid">
                <div className="circle-data">
                  <span className="counter" data-count={97}>
                    00
                  </span>
                </div>
                <h3>Assisting Organizations</h3>
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

export default FunFact;
