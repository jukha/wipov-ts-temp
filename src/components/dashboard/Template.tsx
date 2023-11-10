function Template() {
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
          <div className="images-media">
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
            <img src="/assets/images/layout.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
