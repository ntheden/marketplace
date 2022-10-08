import { Card, Image } from "react-bootstrap";

import Header from "./Header";
import styles from "./OfferCard.module.scss";

const OfferCard = (props) => {
  const user = {
    user: {
      first_name: 'hi',
      last_name: 'there'
    }
  }
  return (
    <Card>
      <Header user={user} />
    <Image
        className="w-80"
        src={props.img}
        thumbnail={true}
    />
      <Card.Footer className="footer">
        {props.txt}
      </Card.Footer>
    </Card>
  );
};

export default OfferCard;
