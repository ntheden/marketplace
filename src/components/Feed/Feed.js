import OfferCard from "../OfferCard/OfferCard";
import { ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import csvToArray from "../../lib/csv";
import styles from "./Feed.module.scss";


const Feed = (props) => {
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

  const shuffle = (o: Array<number>) => {
    for (var j, x, i = o.length;
       i;
       j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  const createEnum = (values) => {
    const enumObject = {};
    for (const val of values) {
      enumObject[val] = val;
    }
    return Object.freeze(enumObject);
  };

  const arrange = (ar: Array<number>) => {
      const eArrangement = createEnum(["Shuffle", "Newest", "Oldest"]);
      let key = "Arrangement.Feed";
      if (pathname === "/bookmarks") {
        key = "Arrangement.Bookmarks";
      }
      let arrangement = localStorage.getItem(key);
      if (arrangement === null) {
        localStorage.setItem(key, eArrangement.Newest);
        arrangement = eArrangement.Newest;
      }
      console.log("arrangement", arrangement);
      switch(arrangement) {
        case eArrangement.Shuffle:
          return shuffle(ar);
        case eArrangement.Newest:
          return ar.sort((first: number, second: number) => {
            return (first > second ? -1 : 1)
          })
        case eArrangement.Oldest:
          return ar.sort((first: number, second: number) => {
            return (first > second ? 1 : -1)
          })
      }
  }

  const pathname = useLocation().pathname;
  const items = listGroupItems(arrange(applyFilters(props)));

  return (
    <div className="d-flex justify-content-center">
      <ListGroup className={styles.group}>
        {items}
      </ListGroup>
    </div>
  );
};

export default Feed;
