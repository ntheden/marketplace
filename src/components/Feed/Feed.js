import OfferCard from "../OfferCard/OfferCard";
import { ListGroup } from "react-bootstrap";

import csvToArray from "../../lib/csv";
import styles from "./Feed.module.scss";

const getBookmarks = () => {
  const bookmarks = csvToArray(localStorage.getItem("Bookmarks"))[0];
  if (bookmarks[0] === "undefined") {
    return [];
  }
  return bookmarks;
};

const applyFilters = ({filter}) => {
  let items = [];
  if (filter === undefined) {
    return [0, 1, 2, 3];
  } else if (filter === "bookmarks") {
    return getBookmarks();
  }
  return items;
};

const listGroupItems = (values) => {
  return values.map((item, index) => {
    return (
      <ListGroup.Item key={index} className={styles.item}>
        <OfferCard card={item} />
      </ListGroup.Item>
    );
  });
};

const Feed = (props) => {
  console.log("Feed props", props);
  const items = listGroupItems(applyFilters(props));

  return (
    <div className="d-flex justify-content-center">
      <ListGroup className={styles.group}>
        {items}
      </ListGroup>
    </div>
  );
};

export default Feed;
