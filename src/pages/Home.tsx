import Duration from "../components/home/Duration";
import VideoFormat from "../components/home/VideoFormat";
import Blocks from "../components/home/Blocks";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="create-smartnews">
      <div className="container">
        <div className="inner col-sm-11 m-auto">
          <div className="head">
            <h2>Create New SmartNews</h2>
          </div>
          <div className="create-cards row ">
            <div className="col-lg-7">
              <Duration />
            </div>
            <div className="col-lg-5">
              <VideoFormat />
            </div>
            <div className="col-lg-7">
              <Blocks />
            </div>
          </div>
          <div className="btn-wrapper d-flex align-items-center justify-content-sm-end">
            <button
              type="submit"
              className="mt-3 me-1 btn-global btn-create white-back"
            >
              Cancel
            </button>
            <Link
              to="/dashboard"
              className="mt-3 ms-1 btn-global btn-create text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
