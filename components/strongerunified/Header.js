import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header header-style1">
        {}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 col-md-7 col-sm-6 info">
                <ul>
                  <li>
                    <i className="fi flaticon-envelope-of-white-paper" />{' '}
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
            </div>{' '}
            {}
          </div>{' '}
          {}
        </div>
        {}
        {}
        <nav className="navigation navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="open-btn">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="/static/logo.png" />
              </a>
            </div>
            <div
              id="navbar"
              className="navbar-collapse collapse navigation-menu-holder navbar-right"
            >
              <button className="close-navbar">
                <i className="fa fa-close" />
              </button>
              <ul className="nav navbar-nav">
                <li className="sub-menu">
                  <a href="#">Home</a>
                  <ul>
                    <li className="current">
                      <a href="index.html">Home style 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home style 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home style 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="sub-menu">
                  <a href="#">Causes</a>
                  <ul>
                    <li>
                      <a href="causes.html">Causes style 1</a>
                    </li>
                    <li>
                      <a href="causes-s2.html">Causes style 2</a>
                    </li>
                    <li>
                      <a href="causes-list.html">Causes list</a>
                    </li>
                    <li>
                      <a href="cause-single.html">Cause single</a>
                    </li>
                    <li className="sub-sub-menu">
                      <a href="#">Third level</a>
                      <ul>
                        <li>
                          <a href="#">Third level</a>
                        </li>
                        <li>
                          <a href="#">Third level</a>
                        </li>
                        <li>
                          <a href="#">Third level</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu">
                  <a href="#">Events</a>
                  <ul>
                    <li>
                      <a href="events.html">Events style 1</a>
                    </li>
                    <li>
                      <a href="event-single.html">Event single</a>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu">
                  <a href="#">Shop</a>
                  <ul>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Shop left sidebar</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Shop right sidebar</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Shop details</a>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {}
            <div className="search-mini-cart">
              <div className="search header-search-area">
                <a href="#" className="open-btn">
                  <i className="fi flaticon-magnifying-glass" />
                </a>
                <div className="header-search-form">
                  <form className="form">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                    </div>
                    <button type="submit" className="btn">
                      <i className="fi flaticon-magnifying-glass" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="mini-cart-wrapper">
                <div className="mini-cart-btn">
                  <a href="#">
                    <i className="fi flaticon-paper-bag" />
                    <span className="item-count">21</span>
                  </a>
                </div>
                <ul className="mini-cart">
                  <li className="item">
                    <div className="product-img">
                      <img src="/static/shop/thumb/img-1.jpg" />
                    </div>
                    <div className="product-details">
                      <h6>Name of the product</h6>
                      <p>$255.5</p>
                      <a href="#">
                        <i className="fa fa-trash-o" />
                      </a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="product-img">
                      <img src="/static/shop/thumb/img-2.jpg" />
                    </div>
                    <div className="product-details">
                      <h6>Name of the product</h6>
                      <p>$155.5</p>
                      <a href="#">
                        <i className="fa fa-trash-o" />
                      </a>
                    </div>
                  </li>
                  <li className="minicart-price-total">
                    <div className="price-total">
                      <span className="label-price-total">Subtotal</span>
                      <div className="price-total-w">
                        <span>$255.5</span>
                      </div>
                    </div>
                    <div className="checkout-btn">
                      <a className="btn theme-btn">Proceed to checkout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {}
        </nav>{' '}
        {}
      </header>
    );
  }
}

export default Header;
