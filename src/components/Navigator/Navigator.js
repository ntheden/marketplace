import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import styles from "./Navigator.module.scss";

const tabs = [{
    route: "/home",
    icon: 'faHome',
    label: "Home",
  }, {
    route: "/search",
    icon: 'faSearch',
    label: "Search",
  },
]

const Navigator = (props) => {
  return (
    <div>
      {/* Top Bar */}
      <nav className="navbar navbar-expand-md navbar-light fixed-top" role="navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">P2P Market</a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/search" className="nav-link">
                Search
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>
      {/* Bottom Bar */}
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
          </div>
        </Nav>
      </nav>
    </div>
  )
};

export default Navigator;
