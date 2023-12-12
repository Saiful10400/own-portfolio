import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  const li=<>
  <li><NavLink to={"/"}>Home</NavLink></li>
  <li><NavLink to={"/aboutMe"}>About me</NavLink></li>
  <li><NavLink to={"/projects"}>Projects</NavLink></li>
  <li><NavLink to={"/blogs"}>Blog</NavLink></li>
  </>
  return (
    <div className="lg:w-[1400px] lg:mx-auto relative z-20">
        <div className="navbar bg-base-100 absolute top-0 left-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {li}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {li}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
   <div className="mx-3 lg:mx-0 relative -z-10">
   <Outlet></Outlet>
   </div>
    </div>
  );
};

export default Root;
