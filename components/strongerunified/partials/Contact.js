import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact-section-wrapper" id="contact">
        <div className="container contact-block">
          <div className="row">
            <div className="col col-xs-12">
              <h2>Contact us for any kind of query. We are available 24/7</h2>
              <div className="contact-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <ul>
                  <li>
                    <span className="icon">
                      <i className="fa fa-map-marker" />
                    </span>
                    911 Estonia Bvd, Baskervile, <br />
                    Philladelphia, PA-1234
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-phone-square" />
                    </span>
                    +1 617 572 2000
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-envelope" />
                    </span>
                    support@consult.com
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa fa-map-o" />
                    </span>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7898246149844!2d89.5601340147084!3d22.810250485060976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901d89110f01%3A0x8dbefa2e360efc60!2z4Kaw4Kef4KeH4KayIOCmruCni-CnnA!5e0!3m2!1sbn!2sbd!4v1486012212575"
                      className="view-map-btn map-link"
                    >
                      View Location In Map
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact-form">
                <form className="form" id="contact-form">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone no.."
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="write"
                      defaultValue={""}
                    />
                  </div>
                  <div className="submit-btn">
                    <div className="btn-wrapper">
                      <button type="submit" className="btn theme-btn">
                        Submit
                      </button>
                      <span id="loader">
                        <img
                          src="images/contact-ajax-loader.gif"
                          alt="Loader"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-12 error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error">
                      {" "}
                      Error occurred while sending email. Please try again
                      later.{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {}
        </div>{" "}
        {}
      </section>
    );
  }
}

export default Contact;
