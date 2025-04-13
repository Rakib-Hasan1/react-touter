import React, { useState } from "react";
import Link from "./Link";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";



const navbarItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
  const links = navbarItems.map(route => <Link key={route.id} route={route}></Link>)


const Navbar = () => {

    const [open, setOpen] = useState(false);



  return (
    <nav className="w-11/12 mx-auto flex justify-between my-5">
        <span className="flex" onClick={() => setOpen(!open)}>
            {
            open ? 
            <RiCloseLargeFill size={25} className="md:hidden hover:text-gray-400 cursor-pointer mr-2"></RiCloseLargeFill>: 
            <TiThMenu size={25} className="md:hidden hover:text-gray-400 cursor-pointer mr-2"/>
            }
        
        <ul className={`md:hidden absolute  duration-1000 
            ${open ? 'top-12' : '-top-40'}
            `}>
            {
                links
            }
        </ul>
        <h3>My Logo</h3>
        </span>
        <ul className="md:flex hidden">
            {
                links
            }
        </ul>
        <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
