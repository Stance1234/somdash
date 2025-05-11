import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { getSession } from "next-auth/react"
import AuthUserLayout from "../../../components/layout/authUserLayout"
import { useRouter } from "next/router"
import UserModel from "../../../models/user"
import mongoose from "mongoose"
import { toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import Countdown from "react-countdown"
import QRCode from "react-qr-code"
import { CopyToClipboard } from "react-copy-to-clipboard"

function UserDepositWait() {
	const router = useRouter()
	const [data, setData] = useState({ address: "", method: "", amount: "", expires_at: "" })
	const [isLoading, setIsLoading] = useState(true)

	const { transactionId } = router.query

	function notifyCopy() {
		toast.info("Address copied", {
			autoClose: 3000,
		})
	}

	useEffect(() => {
		async function getPaymentDetails({ transactionId }) {
			try {
				setIsLoading(true)

				const response = await fetch(`/api/fund/${transactionId}/details`)

				const jsonData = await response.json()

				const { status, message, details } = jsonData

				if (status === true) {
					setData(details)
					setIsLoading(false)
				} else {
					throw new Error(message)
				}
			} catch (error) {
				toast.error(error.message)
				setIsLoading(false)
			}
		}

		getPaymentDetails({ transactionId })
	}, [transactionId])

	return (
		<AuthUserLayout>
			<section className='row center' style={{ marginBottom: "30px" }}>
				<div className='col l4 offset-l4 s12'>
					<div className='shadow-2xl px-10 py-5 my-10 dark:text-slate-300 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0'>
						{isLoading ? (
							<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
								<Oval width={50} height={50} />
							</div>
						) : (
							<>
								<p>
									SEND ${data.amount} WORTH OF {data.method}
								</p>
								<p>TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR WALLET APP</p>
								<p style={{ marginBottom: "5px" }}>
									please send only {data.method} to this address, sending any other token may result in permanent
									loss
								</p>
								<div className='flex justify-center items-center mb-5'>
									<CopyToClipboard text={data.address} onCopy={notifyCopy}>
										<i className='material-icons prefix'>content_copy</i>
									</CopyToClipboard>
									<input
										className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
										type='text'
										value={data.address}
										readOnly
										style={{ textAlign: "center" }}
									/>
								</div>
								<div className='flex justify-center'>
									<QRCode
										value={data.address}
										className='dark:border-2 dark:border-slate-300'
										title={`${data.method} wallet address`}
										size={220}
									/>
								</div>
								<br />
								<br />
								<span>
									<Countdown date={data.expires_at}>
										<span>Session has expired</span>
									</Countdown>
								</span>
								<p>Awaiting Payment</p>
								<br />
								<Link href={`/user/deposits/${transactionId}/upload`}>
									<a className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
										UPLOAD PAYMENT PROOF
									</a>
								</Link>

								<br />
								<br />
								<Link href='/user/deposits/list'>
									<a className='bg-gray-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
										WAIT FOR CONFIRMATION
									</a>
								</Link>
							</>
						)}
					</div>
				</div>
			</section>
		</AuthUserLayout>
	)
}

export default UserDepositWait

export async function getServerSideProps(context) {
	try {
		await mongoose.connect(process.env.MONGODB_URL)

		const session = await getSession({ req: context.req })

		if (!session) {
			const user = await UserModel.findOne({ email: session.user.email })
			if (!user) {
				return {
					redirect: {
						destination: "/signin",
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
