import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { HiOutlineMenu } from "react-icons/hi";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-2">
    {links.map((item) => (
      <NavLink 
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-5 md:text-base text-lg text-white font-bold hover:bg-neutral-400 hover:bg-opacity-40 p-2 rounded-md" 
        onClick={() => handleClick && handleClick()}  
      >
        <item.icon className="w-6 h-5 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
    <>
      <div className="md:flex hidden flex-col w-[240px] py-5 px-1 bg-neutral-900">
        <img src={logo} alt="logo" className="w-full h-[45px] object-contain"/>
        <NavLinks />
      </div>

      {/* //For mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-neutral-900 z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
};

export default Sidebar;