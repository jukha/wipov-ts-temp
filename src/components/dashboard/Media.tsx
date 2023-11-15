import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { setVideoSource } from "../home/videoSetupSlice";

const fileTypes: any = ["mp4"];

function Media() {
  const dispatch = useDispatch();

  function handleVideoUpload(file: File) {
    const videoUrl = URL.createObjectURL(file);
    
    dispatch(setVideoSource(videoUrl));
  }

  return (
    <div className="tabs-custom2">
      <div className="tab-content" id="v-tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-tabs-block"
          role="tabpanel"
          aria-labelledby="v-tabs-block-tab"
        >
          <div className="header-cust">
            <div className="mt-2 d-flex justify-content-between align-items-center head">
              <h2>Add Media</h2>
              <a href="javascript:void(0)">
                <i className="fa-solid fa-xmark"></i>
              </a>
            </div>

            <FileUploader
              handleChange={handleVideoUpload}
              name="file"
              types={fileTypes}
              classes="w-100"
            >
              <a
                href="javascript:void(0)"
                className="addmedia mt-2 mb-2 d-flex flex-column align-items-center justify-content-center g-1"
              >
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Upload Media
              </a>
            </FileUploader>
          </div>
          <div
            className="nav tabs-cust d-flex justify-content-center"
            id="ex1"
            role="tablist"
          >
            <a
              className="media-tabs active"
              id="ex1-tab-1"
              data-bs-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              <i className="fa-regular fa-file-mymedia"></i>My Media
            </a>
            <a
              className="media-tabs"
              id="ex1-tab-2"
              data-bs-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              Intro/Outro
            </a>
          </div>
          <div className="filter mt-2 d-flex justify-content-between align-items-center">
            <form className="search d-flex" role="search">
              <input
                className="form-control me-2 search-header-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a
                className="d-flex align-items-center search-header"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </form>
            <form className="d-flex" role="search">
              <select
                className="form-select rounded-2 form-control"
                id="inputGroupSelect02"
                defaultValue="Image"
              >
                <option selected>Image</option>
                <option value="1">Video</option>
              </select>
            </form>
          </div>
          <div className="tab-content" id="ex1-content"></div>
          <div
            className="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div className="images-media">
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <div className="images-media">
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
              <img src="/assets/images/mymedia.png" alt="" />
              <img src="/assets/images/mymedia1.png" alt="" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="v-tabs-layout"
          role="tabpanel"
          aria-labelledby="v-tabs-layout-tab"
        >
          <div className="header-cust">
            <div className="mt-2 d-flex justify-content-between align-items-center head">
              <h2>Layouts</h2>
              <a href="javascript:void(0)">
                <i className="fa-solid fa-xmark"></i>
              </a>
            </div>
          </div>
          <div className="images-media">
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
          </div>
        </div>
        D
      </div>
    </div>
  );
}

export default Media;
