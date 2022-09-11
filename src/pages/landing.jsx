import React from "react";
import ReactSlider from "react-slider";
import Slider from "../components/slider";
import StockLength from "../components/stockLength";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

const Landing = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="d-flex align-items-center">
            <div className="mb-1">
              <img alt="" width="40px" src="./images/brand.png" />
            </div>
            <h3 className="ms-2 brand">Wealthharmony</h3>
          </div>
          <ul className="nav-list d-flex">
            <li className="nav-item hide-mobile">Invest</li>
            <li className="nav-item hide-mobile">Cash</li>
            <li className="nav-item hide-mobile">Borrow</li>
            <li className="nav-item">
              <button className="btn btn-login">Log In</button>
            </li>
          </ul>
        </nav>
        <section className="mt-4 invest-header container d-flex flex-row justify-content-between align-items-center flex-wrap">
          <div>
            <h3 className="header-text">
              Smart Plans, Smart investment <br />
              Nurture the future today
              <br />
              and be financially strong
            </h3>
            <h5 className="header-subtext mt-4">
              Wealthharmony offer you smart investment options, with <br />
              good returns, across a wide range of asset classes making <br />
              you’ll to earn more on your savings
            </h5>
            <div className="d-flex flex-row mt-5  headerbtn">
              <button className="btn btnstart">Get started</button>
            </div>
          </div>
          <div className="mobile pt-5 p-3 d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <i className="bi bi-list menu color-grey" />
              <h6 className="text-center">Dashboard</h6>
              <i className="bi bi-bell notify color-grey" />
            </div>
            <div className="d-flex flex-row justify-content-between mt-5">
              <div>
                <h6 className="mobile-h6">$90,048.7</h6>
                <p className="color-grey font-small">Cash</p>
              </div>
              <div>
                <h6 className="mobile-h6">$100,048.7</h6>
                <p className="color-grey font-small">Investment</p>
              </div>
            </div>
            <div className="mobile-graph" />
            <div className="d-flex justify-content-between mb-2">
              <small className="color-grey font-smaller">today</small>
              <small className="color-grey font-smaller">Age 75</small>
            </div>
            <div className="mb-2 mobile-nav mt-auto d-flex flex-row justify-content-between px-2">
              <i
                style={{ color: "orange" }}
                className="bi bi-house-door color-grey"
              />
              <i className="bi bi-search color-grey" />
              <i className="bi bi-envelope-open color-grey" />
              <i className="bi bi-person color-grey" />
            </div>
          </div>
        </section>
        <div className="logo-section d-flex flex-row flex-wrap justify-content-around container">
          <div className="text-center">
            <h4>
              +
              <CountUp duration={10} end={50865} />
            </h4>
            <h5 className="text-muted">Trusted clients</h5>
          </div>
          <div className="text-center">
            <h4>
              +
              <CountUp decimals={3} duration={10} end={52.85} />B
            </h4>
            <h5 className="text-muted">Assests managed</h5>
          </div>
          <div className="text-center">
            <h4>
              <CountUp decimals={2} duration={10} end={4.8} />*
            </h4>
            <h5 className="text-muted">Apple store ratings</h5>
          </div>
          <div className="text-center">
            <h4>
              +
              <CountUp duration={10} end={23000} />
            </h4>
            <h5 className="text-muted">Transactions</h5>
          </div>
          <div className="text-center">
            <h4>
              + <CountUp duration={10} end={300} />
            </h4>
            <h5 className="text-muted">Partners</h5>
          </div>
        </div>
      </header>
      <main className="main">
        <ScrollAnimation duration={2} animateIn="slideInUp">
          <section id="slider">
            <div className="container slider-main text-center pt-5 d-flex flex-row justify-content-between ">
              <Slider />
              <div className="hide-mobile col-6">
                <h6 className="text-white text-muted">Portfolio </h6>
                <h3 className="header-text2 text-white">
                  Start by Moving the sliders to set your risk tolerance. We’ll
                  do the rest.
                </h3>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <section id="services" className="container">
          <div className="services-header">
            <h5 className="sub-text">Our Services</h5>
            <h3 className="sub-text-big mt-4">
              We’re have different packages suited for every one,.
            </h3>
          </div>
          <div className="d-flex flex-row justify-content-center mt-5">
            <div className="col-12">
              <ScrollAnimation duration={2} animateIn="slideInDown ">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                  <div className="col-12 col-md-3 option1 p-3 md:m-3 ">
                    <div className="mt-4">
                      <h4>Starter</h4>
                      <h4 className="sub-text-mid mt-3">
                        Begin your investment journer with a cusomized
                        portfolio, small management fee as low as 0.3%
                      </h4>
                      <h6 className="mt-4">
                        Explore option <i className="bi bi-arrow-right mt-1" />
                      </h6>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 option2 p-3 md:m-3">
                    <div className="mt-4">
                      <h4>Economy</h4>
                      <h4 className="sub-text-mid mt-3">
                        You can get hands-on and manage your investments fund
                        your account ,with huge benefit
                      </h4>
                      <h6 className="mt-4">
                        Explore option <i className="bi bi-arrow-right mt-1" />
                      </h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 option3 p-3 md:m-2">
                    <div className="mt-4">
                      <h4>Standard</h4>
                      <h4 className="sub-text-mid mt-3">
                        you have access to dedicated support team made up of
                        seasoned advisors, especially reserved to offer help in
                        investments advice,
                      </h4>
                      <h6 className="mt-4">
                        Explore option <i className="bi bi-arrow-right mt-1" />
                      </h6>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div
            id="services-customers"
            className="d-flex flex-row flex-wrap justify-content-between align-items-center"
          >
            <div style={{ position: "relative" }}>
              <img alt="" className="manimg" src="./images/man.jpg" />
            </div>
            <div id="connect">
              <h4 className="text-mid">
                A portfolio that diversified across
                <br />a variety of asset classes.
              </h4>
              <ul className="p-0 mt-4 connect-list">
                <li>Wealthharmony builds portfolios that are broad</li>
                <li>We provide a technology experience to help you</li>
                <li>
                  A wide range of outcomes
                  <br /> are possible
                </li>
              </ul>
              <button className="btn btn-start mt-4">Start now</button>
            </div>
          </div>
          <div
            id="services-customers2"
            className="d-flex flex-row flex-wrap justify-content-between align-items-start"
          >
            <ScrollAnimation duration={2} animateIn="slideInLeft ">
              <div id="connect">
                <h4 className="text-mid">
                  We have a team of dedicated <br />
                  seasoned advisors, reserved to
                  <br />
                  help you with investments plans,
                </h4>
                <ul className="p-0 mt-3 connect-list2">
                  <li>We connect our customers with the best.</li>
                  <li>
                    When you create an account and are matched with a portfolio
                  </li>
                  <li>We match you with the right portfolio,</li>
                </ul>
                <button className="btn btn-start mt-4">Start now</button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn="slideInRight ">
              <div style={{ position: "relative" }}>
                <img alt="" className="lady" src="./images/lady.jpg" />
                <img width="200px" alt="" id="floatImg2" src="./images/graph.png" />
              </div>
            </ScrollAnimation>
          </div>
        </section>
        <section className="pt-5" id="wealthenterprise">
          <div className="container">
            <div className="d-flex flex-row justify-content-between">
              <h4>
                We offer you wider investment <br />
                options, with big returns
              </h4>
              <div className="hide-mobile">
                <i
                  style={{ color: "#ffffff", fontSize: 70 }}
                  className="bi bi-arrow-left-circle-fill"
                />
                <i
                  style={{ color: "#ffffff", fontSize: 70 }}
                  className="bi bi-arrow-right-circle-fill"
                />
              </div>
            </div>
            <div
              className="d-flex flex-row flex-wrap justify-content-around mt-5"
              id="productfeat"
            >
              <div className="card col-12 col-md-3 my-md-0 my-3">
                <div className="card-body pt-5 d-flex flex-column pb-4">
                  <p className="card-desc">
                    Provide answer to few questions, and we’ll build an
                    investment portfolio with your details on it. etc
                  </p>
                </div>
              </div>
              <div className="card col-12 col-md-3 my-md-0 my-3">
                <div className="card-body pt-5 d-flex flex-column pb-4">
                  <p className="card-desc">
                    A very important thing that determiness wealth of investors
                    is their inestment method
                  </p>
                </div>
              </div>
              <div className="card col-12 col-md-3 my-md-0 my-3">
                <div className="card-body pt-5 d-flex flex-column pb-4">
                  <p className="card-desc">
                    Using a recommended portfolio can generates savings that is
                    worth at least 4 times our charge,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Values">
          <div className="container">
            <div className="mt-5 d-flex flex-wrap flex-row justify-content-between ps-5">
              <ScrollAnimation duration={2} animateIn="slideInDown">
                <h2 className="faq-header">FAQs</h2>
              </ScrollAnimation>
              <ScrollAnimation duration={2} animateIn="slideInUp">
                <ul className="hide-mobile">
                  <li className="d-flex flex-row justify-content-between">
                    What type of investment returns should I expect?
                    <i className="bi bi-caret-down-fill" />
                  </li>
                  <li className="d-flex flex-row justify-content-between">
                    which portfolio is right for me and how do i select?
                    <i className="bi bi-caret-down-fill" />
                  </li>
                  <li className="d-flex flex-row justify-content-between">
                    How can i be sure my inestment is safe?
                    <i className="bi bi-caret-down-fill" />
                  </li>
                  <li className="d-flex flex-row justify-content-between">
                    what methods does Wealthharmony use
                    <i className="bi bi-caret-down-fill" />
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        <section id="welthservices">
          <div className="container">
            <div className="text-center">
              <h5 className="sub-text">Options</h5>
              <h4 className="sub-text-big">
                wealthharmony offer Investing that
                <br />
                accounts for your needs
              </h4>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center mt-5">
            <div className="col-11">
              <div className="d-flex flex-row flex-wrap justify-content-around">
                <div className="col-12 welthservicescard col-md-3">
                  <img alt="" width="100%" src="./images/Rectangle 1270.png" />
                  <div className="mt-4">
                    <h4>Retirement Investment</h4>
                    <h4 className="sub-text-mid mt-3">
                      Retirement planning starts with thinking about your
                      retirement goals and how long you have to meet them
                    </h4>
                  </div>
                </div>
                <div className="col-12 welthservicescard col-md-3">
                  <img alt="" width="100%" src="./images/Rectangle 1270.png" />
                  <div className="mt-4">
                    <h4>Education Ivestment</h4>
                    <h4 className="sub-text-mid mt-3">
                      An investment may also include spending money to improve
                      the quality of existing human resources in an organization
                      through education.
                    </h4>
                  </div>
                </div>
                <div className="col-12 welthservicescard col-md-3">
                <img alt="" width="100%" src="./images/Rectangle 1270.png" />
                  <div className="mt-4">
                    <h4>Investment for all</h4>
                    <h4 className="sub-text-mid mt-3">
                      A General Investment Account (or GIA) is a simple way to
                      hold investments outside of tax wrappers. such as pensions
                      or ISAs.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center row justify-content-center" id="loadmore">
            <button className="btn loadbtn">Read more</button>
          </div>
        </section>
        <section id="ramp">
          <div className="container ramp-main text-center pt-5">
            <h4 className="header-text">
              Invest faster with the Wealthharmony Cash Account.
            </h4>
            <form className="subscribe mt-5">
              <input className="p-2" placeholder="Enter email to start" />
              <button className="ms-3 btn-normal">Start now</button>
            </form>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-3 ps-3">
              <div className="d-flex">
                <div className="mb-1">
                  <img alt="" width="40px" src="./images/brand.png" />
                </div>
                <h3 className="ms-2 text-dark-big">Wealthharmony</h3>
              </div>
              <p className="text2 mt-5">
                By using this Wealthharmony,you agree to our Terms of Use and
                Privacy Policy. Wealthharmony informations depends on
                information from various sources, however we can not guarantee
                the genuiness and accuracy of that information.
              </p>
              <p className="text2 mt-5">All Right reserved</p>
            </div>
            <div className="col-3">
              <ul>
                <li>Investing</li>
                <li>Retirement</li>
                <li>Pricing</li>
                <li>College</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>Cash</li>
                <li>Borrow</li>
                <li>Atm Location</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>Learn</li>
                <li>Investing Guide</li>
                <li>Home Plans</li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
