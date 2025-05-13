import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import PaymentMethodModel from "../../../models/payment_method"
import PaymentPurposeModel from "../../../models/payment_purpose"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function UserDepositCrypto({ methods, purposes }) {
	const router = useRouter()
	const paymentMethods = JSON.parse(methods)
	const paymentPurposes = JSON.parse(purposes)
	const [deposit, setDeposit] = useState({ usd: "", method: paymentMethods[0]?.method || "", to: paymentPurposes[0]?._id || "" })
	const [isLoading, setIsLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)
			const response = await fetch("/api/fund/deposit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(deposit),
			})

			const data = await response.json()

			const { status, message, fund } = data

			// console.log(data)

			if (status === true) {
				router.push(`/user/deposits/${fund._id}`)
				toast.success(message)
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsLoading(false)
		}
	}

	return (
		<AuthUserLayout>
			<Head>
				<title>Fund Your Account - yourtrade</title>
			</Head>
			<center>
				<p style={{ fontWeight: "bold" }}>FUND YOUR ACCOUNT</p>
				<p>
					<Link href='/user/deposits/pricing'>
						<a style={{ fontSize: "19px" }}>VIEW PRICING</a>
					</Link>
				</p>
				<p>
					<Link href='/user/deposits/buy'>
						<a style={{ fontSize: "19px" }}>BUY CRYPTO NOW</a>
					</Link>
				</p>
				<br />
			</center>

			<section className='flex flex-col items-center'>
				<form
					className=' dark:bg-black shadow-2xl px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0'
					onSubmit={handleSubmit}
					autoComplete='off'
					action='/user/deposits/2302'>
					<div className='flex flex-col'>
						<label htmlFor='amount' className='dark:text-slate-300 text-base'>
							USD
						</label>

						<input
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							inputMode='decimal'
							type='number'
							id='amount'
							min='500'
							step='any'
							name='amount'
							placeholder='Amount...'
							required
							value={deposit.usd}
							onChange={(e) => setDeposit({ ...deposit, usd: e.target.value })}
						/>
					</div>
					<div className='flex flex-col mt-4'>
						<label className='dark:text-slate-300 text-base uppercase'>payment method</label>
						<select
							id='payment_method'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							value={deposit.method}
							onChange={(e) => setDeposit({ ...deposit, method: e.target.value })}>
							{paymentMethods &&
								paymentMethods.length &&
								paymentMethods.length > 0 &&
								paymentMethods.map((payment) => (
									<option key={payment.method} value={payment.method}>
										{payment.name}
									</option>
								))}
						</select>
					</div>
					<div className='flex flex-col mt-4'>
						<label className='dark:text-slate-300 text-base uppercase'>to</label>
						<select
							id='to'
							className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							value={deposit.to}
							onChange={(e) => setDeposit({ ...deposit, to: e.target.value })}>
							{paymentPurposes &&
								paymentPurposes.length &&
								paymentPurposes.length > 0 &&
								paymentPurposes.map((p) => (
									<option key={p._id} value={p._id}>
										{p.name}
									</option>
								))}
						</select>
					</div>
					<br />
					<div>
						<button
							disabled={isLoading}
							type='submit'
							className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
							{isLoading ? <Oval width={20} height={20} /> : <span>Proceed</span>}
						</button>
					</div>
				</form>
			</section>
		</AuthUserLayout>
	)
}

export default UserDepositCrypto

export async function getServerSideProps() {
	const methods = await PaymentMethodModel.find({}, "method name")

	const purposes = await PaymentPurposeModel.find({}, "name _id")

	return {
		props: {
			methods: JSON.stringify(methods),
			purposes: JSON.stringify(purposes),
		},
	}
}
