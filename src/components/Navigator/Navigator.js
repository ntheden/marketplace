import { BsGearFill } from 'react-icons/bs';
import { FaLayerGroup, FaBitcoin, FaHome, FaBookmark } from 'react-icons/fa';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';

import Filter from "../Filter/Filter";
import Arrangement from "../Arrangement/Arrangement";
import Search from "../Search/Search";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Navigator.module.scss";

const RightCluster = () => {
  const pathname = useLocation().pathname
  return (
      <div className={styles.iconCluster}>
        {(pathname === "/bookmarks" || pathname === "/") ? (
          <>
           <Filter />
           <Arrangement />
          </>
         ) : (
          <>
          </>
         )}
        <Search />
        <DarkMode />
      </div>
  );
};

const TopNavBar = (
  <nav className="navbar navbar-custom navbar-expand-md fixed-top bg-dark" role="navigation">
    <div className="container-fluid">
      <div>
        <FaBitcoin className={styles.bitcoin} />
        <a className="navbar-brand text-" href="/">Marketplace</a>
      </div>
      <RightCluster />
    </div>
  </nav>
);


const navItem = (pathname, icon) => {
  return (
    <NavItem>
      <NavLink to={pathname} className="nav-link">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          {icon}
          { /* Only show label in larger viewports <div>{tab.label}</div> */ }
        </div>
      </NavLink>
    </NavItem>
  );
};


const BottomNavBar = (
  <nav className="navbar navbar-custom fixed-bottom bg-dark" role="navigation">
    <Nav className="w-100">
      <div className="d-flex flex-row justify-content-around w-100">
        {navItem("/bookmarks", <FaBookmark className={styles.icon} />)}
        {navItem("/", <FaHome className={styles.icon} />)}
        {navItem("/settings", <BsGearFill className={styles.icon} />)}
      </div>
    </Nav>
  </nav>
);


const Navigator = () => {
  return (
    <div>
      { TopNavBar }
      { BottomNavBar }
    </div>
  )
};

export default Navigator;
