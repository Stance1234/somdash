import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getSession } from "next-auth/react"
import { Oval } from "react-loader-spinner"
import ProgressBar from "@ramonak/react-progress-bar"
import { toast } from "react-toastify"
import mongoose from "mongoose"
import UserModel from "../../../../models/user"
import AuthUserLayout from "../../../../components/layout/authUserLayout"


function UserDepositUpload() {
	const router = useRouter()
	const [proof, setProof] = useState(null)
	const [isUploading, setIsUploading] = useState(false)
	const [progress, setProgress] = useState(0)

	const { transactionId } = router.query

	async function handleUpload(e) {
		e.preventDefault()

		try {
			setIsUploading(true)
			if (!proof) {
				toast.error("Select a file before uploading")
				throw new Error("Select all files")
			}
			const fileForm = new FormData(e.target)
			fileForm.append("transactionId", transactionId)

			
			var xmlHttp = new XMLHttpRequest()
			xmlHttp.open("POST", "/api/upload/proof")
			xmlHttp.addEventListener("progress", (e) => {
				if (e.lengthComputable) {
					let percentage = (e.loaded / e.total) * 100
					setProgress(percentage)
				}
			})
			
			xmlHttp.onreadystatechange = (e) => {
				if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					toast.success("File upload success")
					router.push("/user/deposits/list")
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
		xmlHttp.addEventListener("error", (event) => {
			console.error("An error occurred while trying to upload the file:", event)
		  })
	}

	
	  

	return (
		<AuthUserLayout>
			<Head>
				<title>Upload Payment Proof - Octatradeglobal</title>
			</Head>
			<section className='container row'>
				<div className='shadow-2xl px-10 py-5 pt-0 rounded-xl dark:border dark:border-[#0018A8]-500 max-w-xl mx-10 md:mx-auto'>
					<form onSubmit={handleUpload} encType='multipart/form-data'>
						<h4 className='text-[#0018A8]-500 text-3xl mt-5 mb-5'>Upload Payment Proof</h4>

						<div className='flex flex-col mb-4'>
							<label
								className='text-base cursor-pointer bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'
								htmlFor='proof'>
								Select Proof
							</label>
							<input
								type='file'
								className='hidden'
								accept='.jpg, .png, .jpeg'
								id='proof'
								name='proof'
								required
								onChange={(e) => setProof(e.target.files[0])}
							/>
						</div>
						{proof && <span className='text-[#0018A8]-200'>{proof.name}</span>}
						{isUploading && (
							<>
								<ProgressBar completed={progress} bgColor='#9f4291' />
							</>
						)}
						<div>
							<button
								disabled={isUploading}
								name='submit'
								type='submit'
								className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isUploading ? <Oval height={30} width={30} /> : <span>Submit</span>}
							</button>
						</div>
					</form>
				</div>
			</section>
		</AuthUserLayout>
	)
}

export default UserDepositUpload

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				return {
					props: {},
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
		console.log(error)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
}
