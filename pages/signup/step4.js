import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import ProgressBar from "@ramonak/react-progress-bar"
import UserLayout from "../../components/layout/userLayout"

function Signup4() {
	const [front, setFront] = useState()
	const [back, setBack] = useState()
	const [isUploading, setIsUploading] = useState(false)
	const [progress, setProgress] = useState(0)
	const [email, setEmail] = useState("")

	const router = useRouter()

	useEffect(() => {
		if (typeof window !== "undefined") {
			const prevStringData = localStorage.getItem("TRADE_SIGNUP_PROCESS")
			const prevData = JSON.parse(prevStringData) || {}

			setEmail(prevData.email)
		}

		// toast.error('🦄 Wow so easy!')
	})

	async function handleUpload(e) {
		e.preventDefault()

		try {
			setIsUploading(true)
			if (!front || !back) {
				toast.error("Enter all files before uploading")
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
					toast.success("File upload success")
					router.push("/user")
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

	function handleSkip(e) {
		e.preventDefault()
		router.push("/user")
	}

	return (
		<UserLayout>
			<div className='flex flex-col items-center py-10 dark:bg-black min-h-screen'>
				<div className='shadow-2xl px-10 py-5 pt-0 rounded-xl dark:border dark:border-[#0018A8]-500 max-w-xl mx-10 md:mx-auto'>
					<form encType='multipart/form-data' onSubmit={handleUpload}>
						<h3 className='text-[#0018A8]-500 text-5xl mt-5'>Verify Your Identity</h3>
						<p className='text-justify dark:text-slate-300 my-5'>
							Please verify your identity by uploading a valid government issued identification card. You may experience
							difficulties when uploading from an ios device. Make sure your browser has camera access in your ios
							settings.
						</p>
						<div className='flex flex-col mb-4'>
							<label
								className='text-base cursor-pointer bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'
								htmlFor='front'>
								select front
							</label>
							<input
								type='file'
								className='hidden'
								accept='.jpg, .jpeg, .png'
								id='front'
								name='front'
								required
								onChange={(e) => setFront(e.target.files[0])}
								// value={front}
							/>
							{front && <span className='text-[#0018A8]-200'>{front.name}</span>}
						</div>
						<div className='flex flex-col mb-4'>
							<label
								className='text-base cursor-pointer bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'
								htmlFor='back'>
								select back
							</label>
							<input
								type='file'
								accept='.jpg, .jpeg, .png'
								id='back'
								name='back'
								className='hidden'
								required
								onChange={(e) => setBack(e.target.files[0])}
							/>
							{back && <span className='text-[#0018A8]-200'>{back.name}</span>}
						</div>
						{isUploading && (
							<>
								<ProgressBar completed={progress} bgColor='#9f4291' />
							</>
						)}
						<div className='my-4'>
							<button
								disabled={isUploading}
								type='submit'
								className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isUploading ? (
									<Oval height={30} width={30} />
								) : (
									<span className=' flex justify-center gap-3'>
										<span>Upload</span>
										<svg
											className='w-6 h-6 fill-slate-300'
											version='1.1'
											id='Capa_1'
											viewBox='0 0 489.95 489.95'>
											<g>
												<g>
													<path d='M431.175,427.85v-200.5c0-34.2-27.9-62.1-62.1-62.1h-40.2c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h40.2    c20.7,0,37.6,16.9,37.6,37.6v200.6c0,20.7-16.9,37.6-37.6,37.6h-248.2c-20.7,0-37.6-16.9-37.6-37.6v-200.7    c0-20.7,16.9-37.6,37.6-37.6h40.2c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-40.2c-34.2,0-62.1,27.9-62.1,62.1v200.6    c0,34.2,27.9,62.1,62.1,62.1h248.2C403.375,489.95,431.175,462.15,431.175,427.85z' />
													<path d='M152.475,104.55c4.8,4.8,12.5,4.8,17.3,0l63-63v229.8c0,6.8,5.5,12.3,12.3,12.3c6.8,0,12.3-5.5,12.3-12.3V41.65l63,63    c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9c-4.6-4.6-12.7-4.6-17.3,0l-83.9,83.9    C147.675,92.05,147.675,99.75,152.475,104.55z' />
												</g>
											</g>
										</svg>
									</span>
								)}
							</button>
						</div>
					</form>
					<form onSubmit={handleSkip} autoComplete='off'>
						<div>
							<button
								type='submit'
								className='bg-gray-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								Skip
							</button>
						</div>
					</form>
				</div>
			</div>
		</UserLayout>
	)
}

export default Signup4
