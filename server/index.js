// src: https://stackoverflow.com/questions/48848964/configuring-cors-with-express-and-making-requests-on-the-front-end-with-axios
// src: https://expressjs.com/en/starter/installing.html
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/steamdata/:gameId", async (req, res) => {
  const gameId = req.params.gameId;
  const url = `https://store.steampowered.com/api/appdetails?appids=${gameId}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    res.json(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
