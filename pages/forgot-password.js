import { useState } from "react"
import Image from "next/image"
import Script from "next/script"
import { toast } from "react-toastify"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import { NextSeo } from "next-seo"
import { motion } from "framer-motion"
import UserModel from "../models/user"
import logo from "../public/images/logo.png"

function Signin() {
	const [email, setEmail] = useState("")
	const [emailSent, setEmailSent] = useState(false)
	const [isSending, setIsSending] = useState(false)
	// const router = useRouter()

	async function resetPassword(e) {
		e.preventDefault()

		setIsSending(true)

		try {
			const response = await fetch("/api/auth/reset-password/send-email", {
				method: "POST",
				body: JSON.stringify({ email }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				setEmailSent(true)
				setIsSending(false)
			} else {
				throw new Error(message)
			}
			// console.log(status)
		} catch (error) {
			setIsSending(false)
			toast.error(error.message)
		}
	}
	return (
		<>
			<NextSeo title='Forgot password' />
			<div className='flex flex-col items-center py-10 dark:bg-black' style={{ minHeight: "100vh" }}>
				<div className='w-30 h-30'>
					<Image layout='intrinsic' src={logo} alt='Octatradeglobal' />
				</div>

				{emailSent === true ? (
					<div className='flex flex-col items-center shadow-2xl px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0 md:w-96'>
						<span className='w-20 h-20 block'>
							<svg
								className='stroke-black dark:stroke-slate-300'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<motion.path
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 1 }}
									d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></motion.path>
								<motion.polyline
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 1 }}
									transition={{ delay: 0.5 }}
									points='22,6 12,13 2,6'></motion.polyline>
							</svg>
						</span>
						<motion.div
							className='flex flex-col gap-y-3 text-center dark:text-slate-300'
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.5 }}>
							<h4 className='text-4xl'>Check your email</h4>
							<p className='text-base text-center'>
								A password reset link has been sent to <span className='font-bold'>{email}</span>.
							</p>
							<p>
								Did not recieve email?{" "}
								<button
									disabled={isSending}
									onClick={resetPassword}
									className={`text-[#0018A8]-500 hover:text-[#0018A8]-900 ${
										isSending && "animate-pulse cursor-not-allowed"
									}`}>
									{isSending ? "Sending..." : "Click to resend"}
								</button>
							</p>
						</motion.div>
					</div>
				) : (
					<form
						className='shadow-2xl px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0 md:w-96'
						onSubmit={resetPassword}
						encType='multipart/form-data'>
						<h2 className='text-[#0018A8]-500 text-3xl text-center mb-5'>Forgot Password?</h2>
						<div className='flex flex-col mb-4'>
							<input
								id='email'
								name='email'
								required
								type='email'
								value={email}
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								placeholder='E-mail'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<button
								type='submit'
								disabled={isSending}
								className={`bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800 ${
									isSending && "animate-pulse cursor-not-allowed"
								}`}>
								{isSending ? "Sending..." : "Reset Password"}
							</button>
						</div>
					</form>
				)}
			</div>

			<Script strategy='lazyOnload' src='https://unpkg.com/default-passive-events' />
		</>
	)
}

export default Signin

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				return {
					redirect: {
						destination: "/user",
						permanent: false,
					},
				}
			}
		}

		return {
			props: {},
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
