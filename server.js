const https = require('https');
const fs = require('fs');
const helmet = require('helmet');

require('dotenv').config();

const options = {
	key: fs.readFileSync(process.env.KEYPATH),
	cert: fs.readFileSync(process.env.CERTPATH)
};

const app = eexpress();

app.use(helmet());
app.use(express.static('www'));

app.listen(process.env.PORT);

https.createServer(options, app).listen(process.env.PORT);