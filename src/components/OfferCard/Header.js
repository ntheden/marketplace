import React, { useState, useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';

import styles from "./Header.module.scss";

const Header = (user) => {
    const [postMenuVisibility, setPostMenuVisibility] = useState(false);
    const [photo, setPhoto] = useState("generic-user.jpg");
    const [friendlyName, setFriendlyName] = useState("");

    useEffect(() => {
        let name = ""
        if (user.user.first_name !== null) {
            name = user.user.first_name;
            if (user.user.last_name !== null) {
                name = `${name} ${user.user.last_name}`;
            }
        } else {
            name = user.user.username;
        }
        setFriendlyName(name);
    }, [user]);

    return (
        <Card.Header className={styles.header}>
          <Image
            className={styles.image}
            src="generic-user.jpg"
            roundedCircle={true}
            thumbnail={true}
          />
          <a href="/#username" className={styles.username} />
        </Card.Header>
    );
};

export default Header;
