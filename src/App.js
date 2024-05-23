import React, { useEffect, useState } from "react";


import Aos from "aos";
import "aos/dist/aos.css";

import {
  Hero,
  Header,
  Calculate,
  Features,
  Footer,
  NavMobile,
  Newsletter,
  Stats,
  Trade,
  Why,
} from "./pages";
const App = () => {
  //mobile nav state

  // aos init

  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  });

  const [navMobile, setNavMobile] = useState(true);

  
  return (
    <div className="overflow-hidden scroll-smooth" >
      
      <Header setNavMobile={setNavMobile} />
      <Hero/>
     
      {/* mobile navbar */}

      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        }  fixed  z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile}  />
      </div>

      <Stats/>
      <Why/>
      <Calculate/>
      <Trade/>
      <Features/>
      <Newsletter/>
      <Footer/>
      
    </div>
  );
};

export default App;
