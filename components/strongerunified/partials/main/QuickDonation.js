import React from 'react';

class QuickDonation extends React.Component {
  render() {
    return (
      <section className="quick-donation-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-md-10 col-md-offset-1">
              <h2>Quick donation</h2>
              <div className="donation-form">
                <form action="#" className="form">
                  <div>
                    <select className="form-control">
                      <option disabled> - Select Causes - </option>
                      <option>Case 1</option>
                      <option>Case 2</option>
                      <option>Case 3</option>
                      <option>Case 4</option>
                    </select>
                  </div>
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
                      <input type="radio" id="c3" name="c1" defaultChecked />
                      <label htmlFor="c3">
                        <span className="check-icon" />{' '}
                        <span className="amount">$500</span>
                      </label>
                    </div>
                    <div className="box">
                      <input type="radio" id="c4" name="c1" />
                      <label htmlFor="c4">
                        <span className="check-icon" />{' '}
                        <span className="amount">$1000</span>
                      </label>
                    </div>
                  </div>
                  <div className="donate-as-anonymous">
                    <input type="checkbox" id="d1" />
                    <label htmlFor="d1"> Donate as anonymous</label>
                  </div>
                  <div className="donate-btn">
                    <button className="btn theme-btn" type="submit">
                      Donate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>{' '}
          {}
        </div>{' '}
        {}
      </section>
    );
  }
}

export default QuickDonation;
