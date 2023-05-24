var sharing = false

document.getElementById("details").addEventListener("submit", (e) => {
	e.preventDefault()
	sharing = true
	document.getElementById("share").disabled = true
	document.querySelectorAll("details").forEach((ele)=>ele.disabled = true)
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
    const stream = await navigator.mediaDevices.getDisplayMedia({
			video: {
				mandatory: {
					maxWidth: Number(document.getElementById("width").value) || 720,
					maxFrameRate: Number(document.getElementById("fps").value) || 60
				},
				quality: Number(document.getElementById("quality").value) || 1
			},
			audio: true,
			surfaceSwitching: "include",
			systemAudio: "include"
		});
    return stream;
  } catch (error) {
    console.error('Error capturing screen:', error);
    return null;
  }
}