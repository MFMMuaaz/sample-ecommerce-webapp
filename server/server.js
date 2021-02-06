const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const { port } = require('./configurations/config')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}...`));
