import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faHome, faGear } from '@fortawesome/free-solid-svg-icons';
import { FaBitcoin } from 'react-icons/fa';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import styles from "./Navigator.module.scss";

const tabs = [{
    route: "/home",
    icon: faHome,
    label: "Home",
  }, {
    route: "/search",
    icon: faSearch,
    label: "Search",
  }, {
    route: "/settings",
    icon: faGear,
    label: "Settings",
  },
]

const TopNavBar = (
  <nav className="navbar navbar-expand-md fixed-top bg-dark" role="navigation">
    <div className="container-fluid">
      <div>
        <FaBitcoin className={styles.bitcoin} />
        <a className="navbar-brand text-" href="/home">Marketplace</a>
      </div>
      <Nav className="ml-auto">
        <NavItem>
          <NavLink to="/search" className="nav-link">
            <FontAwesomeIcon size="lg" icon={faFilter} className={styles.topIcon}/>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </nav>
);


const BottomNavBar = (
  <nav className="navbar fixed-bottom bg-dark" role="navigation">
    <Nav className="w-100">
      <div className="d-flex flex-row justify-content-around w-100">
      {
        tabs.map((tab, index) => (
          <NavItem key={`tab-${index}`}>
            <NavLink to={tab.route} className="nav-link">
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon size="lg" icon={tab.icon} className={styles.icon}/>
                { /* Only show label in larger viewports <div>{tab.label}</div> */ }
              </div>
            </NavLink>
          </NavItem>
        ))
      }
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
