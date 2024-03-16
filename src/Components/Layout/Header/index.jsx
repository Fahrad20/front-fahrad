import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";

export const Header = ({ setSeacrhText, openBurger, setOpenBurger }) => {
  const [search, setSeacrh] = useState(false);

  const handleCloseSearch = (e) => {
    e.key === "Enter" && setSeacrh(false);
  };

  const handleSearch = (e) => {
    setSeacrhText(e.target.value);
  };

  const handleOpenBurger = () => {
    if (openBurger) {
      setOpenBurger(false);
    } else {
      setOpenBurger("active");
    }
  };

  return (
    <header id="container">
      <div className={s.burger} onClick={handleOpenBurger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={openBurger ? s.burgerMenuActive : s.burgerMenu}
        onClick={handleOpenBurger}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Logo />
          <Nav />
          <button onClick={handleOpenBurger}>X</button>
        </div>
      </div>
      <Link to="/">
        <Logo />
      </Link>
      <div className={s.searchBlock}>
        {search && (
          <input
            type="text"
            placeholder="Поиск"
            onChange={handleSearch}
            onKeyDown={handleCloseSearch}
          />
        )}
        <Search onClick={() => setSeacrh(!search)} />
      </div>
    </header>
  );
};
