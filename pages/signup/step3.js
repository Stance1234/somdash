import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { signIn } from "next-auth/react"
import UserLayout from "../../components/layout/userLayout"

function Signup3() {
	const [pin, setPin] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [isResending, setIsResending] = useState(false)
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

	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)

		// console.log(prevData)

		try {
			const res = await fetch("/api/auth/verify-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, code: pin }),
			})

			const data = await res.json()

			if (data.status === true) {
				const prevStringData = localStorage.getItem("TRADE_SIGNUP_PROCESS")
				const prevData = JSON.parse(prevStringData) || {}
				const signinRes = await signIn("credentials", { redirect: false, email: prevData.email, password: prevData.password })
				if (signinRes.ok) {
					localStorage.removeItem("TRADE_SIGNUP_PROCESS")
					toast.success(data.message)
					router.push("/signup/step4")
				} else {
					toast.error("Invalid credentials")
					throw new Error()
				}
			} else {
				toast.error(data.message)
				throw new Error(data.message)
			}
		} catch (error) {
			setIsLoading(false)
		}
	}

	async function resendEmail(e) {
		e.preventDefault()
		setIsResending(true)

		try {
			const res = await fetch("/api/auth/resend-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			})

			const data = await res.json()

			if (data.status === true) {
				setIsResending(false)
				toast.success(data.message)
			} else {
				toast.error(data.message)
				throw new Error(data.message)
			}
		} catch (error) {
			setIsResending(false)
			console.error(error)
		}
	}

	return (
		<UserLayout>
			<div className='flex flex-col items-center py-10 dark:bg-black min-h-screen'>
				<div className='shadow-2xl px-10 py-5 pt-0 rounded-xl dark:border dark:border-[#0018A8]-500 max-w-xl mx-10 md:mx-auto'>
					<form autoComplete='off' onSubmit={handleSubmit}>
						<h3 className='text-[#0018A8]-500'>Your PIN is on the way</h3>

						<p className='dark:text-slate-300'>
							An email containing your 5-digit PIN is has been sent to <b>{email}</b>
						</p>
						<p className='dark:text-slate-300'>
							If you haven&apos;t received it in a minute or two, click &apos;Resend PIN&apos;.
						</p>

						<div className='flex flex-col my-5'>
							<input
								inputMode='decimal'
								type='number'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='pin'
								name='pin'
								required
								value={pin}
								placeholder='Pin...'
								onChange={(e) => setPin(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<button
								disabled={isLoading || isResending}
								type='submit'
								className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isLoading ? (
									<div style={{ textAlign: "center" }}>
										<Oval height={30} width={30} />
									</div>
								) : (
									<span>Confirm PIN</span>
								)}
							</button>
						</div>
					</form>

					<form autoComplete='off' onSubmit={resendEmail}>
						<br />
						<div>
							<button
								disabled={isLoading || isResending}
								type='submit'
								className='bg-gray-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isResending ? (
									<div style={{ textAlign: "center" }}>
										<Oval height={30} width={30} />
									</div>
								) : (
									<span>Resend PIN To Email</span>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</UserLayout>
	)
}

export default Signup3
