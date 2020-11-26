Tracker Client App
==================

To run the app:

1) Start up tracker-server: `yarn dev`
2) Start up Ngrok in another terminal: `ngrok http 3000`
3) Update the hard-coded `baseUrl` in `src/api/tracker.js` with the new `http://<your-ngrok-server>.ngrok.io`
4) Then in yet another terminal inside this project start expo: `yarn start`
