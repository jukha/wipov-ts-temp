function Logo() {
  return (
    <div className="tabs-custom2">
      <div className="tab-pane">
        <div className="header-cust">
          <div className="mt-2 d-flex justify-content-between align-items-center head">
            <h2>Logo</h2>
            <a href="javascript:void(0)">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
          <a className="addmedia mt-2 mb-2 d-flex flex-column align-items-center justify-content-center g-1">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            Upload Logo File
          </a>
        </div>
        <div className="images-media">
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/logo.png"
            alt=""
          />
          <img
            className="rounded-5"
            style={{ border: "1px solid #000" }}
            src="/assets/images/logo1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
