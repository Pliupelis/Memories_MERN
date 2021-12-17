import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/auth" element={<Auth />} exact />
        </Routes>
      </Container>
    </Router>
  );
};
export default App;
