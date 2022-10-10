import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";
import { MDBRadio as Radio } from 'mdb-react-ui-kit';

import styles from "../Navigator/Navigator.module.scss";

// A better name for this is Arrangement
const Filter = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onChange = (e, name) => {
    console.log(name, e.target.value);
  };

  return (
    <>
    <Button onClick={() => setShowMenu((prev) => !prev)} variant="link">
      <FaFilter className={styles.topIcon} />
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
          onChange={(e) => onChange(e, 'newest')}
        />
        <Radio
          name='flexRadioDefault'
          id='oldest'
          label='Oldest First'
          onChange={(e) => onChange(e, 'oldest')}
        />
        <Radio
          name='flexRadioDefault'
          id='shuffle'
          label='Shuffle'
          onChange={(e) => onChange(e, 'shuffle')}
        />
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Filter;
