import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Project from "../components/dashboard/project/Project";

function Dashboard() {
  return (
    <section className="news-editor">
      <div className="container">
        <div className="inner">
          <div className="row g-0">
            <Sidebar />
            <div className="tabs-custom">
              <div className="flex-row-reverse g-0 row">
                <Project />
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
