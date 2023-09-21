const express = require('express');
const cors = require('cors');
const {default: axios} = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzdDG--DpiMAfL_mrwZoArXQAthbHpDr9vQc2-3wblpMvWI62_6hl1fR31_CWOrcaLuLA/exec';

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post(googleScriptUrl, req.body);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error with POST request: ' + error.message);
    }
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Proxy server listening on port ${port}`));
