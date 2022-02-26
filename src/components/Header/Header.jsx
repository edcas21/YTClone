import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/337px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${searchInput}`}>
          <Search className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar
          alt="User"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
