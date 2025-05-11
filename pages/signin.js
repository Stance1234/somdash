import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import { NextSeo } from "next-seo"
import UserModel from "../models/user"
import logo from "../public/images/logo.png"
function Signin() {
	const [credentials, setCredentials] = useState({ email: "", password: "" })
	const router = useRouter()

	function wowInit() {
		new window.WOW().init()
	}

	async function loginRequest(e) {
		e.preventDefault()

		try {
			// const request = await fetch("/api/auth/signin/credentials", {
			//     method: "POST"
			// })
			// const data = await request.text()

			const status = await signIn("credentials", {
				redirect: false,
				...credentials,
			})

			if (status.ok === true) {
				router.push("/user")
			} else {
				throw new Error("Invalid credentials or email is not verified")
			}

			// console.log(status)
		} catch (error) {
			toast.error(error.message)
		}
	}
	return (
		<>
			<NextSeo title='Signin' />
			<div className='flex flex-col items-center py-10 dark:bg-black' style={{ minHeight: "100vh" }}>
				<div className='w-30 h-30'>
				
				</div>

				<form
					className='shadow-2xl px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0 md:w-96'
					onSubmit={loginRequest}
					encType='multipart/form-data'>
					<h2 className='text-[#0018A8]-500 text-3xl text-center mb-5'>Sign In</h2>
					<div className='flex flex-col'>
						<input
							id='email'
							name='email'
							required
							type='email'
							value={credentials.email}
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							placeholder='E-mail'
							onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
						/>
					</div>
					<div className='flex flex-col my-5'>
						<input
							id='password'
							name='password'
							required
							type='password'
							placeholder='Password...'
							value={credentials.password}
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
						/>
					</div>
					<div>
						<button
							type='submit'
							className='bg-[#0018A8] text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800 bg-[#0018A8]'>
							Sign In
						</button>
					</div>
					
				</form>

				{/* <p>
                                    <a href="/password.html">Forgot Password?</a>
                                </p> */}
				<p className='dark:text-slate-300 mt-5'>
					<Link href='/forgot-password'>
						<a className='text-[#0018A8]-500 ml-2'>Forgot password?</a>
					</Link>
				</p>
				<p className='dark:text-slate-300'>
					Dont have an account?
					<Link href='/signup'>
						<a className='text-[#0018A8]-500 ml-2'>Sign Up</a>
					</Link>
				</p>


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
