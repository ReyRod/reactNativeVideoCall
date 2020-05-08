import 'dotenv/config';
import express from 'express';

import twilio from 'twilio';
import ngrok from 'ngrok';
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const app = express();

app.get('/getToken', (req, res) => {
  if (!req.query || !req.query.userName) {
    return res.status(400).send('Username parameter is required');
  }
  const accessToken = new AccessToken(
    process.env.ACCOUNT_SID,
    process.env.API_KEY_SID,
    process.env.API_KEY_SECRET,
  );

  // Set the Identity of this token
  accessToken.identity = req.query.userName;

  // Grant access to Video
  var grant = new VideoGrant();
  accessToken.addGrant(grant);

  // Serialize the token as a JWT
  var jwt = accessToken.toJwt();
  return res.send(jwt);
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`),
);

ngrok.connect(process.env.PORT).then((url) => {
  console.log(`Server forwarded to public url ${url}`);
});
