import { useState, useEffect } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from "react-bootstrap";

import styles from "../Navigator/Navigator.module.scss";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
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
      return;
    }
    console.log('switching to ' + (isDark ? 'dark mode' : 'light mode'));
    localStorage.setItem('Theme', isDark ? 'Dark' : 'Light');
  }, [isDark]);

  return (
    <Button
      onClick={() => setIsDark((prev) => !prev)}
      variant="link">
      { isDark ? (
          <FaSun className={styles.topIcon}/>
        ) : (
          <FaMoon className={styles.topIcon}/>
        )
      }
    </Button>
  );
};

export default DarkMode;
