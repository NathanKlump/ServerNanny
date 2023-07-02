import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

export const sendEmailAlert = async (deets) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MASTER_EMAIL_ADDRESS,
          pass: process.env.MASTER_PASSWORD,
        },
      });
    
    let mailOptions = {
        from: process.env.MASTER_EMAIL_ADDRESS,
        to: process.env.SLAVE_EMAIL_ADDRESS,
        subject: 'failed test on server health',
        text: `${deets} failed to respond to rooster call.`,
      };
    
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('There was an error: ', error);
    }
}
