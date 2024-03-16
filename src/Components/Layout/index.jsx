import { useState } from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";

export const Layout = ({ setSeacrhText, children }) => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <>
      <Header
        setSeacrhText={setSeacrhText}
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
      />
      <Nav openBurger={openBurger} />
      {children}
    </>
  );
};
