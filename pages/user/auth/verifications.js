import { useState } from "react"
import { NextSeo } from "next-seo"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import ProgressBar from "@ramonak/react-progress-bar"
import UserModel from "../../../models/user"
import IdentityModel from "../../../models/identity"
import UserLayout from "../../../components/layout/userLayout"

function ProfileVerifications({ user, hasIdentity }) {
	const router = useRouter()
	const [profile] = useState(JSON.parse(user))
	const [front, setFront] = useState("")
	const [back, setBack] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [progress, setProgress] = useState(0)

	async function handleUpload(e) {
		e.preventDefault()

		try {
			setIsLoading(true)
			if (!front || !back) {
				toast.error("❌, Enter all files before uploading")
				throw new Error("Select all files")
			}
			const fileForm = new FormData(e.target)
			// fileForm.append("front", e.target.files[0])
			// fileForm.append("back", e.target.files[1])

			const xmlHttp = new XMLHttpRequest()

			xmlHttp.open("POST", "/api/upload/identity")

			xmlHttp.addEventListener("progress", (e) => {
				if (e.lengthComputable) {
					let percentage = (e.loaded / e.total) * 100
					setProgress(percentage)
				}
			})

			xmlHttp.onreadystatechange = (e) => {
				console.log("...fined...", e)
				if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					toast.success("✔️, File upload success")
					router.push("/user/auth")
				}
			}

			xmlHttp.addEventListener("error", () => {
				toast.error("💔, File upload failed")
				setIsLoading(false)
				setProgress(0)
			})

			xmlHttp.send(fileForm)
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<UserLayout>
			<NextSeo title='Verifications' />
			<br />
			<h1 className='text-center text-black dark:text-slate-300 text-2xl'>Update Verifications</h1>
			<br />
			<div className='container'>
				{/* <div className="row">
                    <div className="col l6 s12 offset-l3">
                        <center>
                            <img
                                src={`${ profile.img ? `/uploads/${profile.img}` : "/uploads/images/camera.png"}`}
                                className="circle"
                                style={{ height: "200px" }}
                            />
                        </center>
                    </div>
                </div> */}
				<br />
				<div className='row'>
					<div className='col l6 s12 offset-l3'>
						<div className='card-panel ' style={{ borderRadius: "10px" }}>
							{profile.is_verified ? (
								<>
									<h3 className='btn-color center'>Verify Your Identity</h3>
									<p style={{ textAlign: "justify" }}>Profile verified ✅</p>
								</>
							) : hasIdentity ? (
								<>
									<h3 className='btn-color center'>Verify Your Identity</h3>
									<p style={{ textAlign: "justify" }}>
										Identity already uploaded. Admin is processing ID for verification
									</p>
								</>
							) : (
								<div className='container'>
									<h3 className='btn-color center'>Verify Your Identity</h3>
									<p style={{ textAlign: "justify" }}>
										Please verify your identity by uploading a valid government issued identification card.
										You may experience difficulties when uploading from an ios device. Make sure your browser
										has camera access in your ios settings.
									</p>
									<center>
										<form encType='multipart/form-data' onSubmit={handleUpload}>
											<input type='hidden' name='email' value={profile.email} />
											<div>
												<div className='file-field input-field'>
													<div className='btn btn-secondary'>
														<span>select front</span>
														<input
															type='file'
															accept='.jpg, .jpeg, .png'
															id='front'
															name='front'
															required
															onChange={(e) => setFront(e.target.files[0])}
														/>
													</div>
													<div className='file-path-wrapper'>
														<input
															className='file-path validate'
															type='text'
															value={front?.name || ""}
														/>
													</div>
												</div>
											</div>
											<div>
												<div className='file-field input-field'>
													<div className='btn btn-secondary'>
														<span>select back</span>
														<input
															type='file'
															accept='.jpg, .jpeg, .png'
															id='back'
															name='back'
															required
															onChange={(e) => setBack(e.target.files[0])}
														/>
													</div>
													<div className='file-path-wrapper'>
														<input
															className='file-path validate'
															type='text'
															value={back?.name || ""}
														/>
													</div>
												</div>
											</div>
											{isLoading && (
												<>
													<ProgressBar completed={progress} bgColor='#9f4291' />
													<br />
												</>
											)}
											<div>
												<button disabled={isLoading} type='submit' className='btn btn-full'>
													{isLoading ? <Oval height={30} width={30} /> : <span>Upload</span>}
												</button>
											</div>
										</form>
									</center>
								</div>
							)}
						</div>
					</div>
				</div>
				<div style={{ marginBottom: "20px" }}></div>
			</div>
		</UserLayout>
	)
}

export default ProfileVerifications

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				const identities = await IdentityModel.findOne({ email: user.email })
				return {
					props: {
						user: JSON.stringify(user),
						hasIdentity: identities ? true : false,
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
