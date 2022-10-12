import { useState, useEffect } from 'react';
import { BsGearFill } from 'react-icons/bs';
import { FaLayerGroup, FaBitcoin, FaHome, FaBookmark } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import Filter from "../Filter/Filter";
import Arrangement from "../Arrangement/Arrangement";
import Search from "../Search/Search";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Navigator.module.scss";


const Navigator = () => {
  const navigate = useNavigate();

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

  const bottomButtonClick = navLink => {
    navigate(navLink);
  };

  const BottomNavBar = () => {
    return(
      <nav className="navbar navbar-custom fixed-bottom navbar-dark bg-dark">
        <div className="d-flex flex-row justify-content-around w-100">
          <Button onClick={() => bottomButtonClick("/bookmarks")} variant="link">
            <FaBookmark className={styles.icon} />
            { /* Only show label in larger viewports <div>{tab.label}</div> */ }
          </Button>
          <Button onClick={() => bottomButtonClick("/")} variant="primary">
            <FaHome className={styles.icon} />
            { /* Only show label in larger viewports <div>{tab.label}</div> */ }
          </Button>
          <Button onClick={() => bottomButtonClick("/settings")} variant="link">
            <BsGearFill className={styles.icon} />
            { /* Only show label in larger viewports <div>{tab.label}</div> */ }
          </Button>
        </div>
      </nav>
    );
  };

  return (
    <div>
      { TopNavBar }
      <BottomNavBar />
    </div>
  )
};

export default Navigator;
