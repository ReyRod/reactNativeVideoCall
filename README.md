# Video Calls in React Native backed by Twilio

Fully functional React Native app + Node Rest API that features Video Calls backed by Twilio.

## Twilio Setup

- Register on Twilio https://www.twilio.com/try-twilio and verify both email and phone number.
- Login and navigate to https://www.twilio.com/console/video/dashboard and click on Show API Credentials and save AccountSID.
- Navigate to https://www.twilio.com/console/video/project/api-keys and click on plus button to create a new API Key, create and save the SID and Secret.

## Server Startup (Inside server folder)

- Navigate to `server/` and copy `.env.copy` to `.env` and fill out with the saved Twilio values.
- Install dependencies with `yarn`.
- Run the server with `yarn start` and save the returned API url

## App Startup (Root folder)

- Install dependencies with `yarn && npx pod-install ios`.
- Copy `.env.copy` to `.env` and fill out the API_URL with the provided by the server.
- Run the app on an IOS connected device with `nxp react-native run-ios --device`
- Run the app on an Android connected device by grabbing device id from adb with `adb devices` and then running with `npx react-native run-android --deviceId XXXXXXXXX`
