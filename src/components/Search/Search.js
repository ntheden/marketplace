import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button } from "react-bootstrap";

import styles from "../Navigator/Navigator.module.scss";

const Search = () => {
  const [showInputModal, setShowInputModal] = useState(false);

  useEffect(() => {
    console.log('Search: showInputModal', showInputModal);
  }, [showInputModal]);

  return (
    <Button onClick={() => setShowInputModal((prev) => !prev)} variant="link">
      <FaSearch className={styles.topIcon} />
    </Button>
  );
};

export default Search;
