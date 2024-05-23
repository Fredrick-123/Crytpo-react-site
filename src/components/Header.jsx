

// import components

import Logo from "../assets/img/logo.svg";

// import icons

import { CgMenuRight } from "react-icons/cg";

// Framer motion



import { Nav, AccountBtns } from "../pages";
const Header = ({setNavMobile}) => {
 

  return (
    <header className={ `py-[30px] lg:pt-[60px]  relative `} data-aos='fade-down'  data-aos-delay="900"   data-aos-duration="2000" >
      <div className="container mx-auto flex items-center  justify-between ">
        {/* logo */}
        <a href="/">
          {" "}
          <img src={Logo} alt="logo" />
        </a>

        {/* nav & btns */}
        
          
           <div className=" hidden lg:flex gap-x-[55px] ">
          <Nav />
          <AccountBtns />
          </div>
          

          {/* open nav btn */}
          <div onClick={()=> setNavMobile(prev => !prev)} className="lg:hidden cursor-pointer ">
            <CgMenuRight className="text-2xl" />
          </div>


        

      </div>
    </header>
  );
};

export default Header;
