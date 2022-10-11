import { useState, useEffect } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";
import { MDBRadio as Radio } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

import styles from "../Navigator/Navigator.module.scss";

const Arrangement = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = useLocation().pathname;

  const onChange = (e, name) => {
    let key = "Arrangement.Feed";
    if (pathname === "/bookmarks") {
      key = "Arrangement.Bookmarks";
    }
    if (e.target.value === "on") {
      localStorage.setItem(key, name);
    }
    console.log(key, e.target.value);
  };

  return (
    <>
    <Button onClick={() => setShowMenu((prev) => !prev)} variant="link">
      <FaSortAmountDownAlt className={styles.topIcon} />
    </Button>
    <Modal
      show={showMenu}
      onHide={() => setShowMenu(false)}
      centered={true}>
      <Modal.Body>
        <Radio
          name='flexRadioDefault'
          id='newest'
          label='Newest First'
          onChange={(e) => onChange(e, 'Newest')}
        />
        <Radio
          name='flexRadioDefault'
          id='oldest'
          label='Oldest First'
          onChange={(e) => onChange(e, 'Oldest')}
        />
        <Radio
          name='flexRadioDefault'
          id='shuffle'
          label='Shuffle'
          onChange={(e) => onChange(e, 'Shuffle')}
        />
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Arrangement;
