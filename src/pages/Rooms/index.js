import React from "react";
import Room from "../../components/Room";

const Rooms = () => {
  return (
    <main>
      {/* <!-- our gallery --> */}
      <section className="gallery py-5">
        <div className="container">
          <h3 className=" mb-4">
            <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
              Available Rooms
            </p>
          </h3>
          <Room />
        </div>
      </section>
      {/* <!-- our gallery --> */}
    </main>
  );
};

export default Rooms;
