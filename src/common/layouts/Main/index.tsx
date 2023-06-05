import React from "react";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Drawer from "../../Drawer";
type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Drawer/>
        </div>
        <div style={{ width: "100%", paddingTop:"80px" }}>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
