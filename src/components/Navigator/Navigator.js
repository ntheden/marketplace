import { useState, useEffect } from 'react';
import { BsGearFill } from 'react-icons/bs';
import { FaHistory, FaBitcoin, FaHome, FaBookmark } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

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
  const [ids, setIds] = useState({});
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    setIds({
      "/bookmarks": { id: uniqid(), selected: false, },
      "/": { id: uniqid(), selected: true, },
      "/history": { id: uniqid(), selected: false, },
      "/settings": { id: uniqid(), selected: false, }
    });
  }, []);

  useEffect(() => {
    const autohide = document.querySelector('.navbar-custom');
    var last_scrollY = 0;
    window.addEventListener("scroll", () => {
      const scrolling_up: boolean = (window.scrollY - last_scrollY) > 0 ? true: false;
      if (scrolling_up) {
        autohide.classList.remove('scrolling-down');
        autohide.classList.add('scrolling-up');
      } else {
        autohide.classList.remove('scrolling-up');
        autohide.classList.add('scrolling-down');
      }
      last_scrollY = window.scrollY;
    });
  }, []);

  const TopNavBar = (
    <nav className="navbar navbar-custom navbar-expand-md fixed-top" role="navigation">
      <div className="container-fluid">
        <div>
          <FaBitcoin className={styles.bitcoin} />
          <a className="navbar-brand text-" href="/">Marketplace</a>
        </div>
        <TopRightCluster />
      </div>
    </nav>
  );

  const iconArrangement = () => {
    return (
      <>
      <FaBookmark
        id={ids["/bookmarks"].id}
        className={ids["/bookmarks"].selected ? styles.iconSelected : styles.icon}
        onClick={() => bottomIconClick("/bookmarks")}
      />
      <FaHistory
        id={ids["/history"].id}
        className={ids["/history"].selected ? styles.iconSelected : styles.icon}
        onClick={() => bottomIconClick("/history")}
      />
      <FaHome
        id={ids["/"].id}
        className={ids["/"].selected ? styles.iconSelected : styles.icon}
        onClick={() => bottomIconClick("/")}
      />
      <BsGearFill
        id={ids["/settings"].id}
        className={ids["/settings"].selected ? styles.iconSelected : styles.icon}
        onClick={() => bottomIconClick("/settings")}
      />
      </>
    );
  }

  useEffect(() => {
    if (Object.keys(ids).length === 0) {
      return;
    }
    setIconList(iconArrangement());
  }, [ids]);


  const bottomIconClick = (navLink: String) => {
    Object.entries(ids).map(([k, v], i) => {
      v.selected = (k === navLink) ? true : false;
      return [k, v];
    });
    setIconList(iconArrangement());
    navigate(navLink);
  };

  const BottomNavBar = (
    <nav className="navbar navbar-custom fixed-bottom" role="navigation">
      <div className="d-flex flex-row justify-content-around w-100">
        {iconList}
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
