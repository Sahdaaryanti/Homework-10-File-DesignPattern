const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
