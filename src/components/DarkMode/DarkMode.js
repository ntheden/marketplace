import { useState, useEffect } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from "react-bootstrap";

import styles from "../Navigator/Navigator.module.scss";
import { consts } from '../../config';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    if (!isInit) {
      return;
    }
    setIsInit(false);
    const localTheme = localStorage.getItem("Theme");
    if (null === localTheme) {
      setIsDark(true);
      return;
    }
    setIsDark(localTheme === "Dark" ? true : false);
    const theme = (localTheme === "Dark" ? "dark" : "light");
    const html = document.querySelector('html');
    html.dataset.theme = `theme-${theme}`;
  }, [isInit]);

  const changeTheme = useEffect(() => {
    if (isInit) {
      console.log(`API is at ${consts.apiEndpoint}`);
      return;
    }
    //console.log('switching to ' + (isDark ? 'dark mode' : 'light mode'));
    localStorage.setItem('Theme', isDark ? 'Dark' : 'Light');
    const theme = (isDark ? "dark" : "light");
    const html = document.querySelector('html');
    html.dataset.theme = `theme-${theme}`;
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
