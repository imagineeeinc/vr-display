import express from 'express'
import { ExpressPeerServer } from 'peer'
import * as http from 'http'

const port = process.env.PORT || 5000

import * as path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const server = http.createServer(app)
const peerServer = ExpressPeerServer(server, {
	path: "/",
})
app.use("/peerjs", peerServer)

app.use(express.static(path.join(__dirname, './public')))

server.listen(port, () => {
	console.log(`Server is up at port http://localhost:${port}`);
})