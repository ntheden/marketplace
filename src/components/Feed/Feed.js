import axios from 'axios';
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import OfferCard from "../OfferCard/OfferCard";
import { Spinner } from "../Spinner/Spinner";
import csvToArray from "../../lib/csv";
import createEnum from "../../lib/enum";
import styles from "./Feed.module.scss";
import { consts } from '../../config';
import { trackWindowScroll } from 'react-lazy-load-image-component';


const Feed = props => {
  const [offerIds, setOfferIds] = useState([]);
  const [listItems, setListItems] = useState(null);

  useEffect(() => {
    const getIds = async () => {
      try {
        let response = await axios.get(`${consts.apiEndpoint}/@bitcoinp2pmarketplace`);
        setOfferIds(response.data);
        //Test mode: setOfferIds([6310, 6250, 1758, 2664]);
      } catch(err) {
        console.log(err);
      }
    };
    getIds();
  }, []);

  const getBookmarks = () => {
    // FIXME use JSON.parse instead of csvToArray
    const bookmarks = csvToArray(localStorage.getItem("Bookmarks"))[0];
    if (bookmarks[0] === "undefined") {
      return [];
    }
    return bookmarks;
  };

  const applyFilters = items => {
    if (items === undefined) {
      return [];
    }
    if (window.location.pathname === "/bookmarks") {
      items = getBookmarks();
    }
    //
    // TODO(maybe): filter based on filters defined in localStorage
    //
    if (props.search.length > 0) {
      // Filter out stuff that didn't match the active search
      return items.filter(value => props.search.includes(value));
    }
    return items;
  };

  const listGroupItems = (values) => {
    return values.map((item, index) => {
      return (
        <ListGroup.Item key={index} className={[styles.item, "border-0"].join(" ")}>
          <OfferCard offerId={item} />
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

  const arrange = (ar: Array<number>) => {
    if (ar === undefined) {
      return [];
    }
    const eArrangement = createEnum(["Shuffle", "Newest", "Oldest"]);
    let arrangement = localStorage.getItem("Arrangement");
    if (arrangement === null) {
      localStorage.setItem("Arrangement", eArrangement.Newest);
      arrangement = eArrangement.Newest;
    }
    switch(arrangement) {
      case eArrangement.Shuffle:
        return shuffle(ar);
      case eArrangement.Oldest:
        return ar.sort((first: number, second: number) => {
          return (first > second ? 1 : -1)
        })
      default:
      case eArrangement.Newest:
        return ar.sort((first: number, second: number) => {
          return (first > second ? -1 : 1)
        })
    }
  }

  useEffect(() => {
    const items = listGroupItems(arrange(applyFilters(offerIds)));
    setListItems(items);
  }, [offerIds, props]);

  return (
    <>
    {(listItems !== null && listItems.length > 0) ? (
      <div className="d-flex justify-content-center">
        <ListGroup className={styles.group}>
          {listItems}
        </ListGroup>
      </div>
    ) : (
      <div className="d-flex justify-content-center">
        <Spinner size={120} />
      </div>
    )}
    </>
  );
};

export default trackWindowScroll(Feed);
