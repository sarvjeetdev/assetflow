import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar.jsx'
import Stats from './Stats/Stats.jsx'



function Dashboard() {
  

  return (
    <>
     <Sidebar/> 
     <Stats/>
    </>
  );
}

export default Dashboard;