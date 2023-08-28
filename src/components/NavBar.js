import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const getNav = links.map((link, index) => <a key={index} href={`#${link}`}>{link}</a>)

  return <nav>{getNav}</nav>;
}

export default NavBar;
