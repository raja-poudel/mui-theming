import { useState } from "react";
import PropTypes from "prop-types";
import { MainNavbar } from "./main-navbar";
import { MainSideBar } from "./main-sidebar";

export const MainLayout = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <MainNavbar openSideBar={() => setOpenSideBar((prev) => !prev)} />
      <MainSideBar open={openSideBar} onClose={() => setOpenSideBar(false)} />
      {children}
    </>
  );
};

MainLayout.propType = {
  children: PropTypes.node,
};
