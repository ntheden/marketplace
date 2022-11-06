import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap";

import { index, dataCache } from "../../lib/indexing";
import styles from "../Navigator/Navigator.module.scss";

const Search = () => {
  const [showInputModal, setShowInputModal] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(index.search(query));
  }, [query]);

  // use later
  const output = (
    <ul>
      {results.map((result) => (
        <li key={result}>
          {dataCache[result].message.caption}
        </li>
      ))};
    </ul>
  );
  //console.log(output);

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
