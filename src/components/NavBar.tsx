import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <NavLink to={"/"}>
        <p>Score Board</p>
      </NavLink>
      <NavLink to={"/admin"}>
        <p>ADMIN PANEL</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
