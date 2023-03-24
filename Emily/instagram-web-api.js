// Packages
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

/* removed so i put them directly
const { username, password } = process.env // Only required when no cookies are stored yet
*/

const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ 
  username: 'elena.final_fail', 
  password: 'bb7mp44425', 
  cookieStore 
})

;(async () => {
	//** login with or without password if cookies exist
  await client.login()

	//** get profile
  const profile = await client.getProfile()
  console.log(profile)

})()


