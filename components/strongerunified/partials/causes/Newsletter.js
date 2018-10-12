import React from 'react';

class Newsletter extends React.Component {
  render() {
    return (
      <section className="newsletter">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-5 children-holder children-holder-s2" />
            <div className="col col-md-7 subscribe">
              <h3>Subscribe us</h3>
              <p>
                For <span>news</span> updates and promotional
                <span>events</span>
              </p>
              <form action="#">
                <div>
                  <input
                    className="form-control"
                    type="email"
                    required
                    placeholder="email address"
                  />
                  <button type="submit" className="btn theme-btn">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="pluses">
                <i className="fa fa-plus" />
                <i className="fa fa-plus" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
