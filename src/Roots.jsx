import React, { Component } from "react";
import App from "./App";
import NavigationBar from "./NavigationBar";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import BlogPost from "./pages/Blog";
import Blog from "./pages/Blog";
import NoMatch from "./pages/NoMatch";

function Roots() {
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content"></div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Roots;
