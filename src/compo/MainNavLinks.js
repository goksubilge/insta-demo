import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { toast, Flip } from "react-toastify";

const MainNavLinks = (props) => {
  console.log("main nav props:", props);
  const history = useHistory();

  function LogOutHandle() {
    localStorage.removeItem("insta");
    props.setUser(null);
    toast.success("çıkabildin, aferin", {
      autoClose: 1000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });

    setTimeout(() => history.push("/"), 1000);
  }

  return (
    <nav className="flex gap-2 justify-center ">
      <NavLink to="/" exact activeClassName="text-pink-600">
        Anasayfa
      </NavLink>
      <NavLink to="/profile" activeClassName="text-pink-600">
        Profil
      </NavLink>
      {props.user ? (
        <button onClick={LogOutHandle}>Çıkış</button>
      ) : (
        <NavLink to="/login" activeClassName="text-pink-600">
          Giriş
        </NavLink>
      )}
    </nav>
  );
};

export default MainNavLinks;
