import { useLocation } from "react-router-dom";
import BlockLayers from "./BlockLayers";
import VideoTimeline from "./VideoTimeline";

function Project() {
  const location = useLocation();
  const { pathname } = location;

  const isTextOrThumbnail =
    pathname.endsWith("/text") || pathname.endsWith("/thumbnail");

  // Check if the URL ends with /logo or /media
  const isLogoOrMedia =
    pathname.endsWith("/logo") || pathname.endsWith("/media");

  // Check if the URL ends with /template or /audio
  const isTemplateOrAudio =
    pathname.endsWith("/template") || pathname.endsWith("/audio");

  return (
    <div className="main-div">
      <div className="w-100 header-cust">
        <div className="mt-2 d-flex justify-content-between align-items-center head">
          <h2 className="ps-3">Untitled Project</h2>
          <form className="d-flex" role="search">
            <select
              className="layout form-select rounded-2 form-control"
              id="inputGroupSelect02"
            >
              <option value="1" selected>
                <a className="rectangle"></a> 16:9
              </option>
              <option value="1">
                <span className="rectanglevertical"></span> 9:16
              </option>
              <option value="1">
                <i className="fa-solid fa-square"></i> 1:1
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className="media-screen">
        <div
          className="main-div-nav nav nav-tabs text-center align-items-center"
          id="v-tabs-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="New Block active"
            id="templatev-tabs-block-tab"
            data-bs-toggle="tab"
            href="#templatev-tabs-block"
            role="tab"
            aria-controls="templatev-tabs-block"
            aria-selected="true"
          >
            <i className="fa-solid fa-plus"></i>
          </a>
          <a
            className="icon"
            id="templatev-tabs-layout-tab"
            data-bs-toggle="tab"
            href="#templatev-tabs-layout"
            role="tab"
            aria-controls="templatev-tabs-layout"
            aria-selected="false"
          >
            <i className="bx bx-layout"></i>
          </a>
          <a className="icon">
            <i className="bx bxs-volume-low"></i>
          </a>
          <div className="user-info dropdown">
            <a
              href="javascript:void(0)"
              type="button"
              id="useroptions"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-palette"></i>
            </a>
            <ul
              className="dropdown-menu text-center rounded-2 pb-0 pt-0"
              aria-labelledby="useroptions"
            >
              <li>Background</li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-solid fa-palette"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-div-nav right-side nav nav-tabs text-center align-items-center">
          <a className="New Block active">
            <i
              className="fa-regular fa-clock"
              style={{ "font-size": " 14px" } as any}
            ></i>{" "}
            03:00
          </a>
          <a className="icon">
            <i className="fa-solid fa-rotate-left"></i>
          </a>
          <a className="icon">
            <i className="fa-solid fa-rotate-right"></i>
          </a>
          <a href="javascript:void(0)">
            <i className="fa-solid fa-trash"></i>
          </a>
        </div>
        <img className="w-100" src="/assets/images/screen.png" alt="" />
      </div>
      <div className="duration-track">
        <i className="fa-solid fa-play"></i>
        <div className="line">
          <div className="dark"></div>
        </div>
        <i className="ms-1 bx bxs-volume-low"></i>
        <i className="ms-1 bx bx-layout"></i>
        <a href="javascript:void(0)">00:15:32/03:00:00</a>
      </div>
      <div className="timeline-div">
        {isTextOrThumbnail && <BlockLayers />}
        {isTemplateOrAudio && <VideoTimeline />}
        {isLogoOrMedia && (
          <>
            <BlockLayers />
            <VideoTimeline />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
