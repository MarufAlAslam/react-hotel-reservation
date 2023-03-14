import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery";

const Contact = () => {
  return (
    <main>
      <section className="contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  Contact Us
                </p>
              </h3>
              <form action="">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  Our Location
                </p>
              </h3>
              <div className="map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1422000000003!2d85.3333333150075!3d27.71666698280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f0f5c5b8d7%3A0x6b8e3b2b2b3b3b3b!2s
                            Kathmandu%20University%20School%20of%20Engineering!5e0!3m2!1sen!2snp!4v1629200000000!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  Gallery
                </p>
              </h3>
              <Gallery />
            </div>
            <div className="col-md-6 p-3">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  Contact Information
                </p>
              </h3>
              <p className="lead">
                Email:{" "}
                <a
                  href="mailto:test@test.com"
                  className="test-primary text-decoration-none"
                >
                  test@test.com
                </a>
              </p>
              <p className="lead">
                Phone:{" "}
                <a
                  href="tel:123456789"
                  className="test-primary text-decoration-none"
                >
                  123456789
                </a>
              </p>
              <p className="lead">
                Address:{" "}
                <Link
                  to="https://goo.gl/maps/4Z5Z9Z9Z9Z9Z9Z9Z9"
                  className="test-primary text-decoration-none"
                  target="_blank"
                >
                  Kathmandu, Nepal
                </Link>
              </p>
              <p className="lead">
                Website:{" "}
                <Link
                  to="https://www.google.com/"
                  className="test-primary text-decoration-none"
                  target="_blank"
                >
                  www.google.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
