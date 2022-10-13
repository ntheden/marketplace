import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner, Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Header from "./Header";
import styles from "./OfferCard.module.scss";
import { consts } from '../../config';
import { getOffer } from '../../lib/offers';


const LoadingUser = {
  first_name: "Loading...",
  last_name: "",
  username: "",
  last_online_date: "",
  status: "UserStatus.OFFLINE",
  thumb_name: "generic-user.jpg",
  media: [],
}

const mktplace = `${consts.apiEndpoint}/@bitcoinp2pmarketplace`

const OfferCard = ({offerId}) => {
  const [user, setUser] = useState(LoadingUser);
  const [data, setData] = useState({});
  const [imageLink, setImageLink] = useState("no-photo-dark.png");

  useEffect(() => {
    const promise = getOffer(offerId);
    promise.then((resolved) => {
      setData(resolved.data);
    }).catch((e) => console.log(e));
  }, [offerId]);

  useEffect(() => {
    if (data.media !== undefined && data.media.length > 0) {
      setImageLink(`${mktplace}?msg_id=${offerId}&thumb=1`);
    }
    if (data.user !== undefined) {
      setUser(data.user);
    }
  }, [data, offerId]);

  return (
    <>
    {Object.keys(data).length === 0 ? (
      <Card className={styles.card}>
        <Header user={user} />
        <NavLink to="/offer" className="nav-link">
          <div className={styles.content}>
            <Spinner />
            <div className={styles.textBorder}>
              <div className={styles.text}>
                 <p>Still loading ...</p>
              </div>
            </div>
          </div>
        </NavLink>
        <Card.Footer className={styles.footer}/>
      </Card>
    ) : (
      <Card className={styles.card}>
        <Header user={user} />
        <NavLink to="/offer" className="nav-link">
          <div className={styles.content}>
            <LazyLoadImage
                className={styles.image}
                src={imageLink}
            />
            <div className={styles.textBorder}>
              <div className={styles.text}>
                 {data.message.caption}
              </div>
            </div>
          </div>
        </NavLink>
        <Card.Footer className={styles.footer}/>
      </Card>
    )}
    </>
  );
};

export default OfferCard;
