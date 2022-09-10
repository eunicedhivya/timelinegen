import MainMenuLink from "../mainmenu-link/MainMenuLink";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="site-header">
      <div className="site-header__wrapper">
          <a href="#" className="logo"><span className="icon-star"></span> TimlineGen</a>
          <div className="toggle" onClick={()=>{
            setToggle(!toggle);
          }}> { toggle? <span className="icon-menu"></span> : "X"} </div>
          <nav className={ toggle? "mainmenu" : "mainmenu active"}>
              <MainMenuLink classNameTxt="icon-home" linkTxt="Home" url="/" />
              <MainMenuLink classNameTxt="icon-list" linkTxt="Dashboard" url="/dashboard" />
              <MainMenuLink classNameTxt="icon-plus" linkTxt="Add new" url="/add-new" />
          </nav>
      </div>
        
    </header>
  )
}

export default Header