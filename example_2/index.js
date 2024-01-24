// const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
	console.log('Server is ready!!');
	console.log(`Server is running on localhost:${PORT}`);
});
