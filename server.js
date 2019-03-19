const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.listen(port, () => console.log(`listening on port ${port}`));
require('./Backend/routes.js/index.js')(app);
require('./config/mongoose.js').mongooseSetSchemas();
