const fs = require('fs');
const { response } = require('../../app');

const getAllUsers = (req, res) => {
	// console.log(process.cwd());

	// res.sendFile(process.cwd() + '/src/data/users.json');

	const data = JSON.parse(
		fs.readFileSync(process.cwd() + '/src/data/users.json', 'utf-8')
	);

	res.json({
		status: 'ok',
		msg: 'Get all users successfuly',
		data: data,
	});
};

const createUser = (req, res) => {
	// console.log(req.query);
	res.send('User created successfuly');
};

const updateUser = (req, res) => {
	const { idUser } = req.params;
	// const { name, edad, email } = req.body;

	/**
	 * {
	 * name:req.body.name,
	 * edAd: 23,
	 * camisetas: []
	 * email: email@email.com
	 * }
	 */

	res.send(idUser);
};

module.exports = {
	getAllUsers,
	createUser,
	updateUser,
};
