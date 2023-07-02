import express from 'express';
import fetch from 'node-fetch';
import { sendEmailAlert } from './MailManager.js';
const app = express();
const port = 3001;

const checkStatus = (status, URL) => {
    if (status === 'active') {
        //sendEmailAlert(URL);
        console.log('GO')
    }
}

const rooster = () => {
    let URL = 'https://background-music.onrender.com/status';
    fetch(URL)
    .then(res => res.text())
    .then(resText => checkStatus(resText, URL))
}

rooster();
setInterval(rooster, 870000);

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
