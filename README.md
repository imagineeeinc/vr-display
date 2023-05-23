<h1 align="center">Web VR Display</h1>
<h3 align="center">Use WebXR to create a Virtual Desktop on any VR Compatible Browser</h3>

WebXR is a new Web API available for the web that allows you to display AR and VR content straight through your browser. This project uses the [A-Frame library](https://aframe.io/) to easily create WebXR experiences. It uses [Peerjs](https://peerjs.com/), using [web sockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), and the [MediaStream API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) to stream your desktop across the network to your VR device.

## Usage
### Setup
1. Clone this repo
2. install dependencies using:
```bash
npm i
# yarn
yarn i
# pnpm (recomended for fast and small package sizes)
pnpm i
```
3. Run `npm start` (or `yarn start` or `pnpm start`) to start the web server
### Connection
4. navigate to localhost:5000/mirror on your the desktop you want to stream from (phones don't support the MediaStreams API), don't do anything yet
5. Open localhost:5000/vr on the VR device (mobile phones with VR support), if you are accessing the the server from a different device replace localhost with the IP address of the device; however WebXR only works with https sites, my solution was to use [Chrome remote debugging Android](https://developer.chrome.com/docs/devtools/remote-debugging/) and forward port 5000, for iPhone doesn't support WebXR. Note: the VR has not been tested on VR headsets.
6. Tap the screen on the vr device/ phone and and find the device ID in the top left corner, put that number into the device ID text box on the computer being streamed from and click share.
7. Select what you want to share and enable audio sharing if you want audio to be streamed. A preview should pop up on the streaming device.
8. On the VR device you the stream will open on a window in the VR environment.
9. - If your device supports AR a button for AR should be at the bottom that allows you to view the display in you environment
	- if your device support VR a button for VR should be at the bottom that should open the experience in VR
10. This app doesn't support input and you will be required to control the streaming device using a mouse, keyboard or controller.

## Credits
- [A-Frame library](https://aframe.io/)
- [Peerjs](https://peerjs.com/)
- [Galaxy Background (eso.org)](https://www.eso.org/public/images/eso0932a/)

## Licence
This project is under MIT Licence