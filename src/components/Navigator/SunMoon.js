import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";

import styles from "./Navigator.module.scss";

const SunMoon = () => {
  const [isDark, setIsDark] = useState(true);
  const [isInit, setIsInit] = useState(true);

  const initialize = useEffect(() => {
    if (!isInit) {
      return;
    }
    setIsInit(false);
    const theme = localStorage.getItem("Theme");
    if (null === theme) {
      setIsDark(true);
      return;
    }
    setIsDark(theme === "Dark" ? true : false);
    // TODO: implement dark/light modes
  }, [isInit]);

  const changeTheme = useEffect(() => {
    if (isInit) {
      // initialization hasn't completed yet
      return;
    }
    console.log('switching to ' + (isDark ? 'dark mode' : 'light mode'));
    localStorage.setItem('Theme', isDark ? 'Dark' : 'Light');
  }, [isDark]);

  const onClick = () => {
    const toggle = isDark;
    setIsDark(!toggle);
  };

  return (
    <>
      <FontAwesomeIcon data-tip data-for="registerTip"
        className={styles.topIcon}
        size="lg"
        icon={isDark ? faSun : faMoon}
        onClick={onClick}
      />
      <ReactTooltip id="registerTip" place="bottom" effect="solid">
        {isDark ? "Light Mode not implemented" : "Dark Mode"}
      </ReactTooltip>
    </>
  );
};

export default SunMoon;
