const express = require("express");
var cors = require('cors')
const router = require("./routes");
const session = require("./middleware/session");
// const corsMw = require("./middleware/cors");
const app = express();

require('dotenv').config();

app.use(cors())

app.use(express.json());

const connectDB = require("./db/db");
connectDB();
// if you run behind a proxy (e.g. nginx)
// app.set('trust proxy', 1);

// setup CORS logic
// app.options("*", corsMw);
// app.use(corsMw);
app.get("/test", (req, res)=> {
    res.send({
        status: 200,
        message: "Api is working"
    })
})
app.use(session);
app.use(router);

app.listen(8080, () => console.log("server is running on port 8080"));