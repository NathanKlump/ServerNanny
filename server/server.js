import express from "express";
import fetch from "node-fetch";
import moment from "moment";

const app = express();
const port = 3001;

const urls = [
  "https://herald-of-the-obese.onrender.com/status",
];

app.get("/", (req, res) => {
  res.send("kept alive");
});

const rooster = (urls) => {
  let date = moment().format("HHmm");
  let integerDate = parseInt(date, 10);
  if (
    (integerDate >= 930 && integerDate <= 2400) ||
    (integerDate >= 0 && integerDate < 100)
  ) {
    for (let URL of urls) {
        console.log(`sent waker to ${URL}`)
      fetch(URL)
        .then((res) => res.text())
        .then((resText) =>
          console.log(`received update: "${resText}" from: "${URL}"`),
        )
        .catch((error) => console.error(`Error fetching ${URL}: `, error));
    }
  }
};

rooster(urls);
setInterval(() => rooster(urls), 870000);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
