import React from "react";
import "./App.css";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Homepage from "./pages/homepage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <Homepage></Homepage>
      </header>
      <Footer />
    </div>
  );
}

export default App;
