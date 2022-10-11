import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";
import { MDBRadio as Radio } from 'mdb-react-ui-kit';

import styles from "../Navigator/Navigator.module.scss";

// A better name for this is Arrangement
const Filter = () => {
  const [showMenu, setShowMenu] = useState(false);

  // TODO: filter out stuff that doesn't match, for instance:
  // 1. has picture
  // 2. has word on the user's banned list. There will
  //    be a default short list of hashed banned words that
  //    the user can modify
  const filters = localStorage.getItem('filters');

  const onChange = (e, name) => {
    console.log(name, e.target.value);
  };

  const onClick = () => {
    console.log('filter clicked');
  };

  return (
    <>
    <Button onClick={onClick} variant="link">
    {/* <Button onClick={() => setShowMenu((prev) => !prev)} variant="link"> */}
      <FaFilter className={styles.topIcon} />
    </Button>
    </>
  );
};

export default Filter;
