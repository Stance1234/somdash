/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import { NextSeo } from "next-seo"
import UserModel from "../../models/user"

function Signin({ data }) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [currency, setCurrency] = useState("USD")
	const [showPass, setShowPass] = useState(false)
	const [accept, setAccept] = useState(false)
	const [country, setCountry] = useState(data.length ? data[0].code : "")
	const [countryDial, setCountryDial] = useState(data.length ? data[0].dial_code : "")
	const [state, setState] = useState("")
	const [city, setCity] = useState("")
	const [postcode, setPostcode] = useState("")
	const [street, setStreet] = useState("")
	const [mobile, setMobile] = useState("")
	const [isError, setIsError] = useState(false)
	const [errMsg, setErrMsg] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [step, setStep] = useState(1)
	const router = useRouter()
	const dispatch = useDispatch()
	const refferal = router.query.ref || ""

	function handleCountryChange(e) {
		data.forEach((item) => {
			if (item.code === e.target.value) {
				setCountry(item.code)
				setCountryDial(item.dial_code)
			}
		})
	}

	async function handleSubmit(e) {
		e.preventDefault()

		if (step <= 3 || isLoading) return

		setIsLoading(true)

		try {
			setIsError(false)
			setErrMsg("")
			// signup user
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					firstname,
					lastname,
					currency,
					postcode,
					country,
					state,
					city,
					mobile,
					countryDial,
					street,
					password,
					confirmPassword,
					accept,
					refferal,
				}),
			})
			const data = await res.json()

			// console.log(data)
			const { status, message } = data

			if (status === true) {
				// const res2 = await fetch("/api/auth/send-email-verification-pin", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify({ email }),
				// })

				// console.log("reached")
				// const data2 = await res2.json()
				// console.log(data2)
				setIsLoading(false)
				toast.success("signup complete")
				router.push("/auth/log-in")
			} else {
				toast.error(message)
				setIsLoading(false)
				throw new Error(data.message)
			}

			// ! already added to codebase
			// if (data.status === true) {
			// 	const res2 = await fetch("/api/auth/send-email-verification-pin", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 		body: JSON.stringify({ email: prevData.email }),
			// 	})
			// 	const data2 = await res2.json()
			// 	console.log(data2)
			// 	router.push("/signup/step3")
			// } else {
			// 	throw new Error(data.message)
			// }
		} catch (error) {
			console.log(error.message)
			setIsError(true)
			setErrMsg(error.message)
			setIsLoading(false)
		}
	}

	function handleBackBtn(e) {
		e.preventDefault()

		step > 1 ? setStep((prev) => prev - 1) : router.back()
	}

	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/bitpay.css' />
			</Head>
			<NextSeo title='Signin' />
			<div className='max-w-2xl mx-auto'>
				<div
					className='react-reveal pv4-5 ph4 ph4-5-l center-l w-100 relative'
					style={{
						animationFillMode: "both",
						animationDuration: "300ms",
						animationDelay: "0ms",
						animationIterationCount: 1,
						opacity: 1,
						animationName: "react-reveal-145976005127662-1",
					}}>
					
					<div className='mb3'>
						<div className='f4 f3-m f3-l fw7 lh-title tracked-condensed mb3'>Get started with Your Trader PayGo</div>
						<div className='f7 f6-m f6-l lh-copy black-70 mb4'>
							Create a Pay As You Go hot wallet now. No contract required.
						</div>
						<div className='justify-between f7 fw5 silver mt1 mb4 items-center mh1 dn flex-m flex-l'>
							<div className='flex items-center'>
								{step === 1 ? (
									<span
										icon='selection'
										aria-hidden='true'
										className='bp3-icon bp3-icon-selection bp3-intent-primary mr2'>
										<svg data-icon='selection' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								) : (
									<span icon='circle' aria-hidden='true' className='bp3-icon bp3-icon-circle mr2'>
										<svg data-icon='circle' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								)}
								Create Account
							</div>
							<div className='flex-grow-1 flex-shrink-1 mh1 bt b--border css-1of1x33' />
							<div className='flex items-center'>
								{step === 2 ? (
									<span
										icon='selection'
										aria-hidden='true'
										className='bp3-icon bp3-icon-selection bp3-intent-primary mr2'>
										<svg data-icon='selection' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								) : (
									<span icon='circle' aria-hidden='true' className='bp3-icon bp3-icon-circle mr2'>
										<svg data-icon='circle' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								)}
								Address
							</div>
							<div className='flex-grow-1 flex-shrink-1 mh1 bt b--border css-1of1x33' />
							<div className='flex items-center'>
								{step === 3 ? (
									<span
										icon='selection'
										aria-hidden='true'
										className='bp3-icon bp3-icon-selection bp3-intent-primary mr2'>
										<svg data-icon='selection' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								) : (
									<span icon='circle' aria-hidden='true' className='bp3-icon bp3-icon-circle mr2'>
										<svg data-icon='circle' width={14} height={14} viewBox='0 0 16 16'>
											<path
												d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'
												fillRule='evenodd'
											/>
										</svg>
									</span>
								)}
								Accept Terms
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='mb3'>
								{step === 1 && (
									<>
										<div className='cf nmh2'>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>First Name </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																data-testid='input-field'
																tabIndex={1}
																className='bp3-input'
																name='firstName'
																placeholder='Enter your first name...'
																value={firstname}
																onChange={(e) => setFirstname(e.target.value)}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>Last Name </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																data-testid='input-field'
																tabIndex={2}
																className='bp3-input'
																name='lastName'
																placeholder='Enter your last name...'
																value={lastname}
																onChange={(e) => setLastname(e.target.value)}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='cf nmh2'>
											<div className='fl ph2 w-100 w-50-l'>
												<label className='l-label mb1'>Country of Residence </label>
												<div className='bp3-popover-wrapper mb3'>
													<div aria-haspopup='true' className='bp3-popover-target'>
														<div className='bp3-input-group bp3-large'>
															<select
																value={country}
																onChange={handleCountryChange}
																id='country'
																className='bp3-input'>
																{data &&
																	data.length > 0 &&
																	data.map(({ name, code }) => (
																		<option key={name} value={code}>
																			{name}
																		</option>
																	))}
															</select>
														</div>
													</div>
												</div>
												<div className='bp3-collapse'>
													<div className='bp3-collapse-body' aria-hidden='false' />
												</div>
											</div>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>Mobile </label>
													<div className='l-formContentEditable'>
														<div className='bp3-popover-wrapper'>
															<div aria-haspopup='true' className='bp3-popover-target'>
																<div className='bp3-input-group bp3-large'>
																	<input
																		type='text'
																		autoComplete='off'
																		placeholder='234-5678-90'
																		tabIndex={4}
																		className='bp3-input'
																		// defaultValue
																		value={mobile}
																		onChange={(e) =>
																			setMobile(e.target.value)
																		}
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='l-formContent mb3'>
											<label className='l-label mb1'>Email Address </label>
											<div className='l-formContentEditable'>
												<div className='bp3-input-group bp3-large l-input-group'>
													<input
														type='text'
														data-testid='input-field'
														tabIndex={5}
														className='bp3-input'
														name='email'
														placeholder='Email Address'
														// defaultValue
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
											</div>
										</div>
										<div className='mb3'>
											<div className='l-formContent'>
												<label className='l-label mb1' htmlFor='new-pw-input'>
													<div className='flex justify-between'>
														<span>Password</span>
														<label className='bp3-control bp3-checkbox'>
															<input
																type='checkbox'
																checked={showPass}
																onChange={() => setShowPass(!showPass)}
															/>
															<span className='bp3-control-indicator' />
															<span className='fw4 silver'>Show Password</span>
														</label>
													</div>
												</label>
												<div className='l-formContentEditable'>
													<div className='bp3-input-group bp3-large l-input-group b-confirmPasswordBlock--bottomFlat'>
														<input
															type={showPass ? "text" : "password"}
															data-testid='input-field'
															tabIndex={6}
															id='new-pw-input'
															className='bp3-input'
															name='password'
															placeholder='Password'
															style={{ paddingLeft: "38px" }}
															aria-autocomplete='list'
															value={password}
															onChange={(e) => setPassword(e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className='mb3'>
												<div
													className='bp3-collapse'
													style={{
														height: "auto",
														overflowY: "visible",
														transition: "none 0s ease 0s",
													}}></div>
											</div>
											<div className='l-formContent'>
												<label className='l-label mb1' htmlFor='confirm-pw-input'>
													Confirm Password
												</label>
												<div className='l-formContentEditable'>
													<div className='bp3-input-group bp3-large l-input-group'>
														<input
															type={showPass ? "text" : "password"}
															data-testid='input-field'
															tabIndex={7}
															id='confirm-pw-input'
															className='bp3-input'
															name='confirmPassword'
															placeholder='Confirm Password'
															value={confirmPassword}
															onChange={(e) => setConfirmPassword(e.target.value)}
															style={{ paddingLeft: "38px" }}
														/>
													</div>
												</div>
											</div>
										</div>
									</>
								)}
								{step === 2 && (
									<>
										<div className='cf nmh2'>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>State </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																data-testid='input-field'
																tabIndex={1}
																className='bp3-input'
																name='firstName'
																placeholder='Enter State of residence...'
																value={state}
																onChange={(e) => setState(e.target.value)}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>City </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																data-testid='input-field'
																tabIndex={2}
																className='bp3-input'
																name='lastName'
																placeholder='Enter city of residence...'
																value={city}
																onChange={(e) => setCity(e.target.value)}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='cf nmh2'>
											<div className='fl ph2 w-100 w-50-l'>
												<label className='l-label mb1'>Postal code </label>
												<div className='bp3-popover-wrapper mb3'>
													<div aria-haspopup='true' className='bp3-popover-target'>
														<div className='bp3-input-group bp3-large'>
															<input
																type='text'
																autoComplete='off'
																placeholder='12345'
																tabIndex={4}
																className='bp3-input'
																// defaultValue
																value={postcode}
																onChange={(e) => setPostcode(e.target.value)}
															/>
														</div>
													</div>
												</div>
												<div className='bp3-collapse'>
													<div className='bp3-collapse-body' aria-hidden='false' />
												</div>
											</div>
											<div className='fl ph2 w-100 w-50-l'>
												<div className='l-formContent mb3'>
													<label className='l-label mb1'>Street </label>
													<div className='l-formContentEditable'>
														<div className='bp3-popover-wrapper'>
															<div aria-haspopup='true' className='bp3-popover-target'>
																<div className='bp3-input-group bp3-large'>
																	<input
																		type='text'
																		autoComplete='off'
																		placeholder='Enter street...'
																		tabIndex={4}
																		className='bp3-input'
																		// defaultValue
																		value={street}
																		onChange={(e) =>
																			setStreet(e.target.value)
																		}
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</>
								)}
								{step === 3 && (
									<>
										<p className='px-2 text-slate-500 mb-4'>
											By signing up, you accept our terms of service and agree that you&apos;r above 18.
										</p>
										<div className='cf nmh2'>
											<div className='flex gap-x-5 px-4 text-slate-500'>
												<span>Do you accept?</span>
												<label className='bp3-control bp3-checkbox'>
													<input
														type='checkbox'
														checked={accept}
														onChange={() => setAccept(!accept)}
													/>
													<span className='bp3-control-indicator' />
												</label>
											</div>
										</div>
									</>
								)}
							</div>
							<div className='flex-ns justify-between items-center'>
								<span onClick={handleBackBtn} className='bp3-button bp3-minimal bp3-large l-button--tertiary'>
									← Back
								</span>
								<div className='dn db-ns'>
									Already have a Your Trader account?
									<Link href='/auth/log-in'>
										<a className='fw5 [#0018A8]' tabIndex={8}>
											Log in
										</a>
									</Link>
									.
								</div>
								<div className='flex-grow-0'>
									<button
										disabled={isLoading}
										type='submit'
										className={`bp3-button bp3-large bp3-intent-primary mb3 mb0-ns bp3-fill ${
											isLoading && "animate-pulse"
										}`}
										tabIndex={8}
										style={{ zIndex: 1 }}
										onClick={() => setStep((prev) => prev + 1)}>
										<span className='bp3-button-text'>Continue</span>
									</button>
								</div>
							</div>
							<div className='db-s dn-m dn-l tc'>
								Already have a Your Trader account?
								<Link href='/auth/log-in'>
									<a className='fw5 [#0018A8]' tabIndex={8}>
										Log in
									</a>
								</Link>
								.
							</div>
						</form>
					</div>
				</div>
				<div className='mb3 ph4-5-l f7 silver flex justify-between' />
			</div>
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

		let data = {}

		try {
			const res = await fetch(
				"https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
			)
			data = await res.json()
		} catch (error) {
			console.log(error)
		}

		return {
			props: { data },
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
