import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import UserLayout from "../../components/layout/userLayout"
import { closeSideNav } from "../../features/sideNav/sideNavSlice"
import logo from "../../public/images/logo.png"
import GoogleTranslateWidget from "../../components/user/googletrans/googletrans"

function Signup() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [currency, setCurrency] = useState("USD")
	const [accept, setAccept] = useState(false)
	const isOpen = useSelector((state) => state.sideNav.isOpen)
	const router = useRouter()
	const dispatch = useDispatch()
	const refferal = router.query.ref || ""

	console.log(refferal)

	// ! Use to close side nav on new page load
	useEffect(() => {
		if (isOpen) {
			dispatch(closeSideNav())
		}
	}, [isOpen, dispatch])

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			const prevStringData = localStorage.getItem("TRADE_SIGNUP_PROCESS")
			const prevData = JSON.parse(prevStringData) || {}
			// console.log(prevData)

			localStorage.setItem(
				"TRADE_SIGNUP_PROCESS",
				JSON.stringify({ ...prevData, step: 1, email, password, confirmPassword, firstname, lastname, currency, accept, refferal })
			)
			router.push("/signup/step2")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<UserLayout>
			<div className='flex flex-col items-center py-10 dark:bg-black'>
				<div className='w-30 h-30'>
				
				</div>
				<GoogleTranslateWidget />


				<form
					className='shadow-2xl px-10 py-5 pt-0 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0'
					onSubmit={handleSubmit}
					autoComplete='off'>
					<h2 className='text-[#0018A8]-500 text-3xl text-center mb-5'>Sign Up</h2>
					<div className='flex flex-col'>
						<input
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							type='email'
							id='email'
							name='email'
							required
							value={email}
							placeholder='E-mail'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='first_name'
							name='first_name'
							maxLength='300'
							inputMode='text'
							placeholder='First name...'
							required
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='text'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='last_name'
							name='last_name'
							maxLength='300'
							inputMode='text'
							required
							value={lastname}
							placeholder='Last name...'
							onChange={(e) => setLastname(e.target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label>currency</label>
						<select
							className='border border-[#0018A8]-500 outline-[#0018A8]-500 rounded-md font-base dark:text-slate-300'
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}>
							<option value='USD'>USD</option>
							<option value='GBP'>GBP</option>
							<option value='EUR'>EUR</option>
							<option value='AUD'>AUD</option>
						</select>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='password'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:outline-none dark:text-slate-300 dark:placeholder:text-[#0018A8]-500'
							id='password'
							name='password'
							required
							placeholder='Password...'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-5'>
						<input
							type='password'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							id='confirm_password'
							name='confirm_password'
							autoComplete='new-password'
							placeholder='Repeat password'
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>

					<p className='my-5'>
						<label>
							<input checked={accept} onChange={(e) => setAccept(!accept)} id='c' type='checkbox' name='c' required />
							<span>I accept that I am 18 years or older and accept Terms &amp; Conditions and Privacy Policy</span>
						</label>
					</p>
					<div>
						<button
							type='submit'
							className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
							Create My Account
						</button>
					</div>
				</form>
				<p className='text-center mt-10 dark:text-slate-300'>
					Already have an account? &nbsp;
					<Link href='/signin'>
						<a>Login</a>
					</Link>
				</p>
			</div>
		</UserLayout>
	)
}

export default Signup
