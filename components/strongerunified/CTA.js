import React from 'react';

class CTA extends React.Component {
  render() {
    return (
      <section
        className="cta parallax"
        data-bg-image="/static/cta-bg.jpg"
        data-speed={3}
      >
        <div className="container">
          <div className="row">
            <div className="col col-md-8 left-col">
              <h3>
                Subscribe to our newsletter for <span>news</span> and{' '}
                <span>updates</span>
              </h3>
            </div>
            <div className="col col-md-4">
              <form className="form">
                <div className="text-fild">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email address.."
                  />
                  <button type="submit" className="submit-btn">
                    <i className="fa fa-arrow-right" />
                  </button>
                </div>
                <div className="notify-message">
                  <input type="checkbox" id="notify" />
                  <label htmlFor="notify">
                    {' '}
                    Notify me only about the updates
                  </label>
                </div>
              </form>
            </div>
          </div>{' '}
          {}
        </div>{' '}
        {}
      </section>
    );
  }
}

export default CTA;
