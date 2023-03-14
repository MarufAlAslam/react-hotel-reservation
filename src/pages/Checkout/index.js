import React from "react";
import hotel2 from "../../assets/img/hotel-2.jpg";

const Checkout = () => {
  return (
    <main>
      <section className="checkout py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-4">
              <div className="card border-0">
                <img src={hotel2} className="card-img-top" alt="" />
                <div className="card-body px-0">
                  <h2 className="card-title ls-3">Deluxe Room</h2>
                  <p className="card-text mb-0">Max Guests: 2</p>
                  <p className="card-text mb-0">Room Size: 400 sq ft</p>
                  <p className="card-text mb-0">Price: $200.00/night</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <form action="/confirm">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <textarea className="form-control" id="address"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="checkin" className="form-label">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkin"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="checkout" className="form-label">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkout"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="cardnumber" className="form-label">
                        Credit Card Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardnumber"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label for="expiration" className="form-label">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiration"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label for="cvv" className="form-label">
                        CVV
                      </label>
                      <input type="text" className="form-control" id="cvv" />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-orange mt-4">
                    Complete Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
