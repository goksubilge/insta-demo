import React from "react";
import { NavLink } from "react-router-dom";

const MainNavLinks = () => {
  return (
    <nav className="flex gap-2 justify-center ">
      <NavLink to="/" exact activeClassName="text-pink-600">
        Anasayfa
      </NavLink>
      <NavLink to="/profile" activeClassName="text-pink-600">
        Profil
      </NavLink>
      <NavLink to="/login" activeClassName="text-pink-600">
        Giriş
      </NavLink>
    </nav>
  );
};

export default MainNavLinks;
