const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();

app.use('/api/users', require('./routes/users.routes'));

const PORT = config.get('port') || 5001;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}

start()










