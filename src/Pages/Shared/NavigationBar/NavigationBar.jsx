import { Link, NavLink } from "react-router-dom";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";



const NavigationBar = () => {
  const NavItems  =<>
     <li className=""><Link to='/'>নির্বাচনী<br/>এলাকা</Link></li>
     <li><Link to='/'>রাজনৈতিক<br/>দল </Link></li>
     <li><Link to='/'>নির্বাচনী<br/>ইস্তেহার</Link></li>
     <li><Link to='/'>লগ আউট</Link></li>
     
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ">
           
          {NavItems}

          </ul>
        </div>
        
        <Link to='/' className="btn btn-ghost text-xl">VOTEKOREN.COM</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end gap-6">
      
      <NavLink to='/' className="flex flex-row gap-2 items-center justify-center "> ভাষা 
<FaRegFlag /> </NavLink>
     

      <Link to='' className="cil-energy icon icon-xxl flex flex-row gap-2 items-center justify-center">অঞ্চল <FaEarthAmericas className="fill-green-600" /></Link>
      </div>
      
    </div>
  );
};

export default NavigationBar;
