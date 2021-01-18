const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('URL parametes challenge'));

app.listen(5000, () => console.debug(`App running on port 5000`));
