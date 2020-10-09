const { createServer } = require('http');
const app = require('../app');
const http = createServer(app);

require('dotenv').config();

http.listen(process.env.PORT, ()=>{
    console.log(`listning port ${process.env.PORT}`)
})
