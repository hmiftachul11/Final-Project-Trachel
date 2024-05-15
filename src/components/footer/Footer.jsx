import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="text-center pt-5" style={{ backgroundColor: "#8ab1d1" }}>
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Form */}
        <section className="">
          <form action="">
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
              {/*Grid column*/}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4 mt-2">
                  <input
                    placeholder="Email address"
                    type="email"
                    id="form5Example26"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example26">
                    Email address
                  </label>
                </div>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-auto">
                {/* Submit button */}
                <button
                  data-mdb-ripple-init
                  type="submit"
                  className="btn btn-blue mb-4"
                >
                  Subscribe
                </button>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </form>
        </section>
        {/* Section: Form */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="container pb-4">
        <div
          className="row align-items-center justify-content-between"
          style={{ paddingTop: "30px" }}
        >
          <div className="col-md-auto mb-2">
            <img
              src="/image2vector.svg"
              width={"160px"}
              height={"40px"}
              alt="logo"
            />
          </div>
          <div
            className="col-md-auto mb-2"
            style={{ fontSize: "16px", color: "#195786" }}
          >
            All rights Reserved <i className="bi bi-c-circle"></i>{" "}
            <b>Miftachul Huda 2024</b>
          </div>
          <div
            className="col-md-auto mb-2"
            style={{ fontSize: "16px", color: "#195786" }}
          >
            Made with <i className="bi bi-heart-fill"></i> for Dibimbing Final
            Project
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
