import axios from 'axios';
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import OfferCard from "../OfferCard/OfferCard";
import csvToArray from "../../lib/csv";
import createEnum from "../../lib/enum";
import styles from "./Feed.module.scss";
import { consts } from '../../config';
import { trackWindowScroll } from 'react-lazy-load-image-component';


const Feed = ({refreshFeed}) => {
  const [offerIds, setOfferIds] = useState([]);

  useEffect(() => {
    console.log("API is at", consts.apiEndpoint);
    const getIds = async () => {
      try {
        let response = await axios.get(`${consts.apiEndpoint}/@bitcoinp2pmarketplace`);
        setOfferIds(response.data);
        //setOfferIds([6310, 6250, 1758, 2664]);
        console.log("offer ids are:", offerIds);
      } catch(err) {
        console.log(err);
      }
    };
    getIds();
  }, []);

  const getBookmarks = () => {
    const bookmarks = csvToArray(localStorage.getItem("Bookmarks"))[0];
    if (bookmarks[0] === "undefined") {
      return [];
    }
    return bookmarks;
  };

  const applyFilters = (items) => {
    if (items === undefined) {
      return [];
    }
    if (window.location.pathname === "/bookmarks") {
      items = getBookmarks();
    }
    // TODO: filter based on filters defined in localStorage
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

  const items = listGroupItems(arrange(applyFilters(offerIds)));

  return (
    <div className="d-flex justify-content-center">
      <ListGroup className={styles.group}>
        {items}
      </ListGroup>
    </div>
  );
};

export default trackWindowScroll(Feed);
