const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route that accepts the gameId as a parameter
app.get('/steamdata/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    const url = `https://store.steampowered.com/api/appdetails?appids=${gameId}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        // Log the response data
        console.log(data);

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
