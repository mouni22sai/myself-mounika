const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('./dist/myself-mounika'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/myself-mounika/'});
});

app.listen(process.env.PORT || 3000, (err, data) => {
    console.log('Listening on 3000');
  })