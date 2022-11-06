import { useContext, useState, useEffect } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";
import { MDBRadio as Radio } from 'mdb-react-ui-kit';

import { FeedContext } from "../../App";
import styles from "../Navigator/Navigator.module.scss";

const Arrangement = () => {
  const { refreshFeed, setRefreshFeed } = useContext(FeedContext);
  const [showModal, setShowModal] = useState(false);
  const [arrangement, setArrangement] = useState(
    localStorage.getItem("Arrangement") || "Newest"
  );

  useEffect(() => {
    if (arrangement === undefined) {
      return;
    }
    localStorage.setItem("Arrangement", arrangement);
    setRefreshFeed((prev) => !prev);
  }, [arrangement]);

  return (
    <>
    <Button onClick={() => setShowModal((prev) => !prev)} variant="link">
      <FaSortAmountDownAlt className={styles.topIcon} />
    </Button>
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered={true}>
      <Modal.Body>
        <Radio
          name='flexRadioDefault'
          id='newest'
          label='Newest on Top'
          checked={arrangement === "Newest"}
          onChange={() => setArrangement('Newest')}
        />
        <Radio
          name='flexRadioDefault'
          id='oldest'
          label='Oldest on Top'
          checked={arrangement === "Oldest"}
          onChange={() => setArrangement('Oldest')}
        />
        <Radio
          name='flexRadioDefault'
          id='shuffle'
          label='Shuffle'
          checked={arrangement === "Shuffle"}
          onChange={() => setArrangement('Shuffle')}
        />
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Arrangement;
