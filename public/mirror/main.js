var sharing = false

document.getElementById("share").addEventListener("click", () => {
	if (sharing == true) {
		alert("sharing already.")
		return
	} else {
		sharing = true
		document.getElementById("share").disabled = true
	}
	if (document.getElementById("deviceId").value == "") {
		alert("please provide the device you want to connect to.")
		return
	}
	mirrorScreen()
})

async function mirrorScreen() {
	const stream = await startScreenRecording()
	document.getElementById("preview").srcObject = stream
	document.getElementById("preview").addEventListener('loadedmetadata', () => {
    document.getElementById("preview").play()
	})
	var peer = new Peer(`mirrorNode${Math.floor((Math.random() * 9999) + 1000)}`,{host:window.location.hostname, path: '/peerjs', port: window.location.port})
	if (stream) {
    const connection = peer.call(document.getElementById("deviceId").value, stream)
  }
}
async function startScreenRecording() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    return stream;
  } catch (error) {
    console.error('Error capturing screen:', error);
    return null;
  }
}