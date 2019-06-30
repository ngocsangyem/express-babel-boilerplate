import express from 'express';
const router = express.Router();

/**
 * Get all user
 */

const getUsers = router.get('/', (req, res, next) => {
	res.send('Get all users');
});

export default getUsers;
