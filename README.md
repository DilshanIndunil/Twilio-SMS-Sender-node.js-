# Twilio SMS Sender - Node.js

A Node.js application for sending SMS messages using the Twilio API. This project demonstrates how to send an SMS with a simple setup of Twilio's services.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Installation

Follow these steps to set up the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/DilshanIndunil/Twilio-SMS-Sender-node.js.git
  

2. Navigate to the project directory:

   ```bash
    cd Twilio-SMS-Sender-node.js
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory and add your Twilio credentials (refer to the "Environment Variables" section).

## Usage

To send an SMS, follow these steps:

1. Ensure that you have completed the installation and set up the environment variables (refer to "Environment Variables").
2. Run the application:
   ```bash
   node app.js
3. The app will send an SMS message to the phone number you configured in the .env file.

## Environment Variables
Create a .env file in the root directory and include the following variables:
  ```bash
  TWILIO_ACCOUNT_SID=your_account_sid
  TWILIO_AUTH_TOKEN=your_auth_token
  TWILIO_PHONE_NUMBER=your_twilio_phone_number
  TO_PHONE_NUMBER=phone_number_to_receive_sms 
```
- **TWILIO_ACCOUNT_SID**: Your Twilio Account SID (find it on the Twilio Console).
- **TWILIO_AUTH_TOKEN**: Your Twilio Auth Token (find it on the Twilio Console).
- **TWILIO_PHONE_NUMBER**: Your Twilio phone number.
- **TO_PHONE_NUMBER**: The phone number you want to send the SMS to.


Note: Never commit the .env file or its content to Git, as it contains sensitive information. You can use .gitignore to ensure it’s excluded.


## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and create a pull request.



