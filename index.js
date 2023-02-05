const express = require('express');
const nodemailer = require('nodemailer');
// const app = express();
// const port = 3030;

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.in',
    port: 465,
    secure: true, //ssl
    auth: {
        user:"sender-mail",
        pass:"pass"
    }
});

const options = {
    from: "mail",
    to: "mail",
    subject: "Sending email using nodemailer.",
    text: "This is a mail using nodemailer using node.js!"
}
transporter.sendMail(options, (err, info)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Sent: "+ info.response);
});

// app.listen(port, ()=>{
//     console.log('Nodemailer project running');
// })n