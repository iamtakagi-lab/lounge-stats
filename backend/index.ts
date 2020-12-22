const express = require('express')

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API Routes
app.use('/api/', require('./router'))

// ポートはheroku用の環境変数とローカル用の手動を設定しておく
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
    console.log(`Listening at http://localhost:${app.get('port')}`)
})