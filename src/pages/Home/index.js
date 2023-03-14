import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <main>
      {/* <!-- hero --> */}
      <section className="hero">
        <div className="container">
          <div className="offer bg-white  d-inline-flex m-auto">
            <p className="mb-0 lead text-uppercase">
              <span className="bg-orange fw-bold d-inline-block p-3">
                Promo
              </span>
              <span className="d-inline-block p-3">
                Get 20% off on your first booking
              </span>
            </p>
          </div>

          {/* <!-- check availability --> */}
          <div className="availability mt-4">
            <form action="/reservation">
              <div className="card shadow border-0 rounded-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 p-4 m-auto">
                      <p>Check in</p>
                      <input
                        type="date"
                        className="form-control border-0 p-0"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-md-3 p-4 m-auto">
                      <p>Check Out</p>
                      <input
                        type="date"
                        className="form-control border-0 p-0"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-md-3 p-4 m-auto">
                      <p>Guests</p>
                      <input
                        type="text"
                        className="form-control border-0 p-0"
                        value="2"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-md-3 p-4 m-auto">
                      <p>
                        <p
                          id="promo"
                          className="btn p-0 text-primary text-decoration-none mb-0"
                          onClick={() => setVisible(!visible)}
                        >
                          Have a Promo Code?
                        </p>
                        <div
                          class={`promo-holder ${
                            visible ? "d-block" : "d-none"
                          }`}
                        >
                          <form action="">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control fs-14"
                                placeholder="promo code"
                                name=""
                                id=""
                              />
                              <button
                                className="btn btn-success fs-14 d-flex justify-content-center align-items-center"
                                id="promo-closer"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </p>
                      <button className=" btn btn-orange rounded-0 w-100">
                        CHECK AVAILABILITY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- check availability --> */}
        </div>
      </section>
      {/* <!-- hero --> */}

      {/* <!-- about us --> */}
      <section className="about py-5">
        <div className="container">
          <div className="text-center">
            <h4>
              <Link
                to="/about"
                className="text-uppercase text-dark text-decoration-none ls-3 text-muted"
              >
                Little About Us
              </Link>
            </h4>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              magnam culpa, quasi tempore vel obcaecati harum officia, explicabo
              iste minima necessitatibus, nostrum similique architecto dicta eum
              iure cum labore id pariatur a ut sit non? Debitis iure nulla nihil
              est in beatae necessitatibus quos dolorum, reiciendis vero
              praesentium ducimus, iste fuga maxime quasi aut assumenda sed
              minus soluta recusandae qui! Facilis quam amet repudiandae
              cupiditate minima aspernatur molestias consequuntur voluptates,
              velit aut quia voluptate obcaecati delectus maiores eligendi
              cumque libero quaerat similique! Nisi dignissimos maxime placeat
              fugiat vero rerum aliquam, mollitia doloribus quam consequuntur.
              Numquam sit aliquid sapiente molestiae est!
            </p>
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              magnam culpa, quasi tempore vel obcaecati harum officia, explicabo
              iste minima necessitatibus, nostrum similique architecto dicta eum
              iure cum labore id pariatur a ut sit non? Debitis iure nulla nihil
              est in beatae necessitatibus quos dolorum, reiciendis vero
              praesentium ducimus, iste fuga maxime quasi aut assumenda sed
              minus soluta recusandae qui! Facilis quam amet repudiandae
              cupiditate minima aspernatur molestias consequuntur voluptates,
              velit aut quia voluptate obcaecati delectus maiores eligendi
              cumque libero quaerat similique! Nisi dignissimos maxime placeat
              fugiat vero rerum aliquam, mollitia doloribus quam consequuntur.
              Numquam sit aliquid sapiente molestiae est!
            </p>
            <Link to="/about" className="btn btn-orange mt-5">
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- about us --> */}
    </main>
  );
};

export default Home;
