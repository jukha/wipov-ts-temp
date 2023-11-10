function Preview() {
  return (
    <section className="news-editor">
      <div className="container">
        <div className="inner">
          <div className="row g-0">
            <div className="tabs-custom">
              <div className="tab-content" id="v-tabs-tabContent">
                <div className="main-div">
                  <div className="media-screen">
                    <img
                      className="w-100"
                      src="assets/images/screen.png"
                      alt=""
                    />
                  </div>
                  <div className="duration-track">
                    <i className="fa-solid fa-play"></i>
                    <div className="line">
                      <div className="dark"></div>
                    </div>
                    <i className="ms-1 bx bxs-volume-low"></i>
                    <i className="ms-1 bx bx-layout"></i>
                    <a href="">00:15:32/03:00:00</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
