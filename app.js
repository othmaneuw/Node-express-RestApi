const express = require("express");
const app = express();
const postRouter = require("./routes/posts");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');



//Middlewares
app.use(cors());
app.use(express.json());

app.use('/posts',postRouter);


app.get('/',(req,res)=>{
    res.send(process.env.DB_CONNECT);
})
//app.use(bodyParser.json());


app.listen(3000);

