const wallpapers = require('./wallpapers_info.json')

module.exports = async function(context, req) {
	context.log('JavaScript HTTP trigger function processed a request.')
	const wallpaperUrl = getRandomWallpaper()

	if (wallpaperUrl.length > 0) {
		context.res = {
			// status: 200, /* Defaults to 200 */
			body: wallpaperUrl
		}
	} else {
		context.res = {
			status: 400,
			body: 'Could not get a wallpaper, please try again'
		}
	}
}
function getRandomWallpaper() {
	const randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length - 1)
	return wallpapers[randomWallpaperIndex]
}
