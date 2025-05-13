/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import Head from 'next/head'
import { toast } from "react-toastify"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import { NextSeo } from "next-seo"
import UserModel from "../../models/user"

function LogIn() {
	const [credentials, setCredentials] = useState({ email: "", password: "" })
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

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
			<Head>
				<link rel='stylesheet' href='/css/bitpay.css' />
			</Head>
			<NextSeo title='Signin' />
			<div id='app' className='flex'>
				<div
					style={{ width: "100%" }}
					className='mw6 l-authenticationCard-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<div className='react-reveal pv4-5 ph4 ph4-5-l center-l relative'>
		
						<div className='f4 f3-m f3-l fw7 lh-title tracked-condensed mb3'>Log In</div>
						<div className='f5 f5-m f4-l lh-copy mb3'>to continue to yourtrade</div>
						<form onSubmit={loginRequest}>
							<div className='mb3'>
								<div className='l-formContent'>
									<div className='l-formContentEditable'>
										<div className='bp3-input-group l-input-group bp3-large l-logInPage-email'>
											<input
												type='email'
												// data-testid='email'
												tabIndex={1}
												className='bp3-input'
												name='email'
												placeholder='Email Address'
												disabled={isLoading}
												value={credentials.email}
												onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
											/>
										</div>
									</div>
								</div>
								<div className='l-formContent'>
									<div className='l-formContentEditable'>
										<div className='bp3-input-group l-input-group bp3-large l-logInPage-password'>
											<input
												type='password'
												tabIndex={2}
												className='bp3-input'
												name='password'
												placeholder='Password'
												style={{ paddingRight: "122px" }}
												disabled={isLoading}
												value={credentials.password}
												onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
											/>
											<span className='bp3-input-action'>
												<a
													className='bp3-button bp3-small bp3-minimal l-logIn-forgotPassword'
													href='/auth/recover-password'>
													Forgot Password
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='items-center justify-between flex-ns'>
								<div className='dn db-ns flex-grow-1' />
								<div className='flex-grow-0'>
									<button
										disabled={isLoading}
										type='submit'
										data-testid='login'
										className={`bp3-button bp3-large bp3-intent-primary mb3 mb0-ns bp3-fill ${
											isLoading && "animate-pulse"
										}`}
										tabIndex={3}>
										<span className='bp3-button-text'>{isLoading ? "Loading" : "Next"}</span>
									</button>
								</div>
							</div>
						</form>
						<div className='flex justify-between mb3 mt4-5 mt4-5-l f7 silver'>
							<div className='flex justify-between flex-column flex-row-ns flex-grow-1 bt b--border pt3 mb4'>
								<div className='flex-grow-1'>
									<div className='dn-ns' />
								</div>
								<div className='flex'>
									<a className='[#0018A8] fw5' href='https://www.dashboard.yourtrade.com/terms' target='_BLANK' rel='noreferrer'>
										Terms
									</a>
									<a
										className='ml3 [#0018A8] fw5'
										href='https://www.dashboard.yourtrade.com/privacy'
										target='_BLANK'
										rel='noreferrer'>
										Privacy
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='mb3 ph4-5-l f7 silver flex justify-between' />
				</div>
			</div>
		</>
	)
}

export default LogIn

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
		console.log(error.message)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
}
