const req = require("express/lib/request");
const app  = require("./app");
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Hey i am post method'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))