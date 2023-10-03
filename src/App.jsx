import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import React from "react";
import Layout from "./Components/Layout/Layout.jsx";

function App() {
  
  
  

  return (
    <MantineProvider defaultColorScheme="dark">
    
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/app" component={Layout} />
        </Routes>
      </Router>
    </div>
    </MantineProvider>
  );
}

export default App;