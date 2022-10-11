
// proof of concept items
const user = {
  user: {
    first_name: 'hi',
    last_name: 'there'
  }
}
const mktplace = "http://localhost:8002/v1/telegram/@bitcoinp2pmarketplace";
const pocItems = [
  {
    img: `${mktplace}?msg_id=6310&thumb=1`,
    txt: (<p>eah they won't release the product to me, probably because it fails some surveillance checks, which annoys me greatly. You can use your real identity to buy it though. They just really want to know who you are, they seem to care more about that than selling product </p>)
  }, {
    img: `${mktplace}?msg_id=6250&thumb=1`,
    txt: "Hi this is long text today and how are you btw",
  }, {
    img: `${mktplace}?msg_id=1758&thumb=1`,
    txt: "Hi",
  }, {
    img: "no-photo-dark.png",
    txt: "Hi you",
  },
];

