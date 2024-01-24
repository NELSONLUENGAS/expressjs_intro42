const Saludar = (request, response) => {
	response.json({
		status: 'ok',
		message: 'Hola soy el get de users',
	});
};

const CrearSaludo = (request, response) => {
	// console.log(request);
	response.json({
		status: 'ok',
		message: 'Hola soy el get de users',
	});
};

module.exports = {
	Saludar,
	CrearSaludo,
};
