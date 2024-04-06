import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Root = () => {

  return (
    <>
  
 
  

  <div className="">
  <NavBar></NavBar>
<Outlet></Outlet>
</div>
    
    <Footer></Footer>
    
    </>
  );
};

export default Root;
