import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import styles from "../Navigator.module.scss";

const SunMoon = () => {
  const [sunToggle, setSunToggle] = useState(true);

  const onClick = () => {
    const toggle = sunToggle;
    setSunToggle(!toggle);
    // TODO: implement dark/light modes
  };

  return (
      <>
        <FontAwesomeIcon
          className={styles.topIcon}
          size="lg"
          icon={sunToggle ? faSun : faMoon}
          onClick={onClick}
        />
      </>
  );
};

export default SunMoon;
