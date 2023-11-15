import { useLocation } from "react-router-dom";
import BlockLayers from "./BlockLayers";
import VideoTimeline from "./VideoTimeline";
import { useSelector } from "react-redux";
import { selectVideoSource } from "../../home/videoSetupSlice";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../../utils/formatTime";

function Project() {
  // Video
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const location = useLocation();
  const { pathname } = location;

  const videoSrc = useSelector(selectVideoSource);

  const isTextOrThumbnail =
    pathname.endsWith("/text") || pathname.endsWith("/thumbnail");

  // Check if the URL ends with /logo or /media
  const isLogoOrMedia =
    pathname.endsWith("/logo") || pathname.endsWith("/media");

  // Check if the URL ends with /template or /audio
  const isTemplateOrAudio =
    pathname.endsWith("/template") || pathname.endsWith("/audio");

  function togglePlayPause() {
    const videoEl = videoRef.current;
    if (videoEl) {
      if (videoEl.paused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
      setIsPlaying((state) => !state);
    }
  }

  function handleProgressChange(e: React.ChangeEvent<HTMLInputElement>) {
    const videoElement = videoRef.current;

    if (videoElement) {
      const newTime = parseFloat(e.target.value);
      videoElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(videoElement.currentTime);
      };

      const handleDurationChange = () => {
        setDuration(videoElement.duration);
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("durationchange", handleDurationChange);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener(
          "durationchange",
          handleDurationChange
        );
      };
    }
  }, [videoSrc]);

  const passedTimeStyle = {
    width: `${(currentTime / duration) * 100}%`,
    height: "10px",
    background: "#5f4272", // Purple color for passed time
    borderRadius: "inherit"
  };
  
  const remainingTimeStyle = {
    width: `${((duration - currentTime) / duration) * 100}%`,
    height: "10px",
    background: "#ecf0f1", // Gray color for remaining time
    borderRadius: "inherit"
  };

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
        {/* <img className="w-100" src="/assets/images/screen.png" alt="" /> */}
        <video ref={videoRef} className="w-100">
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
      </div>
      <div className="duration-track">
        <button
          className="border-0"
          style={{ minWidth: "28px" }}
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
        <div className="line d-flex">
          {/* <div className="dark"></div> */}
          <div className="custom-progress-bar w-100">
          <div className="passed-time" style={passedTimeStyle} />
          <div className="remaining-time" style={remainingTimeStyle} />
        </div>
          {/* <input
            className="w-100"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
          /> */}
        </div>
        <i className="ms-1 bx bxs-volume-low"></i>
        <i className="ms-1 bx bx-layout"></i>
        <span>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</span>
        {/* <a href="javascript:void(0)">00:15:32/03:00:00</a> */}
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
