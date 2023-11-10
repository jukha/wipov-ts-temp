import { Link } from "react-router-dom";

function Thumbnail() {
  return (
    <div className="tabs-custom2">
      {/* <div className="tab-content"> */}
      <div className="tab-pane">
        <div className="header-cust">
          <div className="mt-2 d-flex justify-content-between align-items-center head">
            <h2>Thumbnail</h2>
            <Link to="text">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </div>
        </div>
        <form className="text-editor">
          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="form4Example3">
              Enter Text
            </label>
            <textarea
              className="form-control rounded-2"
              id="form4Example3"
              rows={4}
              placeholder="Write text.."
            ></textarea>
          </div>
          <label htmlFor="Fonts" className="form-label">
            Style
          </label>
          <div className="input-group mb-2 d-flex justify-content-between">
            <div className="w-50 d-flex flex-column">
              <select
                className="form-select h-100 rounded-2 form-control text-muted"
                id="Fonts"
              >
                <option>Select Font</option>
                <option value="1">Roboto</option>
                <option value="2">Sans</option>
                <option value="3">Ariel</option>
              </select>
            </div>
            <div className="w-50  d-flex flex-column">
              <select
                className="form-select ms-2 h-100 rounded-2 form-control text-muted"
                id="fontsize"
              >
                <option>24px</option>
                <option value="1">16px</option>
                <option value="2">12px</option>
                <option value="3">10px</option>
              </select>
            </div>
          </div>
        </form>
        <div className="nav-editor">
          <div className="btn-group">
            <a
              className="btn"
              data-edit="justifyleft"
              title="Align Left (Ctrl/Cmd+L)"
            >
              <i className="fa-solid fa-fill-drip"></i>
            </a>
          </div>
          <div className="btn-group">
            <a
              className="btn"
              data-edit="justifyleft"
              title="Align Left (Ctrl/Cmd+L)"
            >
              <i className="fa-solid fa-bold"></i>
            </a>
            <a
              className="btn"
              data-edit="justifycenter"
              title="Center (Ctrl/Cmd+E)"
            >
              <i className="fa-solid fa-italic"></i>
            </a>
            <a
              className="btn"
              data-edit="justifyright"
              title="Align Right (Ctrl/Cmd+R)"
            >
              <i className="fa-solid fa-underline"></i>
            </a>
          </div>
          <div className="btn-group">
            <a
              className="btn"
              data-edit="justifyleft"
              title="Align Left (Ctrl/Cmd+L)"
            >
              <i className="fa-solid fa-align-left"></i>
            </a>
            <a
              className="btn"
              data-edit="justifycenter"
              title="Center (Ctrl/Cmd+E)"
            >
              <i className="fa-solid fa-align-center"></i>
            </a>
            <a
              className="btn"
              data-edit="justifyright"
              title="Align Right (Ctrl/Cmd+R)"
            >
              <i className="fa-solid fa-align-right"></i>
            </a>
          </div>
        </div>
        <a
          href="javascript:void(0)"
          style={{ "min-height": "150px" } as any}
          className="addmedia mt-2 mb-2 d-flex flex-column align-items-center justify-content-center g-1"
        >
          <i className="fa-solid fa-cloud-arrow-up"></i>
          Upload an Image
        </a>
        <p
          style={{ color: "#5f4272", "font-size": "14px" } as any}
          className="text-center"
        >
          OR
        </p>
        <p
          style={{ color: "#5f4272", "font-size": "14px" } as any}
          className="text-center"
        >
          Select A frame from Right pane (Timeline)
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Thumbnail;
