import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import commaNumber from "comma-number"
import { NextSeo } from "next-seo"
import UserModel from "../../../models/user"
import UserTradingFundModel from "../../../models/trading-balance"
import UserMiningContractModel from "../../../models/user-mining-contract"
import AssetModel from "../../../models/assets"
import MiningContractModel from "../../../models/mining-contract"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function UserWithdrawal({ data }) {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [amt, setAmt] = useState("")
	const [act, setAct] = useState("")
	const [type, setType] = useState("")
	const [paymentChoice, setPaymentChoice] = useState("")
	const [accountDetails, setAccountDetails] = useState({ bank_name: "", account_name: "", account_number: "" })
	const [address, setAddress] = useState("")

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)
			const response = await fetch("/api/fund/withdrawal", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ amount: amt, _balanceId: act, type, method: paymentChoice, details: accountDetails, address }),
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				router.push(`/user/withdrawal/list`)
				toast.success(message)
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsLoading(false)
		}
	}

	function handleChange(id) {
		const typeIndex = data.findIndex((item) => item.id === id)
		if (typeIndex > -1) {
			setType(data[typeIndex].type)
			setAct(id)
		}
	}

	return (
		<AuthUserLayout>
			<NextSeo title='Withdrawal' />
			<div className='flex flex-col items-center py-10 dark:bg-black'>
				<h2 className='text-[#0018A8]-500 mt-0 text-center'>WITHDRAW FROM YOUR ACCOUNT</h2>
				<p>
					<Link href='/user/withdrawal/list'>
						<a className='text-[#0018A8]-500 text-center underline hover:text-[#0018A8]-800'>
							<span className='whitespace-nowrap'>VIEW WITHDRAWALS</span>
						</a>
					</Link>
				</p>

				<form
					className='shadow-2xl px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 mt-5 md:mx-0 space-y-4'
					onSubmit={handleSubmit}
					autoComplete='off'
					action='/user/deposits/2302'>
					<div className='flex flex-col'>
						<label htmlFor='amount'>amount</label>
						<div className='flex gap-2'>
							<span className='dark:text-slate-300 self-center text-xl'>USD</span>
							<input
								inputMode='decimal'
								type='number'
								id='amount'
								min='10'
								step='any'
								name='amount'
								className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								required
								value={amt}
								onChange={(e) => setAmt(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label>Balance</label>
						<select
							id='payment_method'
							className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							value={act}
							onChange={(e) => handleChange(e.target.value)}>
							<option value='' disabled>
								-- select --
							</option>
							{data &&
								data.length &&
								data.length > 0 &&
								data.map((item) => (
									<option key={item.id} value={item.id}>
										{item.name} ($ {commaNumber(item.balance.toFixed(2))})
									</option>
								))}
						</select>
					</div>
					<div className='flex flex-col'>
						<label>Method of withdrawal</label>
						<select
							id='withdrawal_method'
							className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							value={paymentChoice}
							onChange={(e) => setPaymentChoice(e.target.value)}>
							<option value='' disabled selected>
								-- select --
							</option>
							<option value='local'>Local Bank</option>
							<option value='crypto'>USDT</option>
						</select>
					</div>
					{paymentChoice === "crypto" && (
						<div className='flex flex-col'>
							<label htmlFor='wallet_address'>Wallet Address</label>
							<input
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								type='text'
								name='wallet_address'
								id='wallet_address'
								className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
							/>
						</div>
					)}
					{/* Bank info */}
					{paymentChoice === "local" && (
						<>
							<div className='flex flex-col'>
								<label htmlFor='bank_name'>Bank Name</label>
								<input
									type='text'
									className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
									name='bank_name'
									id='bank_name'
									value={accountDetails.bank_name}
									onChange={(e) => setAccountDetails({ ...accountDetails, bank_name: e.target.value })}
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='account_name'>Acount Name</label>
								<input
									type='text'
									className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
									name='account_name'
									id='account_name'
									value={accountDetails.account_name}
									onChange={(e) => setAccountDetails({ ...accountDetails, account_name: e.target.valie })}
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='account_number'>Account Number</label>
								<input
									type='number'
									className='flex-1 border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
									name='account_number'
									id='account_number'
									value={accountDetails.account_number}
									onChange={(e) => setAccountDetails({ ...accountDetails, account_number: e.target.value })}
								/>
							</div>
						</>
					)}
					<div>
						<button
							disabled={isLoading}
							type='submit'
							className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
							{isLoading ? <Oval width={20} height={20} /> : <span>Proceed</span>}
						</button>
					</div>
				</form>
			</div>
		</AuthUserLayout>
	)
}

export default UserWithdrawal

export async function getServerSideProps(context) {
	try {
		await mongoose.connect(process.env.MONGODB_URL)

		const session = await getSession({ req: context.req })

		const user = await UserModel.findOne({ email: session.user.email })
		if (!session) {
			if (!user) {
				return {
					redirect: {
						destination: "/signin",
						permanent: false,
					},
				}
			}
		}

		const tradeBalance = await UserTradingFundModel.findOne({ _userId: user.id })
		const miningBalance = await UserMiningContractModel.find({ _userId: user.id })

		const data = []

		if (tradeBalance) {
			const item = {
				id: tradeBalance.id,
				name: "Trading",
				balance: tradeBalance.balance,
				type: "trading",
			}

			data.push(item)
		}

		if (miningBalance.length > 0) {
			for (const balObj of miningBalance) {
				const contract = await MiningContractModel.findById(balObj._contractId)
				const asset = await AssetModel.findById(contract._assetId)

				const item = {
					id: balObj.id,
					name: contract.name,
					balance: balObj.quantity * asset.price,
					type: "mining",
				}

				data.push(item)
			}
		}

		return {
			props: {
				data,
			},
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
