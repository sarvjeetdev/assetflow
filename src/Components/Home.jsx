import React from "react";
import { Navigate } from "react-router-dom";

function Home() {

  const [goToDash, setGoToDash] = React.useState(false);

  if (goToDash) {
    return <Navigate to="/dashboard" />;
  }
  

  return (
    <div>
      HOME PAGE
      
      <button onClick={() => {
          setGoToDash(true);
        }}>
          
        Go to the page
      </button>
      
    </div>
  );
}

export default Home;