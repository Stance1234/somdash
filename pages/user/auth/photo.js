import { useState } from "react"
import Head from "next/head"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import ProgressBar from "@ramonak/react-progress-bar"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { BASE_IMG_URL } from "../../../config"
import UserModel from "../../../models/user"
import UserLayout from "../../../components/layout/userLayout"
import { NextSeo } from "next-seo"

function ProfilePhoto({ user }) {
	const router = useRouter()
	const [profile] = useState(JSON.parse(user))
	const [isUploading, setIsUploading] = useState(false)
	const [progress, setProgress] = useState(0)
	const [img, setImg] = useState()

	async function handleUpload(e) {
		e.preventDefault()

		try {
			setIsUploading(true)
			if (!img) {
				toast.error("Select a file before uploading")
				throw new Error("Select all files")
			}
			const fileForm = new FormData(e.target)
			// fileForm.append("front", e.target.files[0])
			// fileForm.append("img", e.target.files[1])

			const xmlHttp = new XMLHttpRequest()

			xmlHttp.open("PUT", "/api/upload/profile-img")

			xmlHttp.addEventListener("progress", (e) => {
				if (e.lengthComputable) {
					let percentage = (e.loaded / e.total) * 100
					setProgress(percentage)
				}
			})

			xmlHttp.onreadystatechange = (e) => {
				// console.log("...fined...")
				if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					toast.success("File upload success")
					router.push("/user/auth/profile")
				}
			}

			xmlHttp.addEventListener("error", () => {
				toast.error("File upload failed")
				setIsUploading(false)
				setProgress(0)
			})

			xmlHttp.send(fileForm)
		} catch (error) {
			setIsUploading(false)
		}
	}

	return (
		<UserLayout>
			<NextSeo title={`${profile.firstname} Profile Image`} />
			<br />
			<h1 className='center'>Profile Image</h1>
			<br />
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12 offset-l3'>
						<center>
							<img
								src={`${profile.img ? `${BASE_IMG_URL}${profile.img}` : "/uploads/images/camera.png"}`}
								className='circle'
								style={{ height: "200px" }}
							/>
						</center>
					</div>
				</div>
				<br />
				<div className='row'>
					<div className='col l6 s12 offset-l3'>
						<form encType='multipart/form-data' onSubmit={handleUpload}>
							<div className='flex flex-col mb-4'>
								<label
									className='text-base cursor-pointer bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'
									htmlFor='img'>
									select image
								</label>
								<input
									type='file'
									accept='.jpg, .jpeg, .png'
									id='img'
									name='img'
									className='hidden'
									required
									onChange={(e) => setImg(e.target.files[0])}
								/>
								{img && <span className='text-[#0018A8]-200'>{img.name}</span>}
							</div>
							{isUploading && (
								<>
									<ProgressBar completed={progress} bgColor='#9f4291' />
									<br />
								</>
							)}
							<div>
								<button
									disabled={isUploading}
									type='submit'
									className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
									{isUploading ? <Oval height={30} width={30} /> : <span>Upload</span>}
								</button>
							</div>
						</form>
					</div>
				</div>
				<div style={{ marginBottom: "20px" }}></div>
			</div>
		</UserLayout>
	)
}

export default ProfilePhoto

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				return {
					props: {
						user: JSON.stringify(user),
					},
				}
			}
		}

		return {
			redirect: {
				destination: "/signin",
				permanent: false,
			},
		}
	} catch (error) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
}
