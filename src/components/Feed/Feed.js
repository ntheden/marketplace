import OfferCard from "../OfferCard/OfferCard";
import { ListGroup } from "react-bootstrap";

import styles from "./Feed.module.scss";

const Feed = () => {
  return (
    <list className="d-flex justify-content-center">
      <ListGroup className={styles.group}>
        <ListGroup.Item className={styles.item}>
          <OfferCard card={0} />
        </ListGroup.Item>
        <ListGroup.Item className={styles.item}>
          <OfferCard card={1} />
        </ListGroup.Item>
        <ListGroup.Item className={styles.item}>
          <OfferCard card={2} />
        </ListGroup.Item>
        <ListGroup.Item className={styles.item}>
          <OfferCard card={3} />
        </ListGroup.Item>
      </ListGroup>
    </list>
  );
};

export default Feed;
