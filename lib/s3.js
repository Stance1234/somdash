import AWS from "aws-sdk"

const s3 = new AWS.S3({
	dirName: 'demo',
	region: process.env.S3_REGION,
	credentials: {
		accessKeyId: process.env.S3_UPLOAD_KEY,
		secretAccessKey: process.env.S3_UPLOAD_SECRET,
	},
})

export default s3
