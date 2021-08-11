const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.send(JSON.stringify(req.headers));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
