import React from 'react';
import Link from 'next/link';
import { keyContent, text, url, setLinkTarget } from '../../helpers/prismic';

class Header extends React.Component {
  render() {
    const {
      mailto_email,
      phone_number,
      donate_url,
      donate_label,
      logo_url,
      nav,
      social_icon_label,
      social_icons
    } = keyContent(this.props.content);
    console.log(nav);

    return (
      <header className="site-header header-style1">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 col-md-7 col-sm-6 info">
                <ul>
                  <li>
                    <i className="fi flaticon-envelope-of-white-paper" />
                    {text(mailto_email)}
                  </li>
                  <li>
                    <i className="fi flaticon-cellphone" />
                    {text(phone_number)}
                  </li>
                </ul>
              </div>
              <div className="col col-lg-4 col-md-5 col-sm-6">
                <div className="social-follow-donate">
                  <div className="social-follow">
                    <span>{text(social_icon_label)}</span>
                    <ul className="social-links">
                      {social_icons.map((icon, key) => {
                        return (
                          <li key={key}>
                            <Link href={url(icon.social_icon_url)}>
                              <a target={setLinkTarget(icon.social_icon_url)}>
                                <i
                                  className={`fa ${text(
                                    icon.social_icon_name
                                  )}`}
                                />
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="donate">
                    <Link href={url(donate_url)} prefetch={true}>
                      <a>
                        <i className="fi flaticon-money-4" />
                        {text(donate_label)}
                      </a>
                    </Link>
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
              <Link href="/" prefetch={true}>
                <a className="navbar-brand">
                  <img src={url(logo_url)} />
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
