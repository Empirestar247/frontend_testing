import React from "react";

function Footer() {
  return (
    <footer className="site-footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-gallery">
            <h3>Gallery</h3>
            <div className="d-flex justify-content-between">
              <img
                src="image1.jpg"
                alt="Gallery Image 1"
                className="img-fluid"
              />
              <img
                src="image2.jpg"
                alt="Gallery Image 2"
                className="img-fluid"
              />
              <img
                src="image3.jpg"
                alt="Gallery Image 3"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-4 footer-social">
            <h3>Follow Us</h3>
            <a
              href="https://facebook.com"
              className="btn btn-outline-light btn-floating m-1"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="btn btn-outline-light btn-floating m-1"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="btn btn-outline-light btn-floating m-1"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
