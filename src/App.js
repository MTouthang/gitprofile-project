import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// react-router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./config/firebaseConfig";

// init firebase -
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
