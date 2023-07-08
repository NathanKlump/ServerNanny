import express from 'express';
import fetch from 'node-fetch';
import { sendEmailAlert } from './MailManager.js';
const app = express();
const port = 3001;

const urls = ['https://background-music.onrender.com/status', 'https://herald-ppvi.onrender.com/status'];

app.get('/', (req, res) => {
    res.send('kept alive');
});


const rooster = (urls) => {
    for(let URL of urls) {
        fetch(URL)
        .then(res => res.text())
        .then(resText => console.log(`received update: "${resText}" from: "${URL}"`))
        .catch(error => console.error(`Error fetching ${URL}: `, error));
    }
}

rooster(urls);
setInterval(() => rooster(urls), 870000);

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
