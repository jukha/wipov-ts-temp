function Audio() {
  return (
    <div className="tabs-custom2">
      <div className="tab-pane">
        <div className="header-cust">
          <div className="mt-2 d-flex justify-content-between align-items-center head">
            <h2>Audio</h2>
            <a href="javascript:void(0)">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
        </div>
        <div className="filter mt-2 d-flex justify-content-between align-items-center">
          <form
            className="w-100 search d-flex"
            role="search"
            style={{ "max-width": "100%" } as any}
          >
            <input
              className=" form-control me-2 search-header-input"
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
        </div>
        <div className="images-media d-flex  flex-column">
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/audio.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Audio;
