import "./index.css";
import Intro from "./components/layout/Intro.jsx";
import Footer from "./components/layout/Footer.jsx";
import Projects from "./components/home/Projects.jsx";
import Experience from "./components/home/Experience.jsx";
import Skills from "./components/home/Skills.jsx";
import PhotographyGallery from "./components/photography/PhotographyGallery.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/other/Error.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Intro />
            <Projects />
            <Experience />
            <Skills />
            <Footer />
          </div>
        }
      />
      <Route
        path="/photography"
        element={
          <div>
            <Intro />
            <PhotographyGallery />
            <Footer />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div>
            <Intro />
            <Error />
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
