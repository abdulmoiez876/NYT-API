import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

const apiKey = "SrwPGxzuKVPQhHCdeTfp8s92bUvmBHzp";
const baseUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

app.use(cors());
app.use(express.json());


app.get('/topStories', async (req, res) => {
    try {
        const response = await axios.get(baseUrl);
        res.status(200).send(response.data.results);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})