module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/uprate/' //имя проекта на gh-pages
    : '/' //путь для development mode
}