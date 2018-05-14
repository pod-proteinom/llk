const path = require('path');
const rootDirectory = path.dirname(__dirname);
const publicDirectory = path.join(rootDirectory, 'public');
const viewsDirectory = path.join(rootDirectory, 'views');

module.exports = {
	port: process.env.PORT,
	dir: {
		root: rootDirectory,
		views: viewsDirectory,
		public: publicDirectory
	}
}