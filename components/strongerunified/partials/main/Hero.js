import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero hero-slider-wrapper hero-slider-s1">
        <div className="hero-slider">
          <div className="slide">
            <img src="/static/slider/slide-1.jpg" className="slider-bg" />
            <div className="container">
              <div className="row">
                <div className="col col-xs-12 slide-caption">
                  <h1>We can’t do it alone without your support</h1>
                  <p>
                    Help us to eradicate poverty around the world and save the
                    million of lives from unwanted demises. Millions of innocent
                    lives we lost every year for malnutritions.
                  </p>
                  <a href="#" className="btn theme-btn">
                    Join us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide row">
            <img src="/static/slider/slide-2.jpg" className="slider-bg" />
            <div className="container">
              <div className="row">
                <div className="col col-xs-12 slide-caption">
                  <h1>We can’t do it alone without your support</h1>
                  <p>
                    Help us to eradicate poverty around the world and save the
                    million of lives from unwanted demises. Millions of innocent
                    lives we lost every year for malnutritions.
                  </p>
                  <a href="#" className="btn theme-btn">
                    Join us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
