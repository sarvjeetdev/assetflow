import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Features from './Features/Features.jsx'

function Home() {

  const [goToDash, setGoToDash] = React.useState(false);

  if (goToDash) {
    return <Navigate to="/dashboard" />;
  }
  

  return (
    <div>
      
      <Navbar/>
      
      <Hero/>
      
      <Features/>
      
      <button onClick={() => {
          setGoToDash(true);
        }}>
          
        Go to the page
      </button>
      
    </div>
  );
}

export default Home;