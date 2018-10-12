import React from 'react';

class CausesList extends React.Component {
  render() {
    return (
      <section className="causes-list-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-md-9">
              <div className="causes-list-box-wrapper">
                <div className="causes-list-box">
                  <div className="img-holder">
                    <img
                      src="/static/causes-list/img-1.jpg"
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <h3>
                      <a href="#">Fresh water for people</a>
                    </h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-s1"
                        data-percent={55}
                      />
                    </div>
                    <h4>
                      Raised: <span>$52,872</span> / $70,000
                    </h4>
                    <p>
                      Iste natus error sit voluptatem accusantium dolo remque
                      laudantium.
                    </p>
                    <a href="#" className="btn theme-btn">
                      Donate now
                    </a>
                  </div>
                </div>
                <div className="causes-list-box">
                  <div className="img-holder">
                    <img
                      src="/static/causes-list/img-2.jpg"
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <h3>
                      <a href="#">Save the plnaet, Go green</a>
                    </h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-s1"
                        data-percent={55}
                      />
                    </div>
                    <h4>
                      Raised: <span>$52,872</span> / $70,000
                    </h4>
                    <p>
                      Iste natus error sit voluptatem accusantium dolo remque
                      laudantium.
                    </p>
                    <a href="#" className="btn theme-btn">
                      Donate now
                    </a>
                  </div>
                </div>
                <div className="causes-list-box">
                  <div className="img-holder">
                    <img
                      src="/static/causes-list/img-3.jpg"
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <h3>
                      <a href="#">Building home for homeless</a>
                    </h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-s1"
                        data-percent={55}
                      />
                    </div>
                    <h4>
                      Raised: <span>$52,872</span> / $70,000
                    </h4>
                    <p>
                      Iste natus error sit voluptatem accusantium dolo remque
                      laudantium.
                    </p>
                    <a href="#" className="btn theme-btn">
                      Donate now
                    </a>
                  </div>
                </div>
                <div className="causes-list-box">
                  <div className="img-holder">
                    <img
                      src="/static/causes-list/img-4.jpg"
                      className="img img-responsive"
                    />
                  </div>
                  <div className="details">
                    <h3>
                      <a href="#">Raising fund for cyclone affected</a>
                    </h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-s1"
                        data-percent={55}
                      />
                    </div>
                    <h4>
                      Raised: <span>$52,872</span> / $70,000
                    </h4>
                    <p>
                      Iste natus error sit voluptatem accusantium dolo remque
                      laudantium.
                    </p>
                    <a href="#" className="btn theme-btn">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="load-more">
                <a href="#" className="btn theme-btn-s3">
                  <i className="fa fa-spinner" /> Load more
                </a>
              </div> */}
            </div>
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
                          src="/static/events-nearby/img-1.jpg"
                          className="img img-responsive"
                        />
                      </a>
                    </div>
                    <div className="event-info">
                      <h4>
                        <a href="#">Cure Our World</a>
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
                  <div className="event-list">
                    <div className="event-pic">
                      <a href="#">
                        <img
                          src="/static/events-nearby/img-2.jpg"
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

export default CausesList;
