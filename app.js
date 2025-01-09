const express = require("express"); // Fixed typo
const twilio = require("twilio");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

async function sendSMS() {
    try {
        const client = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );

        const message = await client.messages.create({
            body: "Hello from Twilio!",
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER,
        });

        console.log("Message sent with SID:", message.sid);
    } catch (error) {
        console.error("Error sending SMS:", error);
    }
}

sendSMS();
