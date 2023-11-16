import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preview from "./components/preview/Preview";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Text from "./components/dashboard/Text";
import Media from "./components/dashboard/Media";
import Template from "./components/dashboard/Template";
import Audio from "./components/dashboard/Audio";
import Logo from "./components/dashboard/Logo";
import Thumbnail from "./components/dashboard/Thumbnail";


import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Test from "./components/ffmpeg-test/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        {/* <Route element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to="media" />} />
            <Route path="text" element={<Text />} />
            <Route path="media" element={<Media />} />
            <Route path="template" element={<Template />} />
            <Route path="audio" element={<Audio />} />
            <Route path="logo" element={<Logo />} />
            <Route path="thumbnail" element={<Thumbnail />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
