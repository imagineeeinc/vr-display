var ID = sessionStorage.getItem("id") || Math.floor((Math.random() * 9999) + 1000)
sessionStorage.setItem("id", ID)
document.getElementById("deviceId").innerHTML = `Device ID: ${ID}`

var peer = new Peer(ID, {host:window.location.hostname, path: '/peerjs', port: window.location.port})

peer.on('call', function(call) {
	call.answer()
    call.on('stream', function(Stream) {
      document.getElementById("remote-video").srcObject = Stream
			document.getElementById("remote-video").play()
    })
})
setTimeout(()=>{
	document.getElementById("click-screen").style.display = "none"
}, 5000)