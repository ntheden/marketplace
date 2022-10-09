import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";

import styles from "./Navigator.module.scss";

const SunMoon = () => {
  const [isDark, setIsDark] = useState(true);

  const initialize = useEffect(() => {
    // TODO: implement dark/light modes
    console.log('switching to ' + (isDark ? 'dark mode' : 'light mode'))
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
