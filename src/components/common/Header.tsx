import React from "react";
import "./header.css";
import logo from "../../images/logo-1.png";
import { AiFillWechat } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import flag from '../../images/india-flag.png'

const Header = () => {
  return (
    <>
      <section className="section-1">
        <nav
          className="nav">
          <p><img src={flag} alt="" />
            An official website of the India government Here's how you know?
            <a href="##"> Click here</a>
          </p>
        </nav>
    

      <section >
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="##">
              <img src={logo} alt="images" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="##"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Basic
                  </a>
                  <ul className="dropdown-menu" style={{ width: "600px" }}>
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="row">
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                learn
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Get started with Medicare
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Medicare costs
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Your Medicare rights
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Reporting fraud & abuse
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Reporting fraud & abuse
                              </a>
                            </li>
                          </div>
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                Resources
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Talk to someone
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Forms, publications, & mailings
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                “Medicare & You” handbook
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Advance directives & long-term care
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="##"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Health & Drug Plans
                  </a>
                  <ul className="dropdown-menu" style={{ width: "600px" }}>
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="row">
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                Find & Compare
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Find health & drug plans
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Compare coverage options
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Find a Medicare Supplement <br /> Insurance
                                (Medigap) policy
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Looking for your health & <br />
                                drug plan information?
                              </a>
                            </li>
                          </div>
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                Learn
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Medicare health plans
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Medicare Supplemental Insurance <br />
                                (Medigap)
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                How plans work with other coverage
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Drug coverage (Part D)
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Log in/create an account
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="##"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Providers & Services
                  </a>
                  <ul className="dropdown-menu" style={{ width: "600px" }}>
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="row">
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                learn
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Find care providers
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Find medical equipment & <br />
                                suppliers
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Compare procedure costs
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                What Medicare covers
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Claims & appeals
                              </a>
                            </li>
                          </div>
                          <div className="col-md-5">
                            <li>
                              <a className="dropdown-item" href="##">
                                My Information
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Looking for your providers & <br /> services
                                information?
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="##">
                                Log in/create an account
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
              <div className="vertical-line"></div>
              <div className="link-items">
                <li className="nav-link">
                  <a className="icon1" href="##">
                    {<AiFillWechat />} <span>Chat</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a className="icon1" href="##">
                    {<FiLogIn />} <span> LogIn</span>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </section>

      
      </section>
    </>
  );
};

export default Header;

