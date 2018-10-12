import React from "react";

class EventSingle extends React.Component {
  render() {
    return (
      <section className="event-single-wrapper section-padding">
        <div className="container">
          <div className="row content">
            <div className="col col-md-9 events-single">
              <div className="event-single-date-slider">
                <div className="date">
                  <span>
                    <i className="fa fa-calendar" /> 18 april, 2018
                  </span>
                </div>
                <div className="event-single-slider">
                  <div>
                    <img src="images/event-single/img-1.jpg" alt />
                  </div>
                  <div>
                    <img src="images/event-single/img-1.jpg" alt />
                  </div>
                  <div>
                    <img src="images/event-single/img-1.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="event-details">
                <h2>Charity Run for Cancer Fighting People</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit volupt
                  atem accusantium doloremque laudantium. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
                <p>
                  Ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <ul className="event-info">
                  <li>
                    <i className="fa fa-map-marker" /> Heemestede, Netherlands
                  </li>
                  <li>
                    <i className="fa fa-calendar" /> April 18, 2018
                  </li>
                  <li>
                    <i className="fa fa-clock-o" /> 9 am - 5 pm
                  </li>
                </ul>
              </div>
              <div className="event-location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12419.336156809874!2d-77.04554466716324!3d38.9049103231097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b78e03b73d8b%3A0xadb9a66c8c4d507e!2sDowntown%2C+Washington%2C+DC%2C+USA!5e0!3m2!1sbn!2sbd!4v1492576211812"
                  allowFullScreen
                />
              </div>
              <div className="join-share">
                <a href="#" className="btn theme-btn-s3">
                  Join event
                </a>
                <div className="share">
                  <span>SHARE:</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
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

export default EventSingle;
