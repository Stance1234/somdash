import path from "path"

async function getTemplate(req, ...paths) {
	const host = `${process.env.NODE_ENV === "production" ? "https://" : "http://"}${req.headers.host}`
	const pathUrl = path.join(host, "email_temp", ...paths)

	let response = await fetch(pathUrl)

	return response.text()
}

export default getTemplate
