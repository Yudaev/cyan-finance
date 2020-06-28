const express = require('express');
const mongo = require('mongoose');

const app = express();
app.use(express.json());

mongo.connect('mongodb://localhost/geekapp-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('DB connected!') })
.catch(() => { console.log('DB offline!') })

app.listen(3300, () => {
    console.log('listening @ port 3300...');
});
