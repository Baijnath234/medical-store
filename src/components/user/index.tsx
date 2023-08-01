import React from "react";
import "../user/index.css";
import background1 from "../../images/background2.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.png";

const index = () => {
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <section>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="main-content1">
                <div className="row">
                  <div className="col-md-6 order-1">
                    <div className="header">
                      <button className="btn-btn-danger">Alert</button>
                      <a href="##">
                        Learn how the prescription drug law impacts Medicare.
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6 order-2">
                    <div className="from" style={{ marginLeft: "450px" }}>
                      <form className="d-flex" role="search">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-content2">
          <div className="main-container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-5 ">
                <img
                  className="images"
                  src={background1}
                  alt=""
                  style={{ width: "900px", height: "600px" }}
                />
              </div>
              <div className="col-md-5 d-flex align-items-center justify-content-center">
                <h1>
                  Welcome to <span>Medicare..</span>
                </h1>
              </div>
            </div>
            <div className="second-container">
              <div className="card">
                <h3>Log in or create an account</h3>
                <p>Access your information anytime, anywhere</p>
                <button>Login/Create Account</button>
              </div>
              <div className="card">
                <h3>Find health & drug plans</h3>
                <p>
                  Find & compare plans <br />
                  in your area
                </p>
                <button>Find Plans Now</button>
              </div>
              <div className="card">
                <h3>Find a Doctor and care-taker</h3>
                <p>
                  Compare hospitals, nursing <br /> homes, & more
                </p>
                <button>Find a Provider</button>
              </div>
              <div className="card">
                <h3>Talk to us and find your solution</h3>
                <p>Contact Medicare & other helpful resources</p>
                <button>Get Help</button>
              </div>
            </div>
          </div>
        </section>

        <section className="main-content3">
          <div className="main-container2 ">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row">
                  <div className="col-md-8">
                    <img src={image1} alt="" />
                  </div>
                  <div className="col-md-4 ">
                    <h2>New! Medicare Part B insulin coverage change</h2>
                    <p>
                      The cost of a one-month supply of each Part B-covered
                      insulin is now capped at $35, and you don't have to pay a
                      deductible for insulin.{" "}
                    </p>
                    <button>Learn About Self Care</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="main-container2 ">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row">
                  <div className="col-md-8">
                    <img src={image2} alt="" />
                  </div>
                  <div className="col-md-4 ">
                    <h2>Getting started with Medicare is easy</h2>
                    <p>
                      The cost of a one-month supply of each Part B-covered
                      insulin is now capped at $35, and you don't have to pay a
                      deductible for insulin.{" "}
                    </p>
                    <button>Learn About Self Care</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="main-container2 ">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row">
                  <div className="col-md-8">
                    <img src={image2} alt="" />
                  </div>
                  <div className="col-md-4 ">
                    <h2>New! Medicare Part B insulin coverage change</h2>
                    <p>
                      The cost of a one-month supply of each Part B-covered
                      insulin is now capped at $35, and you don't have to pay a
                      deductible for insulin.{" "}
                    </p>
                    <button>Learn About Self Care</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="main-container2 ">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card">
                      <div className="main-card row">
                        <div className="col-10 mx-auto">
                          <div className="row">
                            <div className="col-md-7 ">
                              <form>
                                <label htmlFor="">Name:</label>
                                <input
                                  type="text"
                                  placeholder="Enter Your Full Name"
                                />
                                <label htmlFor="">Email:</label>
                                <input
                                  type="email"
                                  placeholder="Enter Your Email Address"
                                />
                                <label htmlFor="">Contact Number:</label>
                                <input
                                  type="number"
                                  placeholder="Enter Your Contact number"
                                />
                                <label htmlFor="">Date of Birth:</label>
                                <input
                                  type="number"
                                  placeholder="Enter Your DOB"
                                />
                                <label htmlFor="">Age:</label>
                                <input
                                  type="number"
                                  placeholder="Enter Your Age"
                                />

                                <button>Submit</button>
                              </form>
                            </div>
                            <div className="col-md-3 ">
                              <div>
                                <img
                                  className="background-image"
                                  src={image3}
                                  alt="images"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 email-details">
                    <h2>Get important news & updates</h2>
                    <p>
                      Get reminders about open enrollment, ways to save costs,
                      and more.
                    </p>
                    <form>
                      <label htmlFor="ENTER YOUR EMAIL ADDRESS">
                        ENTER YOUR EMAIL ADDRESS
                      </label>
                      <input type="email" placeholder="name@example.com" />
                      <div className="checkbox">
                        <input type="checkbox" />
                        By checking this box, you consent to our{" "}
                        <a href="##">data privacy policy.</a>
                      </div>
                      <button>Next Step</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default index;
