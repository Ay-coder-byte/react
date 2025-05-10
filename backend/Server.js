const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use('/auth',authRoute)





app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});