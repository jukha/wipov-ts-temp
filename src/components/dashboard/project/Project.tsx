import { useLocation } from "react-router-dom";
import BlockLayers from "./BlockLayers";
import VideoTimeline from "./VideoTimeline";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormat,
  selectVideoSource,
  setFormat,
} from "../../home/videoSetupSlice";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "../../../utils/formatTime";
import { Slider, SliderChangeEvent } from "primereact/slider";

function Project() {
  // Video
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const dispatch = useDispatch();
  const format = useSelector(selectFormat);
  const videoSrc = useSelector(selectVideoSource);

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

  // function getAspectRatioStyles() {
  //   let aspectRatioStyles: React.CSSProperties = {};

  //   switch (format) {
  //     case "16:9":
  //       aspectRatioStyles = { width: "100%", height: "56.25%" }; // 16:9 aspect ratio
  //       break;
  //     case "9:16":
  //       aspectRatioStyles = { width: "56.25%", height: "100%" }; // 9:16 aspect ratio
  //       break;
  //     case "1:1":
  //       aspectRatioStyles = { width: "100%", height: "100%" }; // 1:1 aspect ratio
  //       break;
  //     default:
  //       break;
  //   }

  //   return aspectRatioStyles;
  // }

  function handleVideoClick() {
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

  function toggleVolumeSlider() {
    setShowVolumeSlider((prev) => !prev);
  }
  function handleVolumeChange(e: SliderChangeEvent) {
    const newVolume = Number(e.value) / 100;
    setVolume(newVolume);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.volume = newVolume;
    }
  }
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

  function handleProgressChange(e: SliderChangeEvent) {
    const videoElement = videoRef.current;

    if (videoElement) {
      const newTime = Number(e.value);
      videoElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  function rewind() {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = Math.max(0, videoElement.currentTime - 10);
    }
  }

  // Function to handle forward
  function forward() {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = Math.min(
        videoElement.duration,
        videoElement.currentTime + 10
      );
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

      const handleEnded = () => {
        setIsPlaying(false);
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("durationchange", handleDurationChange);
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener(
          "durationchange",
          handleDurationChange
        );
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [videoSrc]);

  return (
    <div className="main-div">
      <div className="w-100 header-cust">
        <div className="mt-2 d-flex justify-content-between align-items-center head">
          <h2 className="ps-3">Untitled Project</h2>
          <form className="d-flex" role="search">
            <select
              className="layout form-select rounded-2 form-control"
              id="inputGroupSelect02"
              value={format}
              onChange={(e) => dispatch(setFormat(e.target.value))}
            >
              <option value="16:9">16:9</option>
              <option value="9:16">9:16</option>
              <option value="1:1">1:1</option>
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
          <a className="icon" onClick={rewind}>
            <i className="fa-solid fa-rotate-left"></i>
          </a>
          <a className="icon" onClick={forward}>
            <i className="fa-solid fa-rotate-right"></i>
          </a>
          <a href="javascript:void(0)">
            <i className="fa-solid fa-trash"></i>
          </a>
        </div>
        {/* <img className="w-100" src="/assets/images/screen.png" alt="" /> */}
        <div>
          <video
            ref={videoRef}
            // style={getAspectRatioStyles()}
            onClick={handleVideoClick}
            className="w-100"
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
        </div>
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
          <div className="custom-progress-bar w-100">
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleProgressChange}
            />
          </div>
        </div>

        <button
          onClick={toggleVolumeSlider}
          className="border-0 volume-control-btn"
        >
          {showVolumeSlider && (
            <Slider
              value={volume * 100}
              orientation="vertical"
              onChange={handleVolumeChange}
            />
          )}
          <i className="ms-1 bx bxs-volume-low"></i>
        </button>
        <i className="ms-1 bx bx-layout"></i>
        <span>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</span>
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
