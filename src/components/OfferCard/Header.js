import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';

import { consts } from '../../config';
import styles from "./Header.module.scss";

const mktplace = `${consts.apiEndpoint}/@bitcoinp2pmarketplace`

const Header = (user) => {
    const [thumbnail, setThumbnail] = useState("generic-user.jpg");
    const [friendlyName, setFriendlyName] = useState("");

    useEffect(() => {
        let friendly = ""
        if (user.user.first_name !== null) {
            friendly = user.user.first_name;
            if (user.user.last_name !== null) {
                friendly = `${friendly} ${user.user.last_name}`;
            }
        }
        setFriendlyName(friendly);
        if (user.user.thumb_name !== null) {
          // FIXME: API doesn't provide this yet
          //setThumbnail(`${mktplace}/${user.user.thumb_name}`);
        }
    }, [user]);

    return (
        <Card.Header className={styles.header}>
          <Image
            className={styles.image}
            src={thumbnail}
            roundedCircle={true}
            thumbnail={true}
          />
          <a href="/#username" className={styles.username}>{friendlyName}</a>
          <Card.Link className={styles.threeDots}>
            <Button variant="link">
              <BsThreeDots role="icon" className={styles.threeDots}/>
            </Button>
          </Card.Link>
        </Card.Header>
    );
};

export default Header;
