import { useContext, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";

import { SearchContext } from "../../App";
import { index } from "../../lib/indexing";
import styles from "../Navigator/Navigator.module.scss";

const Search = () => {
  const { setSearchResults } = useContext(SearchContext);
  const [showInputModal, setShowInputModal] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSearchResults(index.search(query));
  }, [query, setSearchResults]);

  return (
    <>
    <Button onClick={() => setShowInputModal((prev) => !prev)} variant="link">
      <FaSearch className={styles.topIcon} />
    </Button>
    <Modal
      show={showInputModal}
      onHide={() => setShowInputModal(false)}
      centered={true}>
      <Modal.Body>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Search;
