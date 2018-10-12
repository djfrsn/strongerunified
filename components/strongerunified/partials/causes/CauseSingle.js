import React from 'react';

class CauseSingle extends React.Component {
  render() {
    return (
      <section className="causes-single-wrapper section-padding">
        <div className="container">
          <div className="row content">
            <div className="col col-md-9">
              <div className="causes-single">
                <div className="img-holder">
                  <img
                    src="/static/cause-single/img-1.jpg"
                    alt
                    className="img img-responsive"
                  />
                </div>
                <div className="causes-list-box">
                  <div className="title">
                    <h3>Fresh water for people</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-s1"
                        data-percent={55}
                      />
                    </div>
                    <h4>
                      Raised: <span>$52,872</span> / $70,000
                    </h4>
                  </div>
                  <div className="inner-details">
                    <p>
                      Iste natus error sit voluptatem accusantium dolo remque
                      laudantium. perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt ex plicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia con se quuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                      {' '}
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-check" /> Aspernatur aut odit aut
                        fugit
                      </li>
                      <li>
                        <i className="fa fa-check" /> Nventore veritatis et
                        quasi architecto
                      </li>
                      <li>
                        <i className="fa fa-check" /> Con se quuntur magni
                        dolores
                      </li>
                    </ul>
                    <div className="donation-form quick-donation-section">
                      <form action="#" className="form">
                        <div className="donate-list">
                          <div className="box">
                            <input type="radio" id="c1" name="c1" />
                            <label htmlFor="c1">
                              <span className="check-icon" />{' '}
                              <span className="amount">$100</span>
                            </label>
                          </div>
                          <div className="box">
                            <input type="radio" id="c2" name="c1" />
                            <label htmlFor="c2">
                              <span className="check-icon" />{' '}
                              <span className="amount">$200</span>
                            </label>
                          </div>
                          <div className="box active">
                            <input
                              type="radio"
                              id="c3"
                              name="c1"
                              defaultChecked
                            />
                            <label htmlFor="c3">
                              <span className="check-icon" />{' '}
                              <span className="amount">$500</span>
                            </label>
                          </div>
                        </div>
                        <div className="enter-amount">
                          <input type="text" placeholder="-- Enter Amount --" />
                        </div>
                        <div className="donate-btn">
                          <button className="btn theme-btn" type="submit">
                            Donate
                          </button>
                        </div>
                      </form>
                    </div>{' '}
                    {}
                  </div>{' '}
                  {}
                </div>{' '}
                {}
              </div>{' '}
              {}
            </div>{' '}
            {}
            <div className="col col-md-3 sidebar-wrapper">
              <div className="sidebar">
                <div className="widget search-widget">
                  <form action="#" className="form">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        required
                      />
                      <button type="submit" className="btn">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="widget recent-post">
                  <h3>Recent post</h3>
                  <div>
                    <h4>
                      <a href="#">Education program in Uganda</a>
                    </h4>
                    <a href="#" className="date">
                      November 26, 2016
                    </a>
                  </div>
                  <div>
                    <h4>
                      <a href="#">War kids in Syria</a>
                    </h4>
                    <a href="#" className="date">
                      November 26, 2016
                    </a>
                  </div>
                  <div>
                    <h4>
                      <a href="#">African water crisis : Children and women</a>
                    </h4>
                    <a href="#" className="date">
                      November 26, 2016
                    </a>
                  </div>
                </div>
                <div className="widget recent-causes">
                  <h3>Recent causes</h3>
                  <div>
                    <h4>
                      <a href="#">Blood Donation in virginia</a>
                    </h4>
                    <p className="remaing-date">22 days remaing</p>
                  </div>
                  <div>
                    <h4>
                      <a href="#">Boston orphanage opening</a>
                    </h4>
                    <p className="remaing-date">22 days remaing</p>
                  </div>
                  <div>
                    <h4>
                      <a href="#">Hair for cancer</a>
                    </h4>
                    <p className="remaing-date">22 days remaing</p>
                  </div>
                </div>
                <div className="widget recent-events-widget">
                  <h3>Events nearby</h3>
                  <div className="event-list">
                    <div className="event-pic">
                      <a href="#">
                        <img
                          src="images/events-nearby/img-2.jpg"
                          alt
                          className="img img-responsive"
                        />
                      </a>
                    </div>
                    <div className="event-info">
                      <h4>
                        <a href="#">Towards Humanity</a>
                      </h4>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calender" /> 17 March, 2017
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-map-marker" /> 221B, Baker
                            Street
                          </a>
                        </li>
                      </ul>
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

export default CauseSingle;
