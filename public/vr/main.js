var ID = sessionStorage.getItem("id") || Math.floor((Math.random() * 9999) + 1000)
sessionStorage.setItem("id", ID)
document.getElementById("deviceId").innerHTML = `Device ID: ${ID}`

var peer = new Peer(`VRNode-${ID}`, {host:window.location.hostname, path: '/peerjs', port: window.location.port})

peer.on('call', function(call) {
	call.answer()
	call.on('stream', function(Stream) {
		document.getElementById("remote-video").srcObject = Stream
		document.getElementById("remote-video").play()
	})
})
//Default settings set
document.getElementById("screen-distance").value = localStorage.getItem("screen-distance") || 12
document.getElementById("startbtn").addEventListener("click", ()=>{
	document.getElementById("click-screen").style.display = "none"
	localStorage.setItem("screen-distance", document.getElementById("screen-distance").value || 12)
	document.getElementById("screen").setAttribute("position", `0 2.5 -${localStorage.getItem("screen-distance")}`)
})

var rotation = 0
setInterval(()=>{
	document.getElementById("sky").setAttribute("rotation", `0 ${rotation} 0`)
	rotation += 0.0025
	if (rotation >= 360) rotation = 0
}, 1000/60)