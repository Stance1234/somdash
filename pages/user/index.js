import Link from "next/link"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import commaNumber from "comma-number"
import UserModel from "../../models/user"
import AuthUserLayout from "../../components/layout/authUserLayout"
import UserFundModel from "../../models/user_funds"
import UserTradingFundModel from "../../models/trading-balance"
import UserMiningContractModel from "../../models/user-mining-contract"
import MiningContractModel from "../../models/mining-contract"
import AssetModel from "../../models/assets"
import HomepageTradesList from "../../components/user/homepage-trades"

function UserHome({ funds, signal_strength }) {
	return (
		<AuthUserLayout>
			<div className='pc-container' style={{ margin: "auto" }}>
				<div className='row'>
					<div className='col l4 s12'>
						<div className='center'>
							<div className='row text-slate-300'>
								<div className='col l6 s6'>
									<h3
										className='text-black dark:text-slate-300 font-bold'
										style={{ margin: "0px", padding: "0px" }}>
										${commaNumber(funds.balance.toFixed(2))}
									</h3>
									<span style={{ fontSize: "10px" }}>
										<p
											className='material-icons notranslate'
											style={{ fontSize: "16px", verticalAlign: "middle", marginRight: "5px" }}>
											account_balance
										</p>
										BALANCE
									</span>
								</div>
								<div className='col l6 s6'>
									<h3
										className='text-black dark:text-slate-300 font-bold'
										style={{ margin: "0px", padding: "0px" }}>
										${commaNumber(funds.deposit.toFixed(2))}
									</h3>
									<span style={{ fontSize: "10px" }}>
										<p
											className='material-icons notranslate'
											style={{ fontSize: "16px", verticalAlign: "middle", marginRight: "5px" }}>
											attach_money
										</p>
										DEPOSIT
									</span>
								</div>
							</div>
							<br />
							<center>
								<progress
									// className='text-[#0018A8]-500'
									value={signal_strength || 0}
									max='100'
									style={{ width: "80%", display: "block", textAlign: "right" }}></progress>
							</center>
							<span style={{ fontSize: "10px" }}>SIGNAL STRENGTH: {signal_strength}</span>
							<br />
							<br />
						</div>
						<div className='pc-container row center' style={{ margin: "auto" }}>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/deposits/crypto'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(0, 123, 255)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
													boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow for better contrast
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													account_balance_wallet
												</p>
											</div>
										</a>
									</Link>
									FUND ACCOUNT
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/withdrawal'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(255, 87, 34)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													money_off
												</p>
											</div>
										</a>
									</Link>
									WITHDRAWAL
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/trading/traders'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(255, 193, 7)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
													boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow for better contrast
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													group
												</p>
											</div>
										</a>
									</Link>
									COPY EXPERTS
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/trading/markets'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(40, 167, 69)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
													boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow for better contrast
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													trending_up
												</p>
											</div>
										</a>
									</Link>
									ASSET MARKETS
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/trading/watchlist'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(108, 117, 125)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
													boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow for better contrast
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													bookmark
												</p>
											</div>
										</a>
									</Link>
									SAVED ASSETS
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/traderoom'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(220, 53, 69)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													show_chart
												</p>
											</div>
										</a>
									</Link>
									TRADING ROOM
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/traderoom?binary'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(23, 162, 184)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													timeline
												</p>
											</div>
										</a>
									</Link>
									BINARY OPTIONS
									<br />
									<br />
								</div>
							</div>
							<div className='col l6 s4'>
								<div className='center dark:text-slate-300'>
									<Link href='/user/deposits/list'>
										<a style={{ color: "white" }}>
											<div
												style={{
													background: "rgb(52, 58, 64)", // Updated color
													color: "white",
													padding: "1rem",
													borderRadius: "10px",
												}}>
												<p
													className='material-icons notranslate'
													style={{ fontSize: "30px", margin: "0px", padding: "0px" }}>
													history
												</p>
											</div>
										</a>
									</Link>
									TRANSACTION HISTORY
									<br />
									<br />
								</div>
							</div>
						</div>
					</div>
					<HomepageTradesList />
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default UserHome

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				const userFunds = await UserFundModel.findOne({ _userId: user._id })

				// * Sum all funds
				let balance = 0
				const tradingFund = await UserTradingFundModel.findOne({ _userId: user.id })
				if (tradingFund) {
					balance += tradingFund?.balance || 0
				}

				const userMiningcontracts = await UserMiningContractModel.find({ _userId: user.id })

				for (const userContract of userMiningcontracts) {
					const contract = await MiningContractModel.findById(userContract._contractId)
					const asset = await AssetModel.findById(contract._assetId)

					const contractValue = userContract.quantity * asset.price

					balance += contractValue
				}

				// console.log(userFunds)
				return {
					props: {
						funds: {
							balance: balance || 0.0,
							deposit: userFunds?.deposit || 0.0,
						},
						signal_strength: user?.signal_strength || 0.0,
					},
				}
			}
		}

		return {
			redirect: {
				destination: "/signin",
				permanent: false,
			},
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
