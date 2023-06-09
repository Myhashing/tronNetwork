const express = require('express');
var cors = require('cors');

const tronRoutes = require('./routes/tron');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/api/tron', tronRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
