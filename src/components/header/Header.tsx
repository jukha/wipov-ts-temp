import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const searchRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  function handleSearchChange(evt: React.FormEvent) {
    evt.preventDefault();
    setShowSearch(false);
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  }

  function handleClick(evt: React.MouseEvent) {
    setShowSearch((state) => !state);
    if (searchRef.current) {
      searchRef.current.focus();
      if (searchRef.current.value) handleSearchChange(evt);
    }
  }

  useEffect(() => {
    const header = headerRef.current;

    function handleScroll() {
      if (window.scrollY > 0 && header) {
        header.classList.add("scrolled");
      } else if (header) {
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="page-header" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand d-inline-block" to="/">
            <img
              className="w-100"
              src="/assets/images/company-name.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
          >
            <div className="nav-buttons d-flex align-items-center">
              <div className="btn-wrapper me-lg-3 d-flex align-items-center justify-content-sm-end">
                <Link
                  to="/preview"
                  type="submit"
                  className="me-1 btn-global btn-create white-back"
                >
                  <i className="fa-solid fa-play"></i> Preview
                </Link>
                <button type="submit" className="ms-1 btn-global btn-create">
                  Save
                </button>
              </div>
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
              <ul className="m-0 p-0 language-dropdown">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">translate</i>ENG
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="language-item" href="#">
                        中文 Chinese
                      </a>
                    </li>
                    <li>
                      <a className="language-item" href="#">
                        日本語 japnese
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="user-info dropdown">
                <a >
                  <img src="/assets/images/user.png" alt="" />
                </a>
                <a
                  
                  type="button"
                  id="useroptions"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jhon Doe <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="useroptions">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Subscription Plan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign Out
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
