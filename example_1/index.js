const app = require('./app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
	console.log(`Server is ready!! \nServer running on localhost:${PORT}`);
});
