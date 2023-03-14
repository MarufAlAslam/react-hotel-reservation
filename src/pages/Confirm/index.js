import React from "react";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <main>
      <section className="confirm py-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Reservation Confirmation
              </h2>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>Check-in Date:</strong> 15th March 2023
                  </p>
                  <p>
                    <strong>Check-out Date:</strong> 20th March 2023
                  </p>
                  <p>
                    <strong>Room Type:</strong> Deluxe Room
                  </p>
                  <p>
                    <strong>Number of Guests:</strong> 2 Adults, 1 Child
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>Name:</strong> John Doe
                  </p>
                  <p>
                    <strong>Email:</strong> johndoe@example.com
                  </p>
                  <p>
                    <strong>Phone Number:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <p className="mb-4">
                  Thank you for choosing our hotel for your stay. We look
                  forward to welcoming you!
                </p>
                <Link to="/" className="btn btn-orange">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Confirm;
