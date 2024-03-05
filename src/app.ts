import 'dotenv/config'

import express from "express";
import path from "path";
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use('/api', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app