import { BsGearFill } from 'react-icons/bs';
import { FaHistory, FaLayerGroup, FaBitcoin, FaHome, FaBookmark } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import Filter from "../Filter/Filter";
import Arrangement from "../Arrangement/Arrangement";
import Search from "../Search/Search";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Navigator.module.scss";


const TopRightCluster = () => {
  // This is outside of Navigator component because Filter
  // and Arrangement (and later Search) cause refreshes in Feed
  const pathname = useLocation().pathname
  return (
      <div className={styles.iconCluster}>
        {(pathname === "/bookmarks" ||
          pathname === "/" ||
          pathname === "/history") ? (
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



const Navigator = () => {
  const navigate = useNavigate();

  const bottomButtonClick = navLink => {
    navigate(navLink);
  };

  const navItem = (pathname, icon) => {
    return (
      <Button onClick={() => bottomButtonClick(pathname)} variant="link">
        {icon}
        { /* Only show label in larger viewports <div>{tab.label}</div> */ }
      </Button>
    );
  };

  const TopNavBar = (
    <nav className="navbar navbar-custom navbar-expand-md fixed-top bg-dark" role="navigation">
      <div className="container-fluid">
        <div>
          <FaBitcoin className={styles.bitcoin} />
          <a className="navbar-brand text-" href="/">Marketplace</a>
        </div>
        <TopRightCluster />
      </div>
    </nav>
  );

  const BottomNavBar = (
    <nav className="navbar navbar-custom fixed-bottom bg-dark" role="navigation">
      <div className="d-flex flex-row justify-content-around w-100">
        {navItem("/bookmarks", <FaBookmark className={styles.icon} />)}
        {navItem("/history", <FaHistory className={styles.icon} />)}
        {navItem("/", <FaHome className={styles.icon} />)}
        {navItem("/settings", <BsGearFill className={styles.icon} />)}
      </div>
    </nav>
  );

  return (
    <div>
      { TopNavBar }
      { BottomNavBar }
    </div>
  )
};

export default Navigator;
