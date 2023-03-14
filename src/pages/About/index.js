import React from "react";
import Gallery from "../../components/Gallery";

import hotel from "../../assets/img/hotel.jpg";
import hotel2 from "../../assets/img/hotel-2.jpg";
import chairperson from "../../assets/img/chairperson.jpg";

const About = () => {
  return (
    <main>
      {/* <!-- about us --> */}
      <section className="about py-5">
        <div className="container">
          <div className="text-center">
            <h3 className="text-decoration-underline">
              <a
                href=" about.html"
                className="text-uppercase text-dark text-decoration-none ls-3 text-muted"
              >
                About Our Hotel
              </a>
            </h3>
          </div>

          <div className="row mt-5">
            <div className="col-md-5 p-3">
              <img src={hotel} className="img-fluid w-100" alt="" />
            </div>
            <div className="col-md-7 p-3">
              <h4>Hotel Name</h4>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-7 p-3">
              <h4>Success History</h4>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
            </div>
            <div className="col-md-5 p-3">
              <img src={hotel2} className="img-fluid w-100" alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 p-3">
              <img src={chairperson} className="img-fluid w-100" alt="" />
            </div>
            <div className="col-md-7 p-3">
              <h4>Chairperson's Message</h4>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                veniam, dolor quam ipsam amet doloremque omnis molestias nemo
                dignissimos ut sunt laboriosam pariatur mollitia accusantium!
                Eveniet voluptatem, exercitationem voluptates optio nobis ipsum
                at voluptate odio quasi ad rerum
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about us --> */}

      {/* <!-- our gallery --> */}
      <section className="gallery py-5">
        <div className="container">
          <h3 className=" mb-4">
            <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
              Gallery
            </p>
          </h3>
          <Gallery />
        </div>
      </section>
      {/* <!-- our gallery --> */}
    </main>
  );
};

export default About;
