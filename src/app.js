// import package
import express from 'express';
import mongodb from 'mongodb';
import path from 'path';
import bodyParser from 'body-parser';

// Delear app
const mongoClient = mongodb.MongoClient;
const port = 8000;

// Call express
const app = express();

// Call route
import * as usersRouter from './routes/users/users.routes';

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Handle json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Init app
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/users', [
	usersRouter.getUser,
	usersRouter.getUsers,
	usersRouter.updateUser,
	usersRouter.addUser,
	usersRouter.deleteUser
]);

// app open port
app.listen(port, () => {
	console.log(`Let rock at localhost:${port}`);
});
