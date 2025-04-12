import React from "react";
import Link from "./Link";



const navbarItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  


const Navbar = () => {
  return (
    <nav>


        <ul className="flex">
            {
                navbarItems.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
  );
};

export default Navbar;
