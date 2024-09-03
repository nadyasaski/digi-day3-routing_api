
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
