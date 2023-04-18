import React, { FC } from "react";
import NavBar from "./NavBar";
import Canvas from "./Canvas";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Canvas />
      <div className={styles.container}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
