import { NavLink } from "react-router-dom";

const links = [
  { name: "text", icon: "bx bx-text Text-icon", to: "text" },
  { name: "media", icon: "fa-regular fa-image", to: "media" },
  { name: "template", icon: "bx bx-layout", to: "template" },
  { name: "audio", icon: "fa-regular fa-file-audio", to: "audio" },
  { name: "logo", icon: "fa-solid fa-draw-polygon", to: "logo" },
  { name: "thumbnail", icon: "bx bx-layout", to: "thumbnail" },
];

function Sidebar() {
  return (
    <div className="nav-sidebar">
      <div
        className="nav flex-column nav-tabs text-center align-items-center"
        id="v-tabs-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {links.map((link, i) => {
          return (
            <NavLink key={i} to={link.to} className="icon text-uppercase">
              <i className={link.icon}></i>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
