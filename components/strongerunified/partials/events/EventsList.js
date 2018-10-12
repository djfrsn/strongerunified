import React from "react";

class EventsList extends React.Component {
  render() {
    return (
      <section className="events-list-wrapper section-padding">
        <div className="container">
          <div className="row content">
            <div className="col col-md-9 events-list">
              <div className="event-row">
                <div className="event-details">
                  <div className="date">
                    <span>
                      <i className="fa fa-calendar" /> 18 april, 2018
                    </span>
                  </div>
                  <h3>
                    <a href="#">Tibet Kids Cloth Donation</a>
                  </h3>
                  <ul className="event-info">
                    <li>
                      <i className="fa fa-clock-o" /> 09.00 am
                    </li>
                    <li>
                      <i className="fa fa-map-marker" /> 244 Fletcher Dr,
                      Gainesville, FL 32603
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="join-event">
                    Join event <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="event-pic">
                  <img src="images/events/img-1.jpg" alt />
                </div>
              </div>
              <div className="event-row">
                <div className="event-details">
                  <div className="date">
                    <span>
                      <i className="fa fa-calendar" /> 18 april, 2018
                    </span>
                  </div>
                  <h3>
                    <a href="#">Senior Citizen Facility Moving</a>
                  </h3>
                  <ul className="event-info">
                    <li>
                      <i className="fa fa-clock-o" /> 09.00 am
                    </li>
                    <li>
                      <i className="fa fa-map-marker" /> 244 Fletcher Dr,
                      Gainesville, FL 32603
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="join-event">
                    Join event <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="event-pic">
                  <img src="images/events/img-2.jpg" alt />
                </div>
              </div>
              <div className="event-row">
                <div className="event-details">
                  <div className="date">
                    <span>
                      <i className="fa fa-calendar" /> 18 april, 2018
                    </span>
                  </div>
                  <h3>
                    <a href="#">Summer Cloth Donation</a>
                  </h3>
                  <ul className="event-info">
                    <li>
                      <i className="fa fa-clock-o" /> 09.00 am
                    </li>
                    <li>
                      <i className="fa fa-map-marker" /> 244 Fletcher Dr,
                      Gainesville, FL 32603
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="join-event">
                    Join event <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="event-pic">
                  <img src="images/events/img-3.jpg" alt />
                </div>
              </div>
              <div className="event-row">
                <div className="event-details">
                  <div className="date">
                    <span>
                      <i className="fa fa-calendar" /> 18 april, 2018
                    </span>
                  </div>
                  <h3>
                    <a href="#">Free Check Up for Kids</a>
                  </h3>
                  <ul className="event-info">
                    <li>
                      <i className="fa fa-clock-o" /> 09.00 am
                    </li>
                    <li>
                      <i className="fa fa-map-marker" /> 244 Fletcher Dr,
                      Gainesville, FL 32603
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="join-event">
                    Join event <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="event-pic">
                  <img src="images/events/img-4.jpg" alt />
                </div>
              </div>
              <div className="load-more">
                <a href="#" className="btn theme-btn-s3">
                  <i className="fa fa-spinner" /> Load more
                </a>
              </div>
            </div>{" "}
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
                          src="images/events-nearby/img-1.jpg"
                          alt
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
              </div>{" "}
              {}
            </div>{" "}
            {}
          </div>{" "}
          {}
        </div>{" "}
        {}
      </section>
    );
  }
}

export default EventsList;
