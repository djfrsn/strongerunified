import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header header-style1">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 col-md-7 col-sm-6 info">
                <ul>
                  <li>
                    <i className="fi flaticon-envelope-of-white-paper" />
                    mail@charityworld.com
                  </li>
                  <li>
                    <i className="fi flaticon-cellphone" /> +123 (456) 789 012
                  </li>
                </ul>
              </div>
              <div className="col col-lg-4 col-md-5 col-sm-6">
                <div className="social-follow-donate">
                  <div className="social-follow">
                    <span>Follow us</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="donate">
                    <a href="#">
                      <i className="fi flaticon-money-4" /> Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="open-btn">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/static/logo.png" />
                </a>
              </Link>
            </div>
            <div
              id="navbar"
              className="navbar-collapse collapse navigation-menu-holder navbar-right"
            >
              <button className="close-navbar">
                <i className="fa fa-close" />
              </button>
              <ul className="nav navbar-nav">
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li className="sub-menu">
                  <a href="#">Causes</a>
                  <ul>
                    <li>
                      <a href="cause-single.html">Causes 1</a>
                    </li>
                    <li>
                      <a href="cause-single.html">Causes 2</a>
                    </li>
                    <li>
                      <Link href="/about">
                        <a href="causes-list.html">Current Causes</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu">
                  <a href="#">Events</a>
                  <ul>
                    <li>
                      <Link href="/currentevents">
                        <a>Current Events</a>
                      </Link>
                    </li>
                    <li>
                      <a href="event-single.html">Event 1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
