import React from 'react';

class Partners extends React.Component {
  render() {
    return (
      <section className="partners section-padding">
        <div className="container">
          <div className="row section-title">
            <h2>Our Proud Partners</h2>
          </div>
          <div className="row">
            <div className="col col-xs-12">
              <div className="partners-grids partners-slider">
                <div className="grid">
                  <img
                    src="/static/partners/img-1.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="grid">
                  <img
                    src="/static/partners/img-2.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="grid">
                  <img
                    src="/static/partners/img-3.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="grid">
                  <img
                    src="/static/partners/img-4.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="grid">
                  <img
                    src="/static/partners/img-5.jpg"
                    className="img img-responsive"
                  />
                </div>
                <div className="grid">
                  <img
                    src="/static/partners/img-1.jpg"
                    className="img img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
