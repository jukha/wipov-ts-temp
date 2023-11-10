function VideoTimeline() {
  return (
    <div className="video-timeline">
      <div className="timeline-navigation">
        <div className="btn-wrapper d-flex align-items-center justify-content-end">
          <div className="zoom">
            <i className="fa-solid fa-minus"></i>
            <div className="bar"></div>
            <i className="fa-solid fa-plus"></i>
          </div>
          <button type="submit" className=" btn-global btn-timline">
            Done
          </button>
        </div>
      </div>
      <div className="video-time">
        <div className="background">
          <div className="track"></div>
        </div>
      </div>
    </div>
  );
}

export default VideoTimeline;
