import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import { toast } from "react-toastify"
import { BASE_IMG_URL } from "../../../../config"
import AuthUserLayout from "../../../../components/layout/authUserLayout"
import UserModel from "../../../../models/user"

function ExpertTrader() {
	const router = useRouter()
	const [trader, setTrader] = useState({})

	useEffect(() => {
		async function getTrader({ traderId }) {
			try {
				const response = await fetch(`/api/trader/${traderId}`)
				const data = await response.json()

				const { status, message, trader } = data

				if (status === true) {
					setTrader(trader)
				} else {
					throw new Error(message)
				}
			} catch (error) {
				toast.error(error.message)
			}
		}

		const { traderId } = router.query

		getTrader({ traderId })
	}, [])
	return (
		<AuthUserLayout>
			<Head>
				<title>{trader?.name || "Trader"} - yourtrade</title>
			</Head>
			<div className='row'>
				<div className='col l6 offset-l3 s12'>
					<div className='card-panel'>
						<center>
							<img
								src={`${BASE_IMG_URL}${trader?.profile_img || "images/human.png"}`}
								className='circle responsive-img'
								style={{ maxHeight: "100px" }}
							/>
							<p>Expert Crypto Trader</p>
							<br />
						</center>
						<table className='striped'>
							<tbody>
								<tr>
									<td style={{ textTransform: "uppercase" }}>name</td>
									<td>{trader?.name || "Loading..."}</td>
								</tr>
								<tr>
									<td style={{ textTransform: "uppercase" }}>type</td>
									<td>{trader?.type || "Loading..."}</td>
								</tr>
								<tr>
									<td style={{ textTransform: "uppercase" }}>win rate</td>
									<td>{trader?.win_rate || "Loading..."}</td>
								</tr>
								<tr>
									<td style={{ textTransform: "uppercase" }}>profit share</td>
									<td>{trader?.profit_share || "Loading..."}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default ExpertTrader

export async function getServerSideProps(context) {
	try {
		await mongoose.connect(process.env.MONGODB_URL)

		const session = await getSession({ req: context.req })
		let authorized = false

		if (session) {
			const email = session.user.email
			const user = await UserModel.findOne({ email })
			if (user) {
				authorized = true
			}
		}

		if (!authorized) {
			return {
				redirect: {
					destination: "/",
					permanent: false,
				},
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
