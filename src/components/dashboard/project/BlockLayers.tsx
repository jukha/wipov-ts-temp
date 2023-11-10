function BlockLayers() {
  return (
    <>
      <div className="timeline-navigation">
        <div className="btn-wrapper d-flex align-items-center justify-content-between">
          <button type="submit" className=" btn-global btn-timline white-back">
            <i className="fa-solid fa-plus"></i> New Block
          </button>
          <button type="submit" className=" btn-global btn-timline">
            <i className="fa-solid fa-scissors"></i> Timeline
          </button>
        </div>
      </div>
      <div className="layers">
        <div className="layer">
          <div className="layer-details">
            <div className="title">
              <p>Block 1</p>
              <div className="dropdown">
                <i
                  className="fa-solid fa-ellipsis-vertical"
                  role="button"
                  tabIndex={0}
                  id="newsedit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu" aria-labelledby="newsedit">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-copy"></i> Duplicate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-trash"></i> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="duration">50 Second</p>
          </div>
        </div>
        <div className="layer">
          <div className="layer-details">
            <div className="title">
              <p>Block 1</p>
              <div className="dropdown">
                <i
                  className="fa-solid fa-ellipsis-vertical"
                  role="button"
                  tabIndex={0}
                  id="newsedit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu" aria-labelledby="newsedit">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-copy"></i> Duplicate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-trash"></i> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="duration">50 Second</p>
          </div>
        </div>
        <div className="layer">
          <div className="layer-details">
            <div className="title">
              <p>Block 1</p>
              <div className="dropdown">
                <i
                  className="fa-solid fa-ellipsis-vertical"
                  role="button"
                  tabIndex={0}
                  id="newsedit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu" aria-labelledby="newsedit">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-copy"></i> Duplicate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-trash"></i> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="duration">50 Second</p>
          </div>
        </div>
        <div className="layer">
          <div className="layer-details">
            <div className="title">
              <p>Block 1</p>
              <div className="dropdown">
                <i
                  className="fa-solid fa-ellipsis-vertical"
                  role="button"
                  tabIndex={0}
                  id="newsedit"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu" aria-labelledby="newsedit">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-copy"></i> Duplicate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-trash"></i> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="duration">50 Second</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockLayers;
