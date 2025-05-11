import { useState } from "react"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import UserLayout from "../../components/layout/userLayout"

function Signup2({ data }) {
	const [country, setCountry] = useState(data.length ? data[0].code : "")
	const [countryDial, setCountryDial] = useState(data.length ? data[0].dial_code : "")
	const [state, setState] = useState("")
	const [city, setCity] = useState("")
	const [postcode, setSetPostcode] = useState("")
	const [street, setStreet] = useState("")
	const [mobile, setMobile] = useState("")
	const [isError, setIsError] = useState(false)
	const [errMsg, setErrMsg] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

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
		setIsLoading(true)

		const prevStringData = localStorage.getItem("TRADE_SIGNUP_PROCESS")
		const prevData = JSON.parse(prevStringData) || {}
		// console.log(prevData)

		localStorage.setItem(
			"TRADE_SIGNUP_PROCESS",
			JSON.stringify({ ...prevData, step: 2, country, countryDial, state, city, postcode, street, mobile })
		)
		try {
			setIsError(false)
			setErrMsg("")
			// signup user
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: localStorage.getItem("TRADE_SIGNUP_PROCESS"),
			})
			const data = await res.json()

			console.log(data)

			if (data.status === true) {
				const res2 = await fetch("/api/auth/send-email-verification-pin", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: prevData.email }),
				})
				const data2 = await res2.json()
				console.log(data2)
				router.push("/signup/step3")
			} else {
				throw new Error(data.message)
			}
		} catch (error) {
			setIsError(true)
			setErrMsg(error.message)
			setIsLoading(false)
		}
	}

	return (
		<UserLayout>
			<div className='dark:bg-black pt-5 min-h-screen'>
				<h3 className='text-[#0018A8]-500 mt-0 text-center'>Your Details</h3>
				<form
					className='shadow-2xl px-10 py-5 rounded-xl dark:border max-w-xl dark:border-[#0018A8]-500 mx-10 md:mx-auto'
					autoComplete='off'
					onSubmit={handleSubmit}>
					<div className='flex flex-col'>
						<label htmlFor='country'>country</label>
						<select
							value={country}
							onChange={handleCountryChange}
							id='country'
							className='border border-[#0018A8]-500 outline-[#0018A8]-500 rounded-md font-base dark:text-slate-300'>
							{data &&
								data.length > 0 &&
								data.map(({ name, code }) => (
									<option key={name} value={code}>
										{name}
									</option>
								))}
						</select>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='state'
							name='state'
							maxLength='300'
							inputMode='text'
							required
							placeholder='State...'
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='city'
							name='city'
							maxLength='300'
							inputMode='text'
							required
							value={city}
							placeholder='City...'
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='post_code'
							name='post_code'
							maxLength='300'
							inputMode='text'
							required
							value={postcode}
							placeholder='Post Code..'
							onChange={(e) => setSetPostcode(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='street_address'
							name='street_address'
							maxLength='300'
							inputMode='text'
							placeholder='Street address'
							required
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>
					</div>
					<div>
						<div className='flex flex-col md:flex-row gap-4 mt-5'>
							<span className='dark:text-slate-300 self-center text-xl'>{countryDial}</span>
							<input
								type='number'
								className='border flex-1 border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='mobile_number'
								name='mobile_number'
								required
								placeholder='Mobile Number...'
								value={mobile}
								onChange={(e) => setMobile(e.target.value)}
							/>
						</div>
					</div>
					<br />
					{isError && (
						<>
							<div className='text-red-600 mb-4'>{errMsg}</div>
						</>
					)}
					<div>
						<button
							disabled={isLoading}
							type='submit'
							className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
							{isLoading ? (
								<div style={{ textAlign: "center" }}>
									<Oval height={30} width={30} />
								</div>
							) : (
								<span>Next</span>
							)}
						</button>
					</div>
				</form>
			</div>
		</UserLayout>
	)
}

export default Signup2

export async function getServerSideProps() {
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
		props: {
			data,
		},
	}
}
