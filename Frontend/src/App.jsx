import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";

//import container

import AcademicServiceList from "./pages/AcademicServiceList";
import AcdemicServiceInfo from "./pages/AcdemicServiceInfo";
import CreateAcademic from "./pages/CreateAcademic";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            ระบบฐานข้อมูล กิจกรรมบริการวิชาการ
          </span>
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">
              หน้าหลัก
            </NavLink>
            <NavLink to="/create" className="nav-link">
              สร้างกิจกรรม
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="container py-4 app-shell">
        <Routes>
          <Route path="/" element={<AcademicServiceList />} />
          <Route path="/create" element={<CreateAcademic />} />
          <Route path="/info/:id" element={<AcdemicServiceInfo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className=" border-top py-3 mt-auto ">
        <div className="container text-center text-muted small">
          <p>for test cmu econ only</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
