import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import moment from "moment"
import commaNumber from "comma-number"
import UserModel from "../../../models/user"
import FundModel from "../../../models/fund"
import PaymentProofModel from "../../../models/payment_proof"
import PaymentPurposeModel from "../../../models/payment_purpose"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function UserDepositList({ data }) {
	const [showNotice, setShowNotice] = useState(true)
	return (
		<AuthUserLayout>
			<Head>
				<title>Transaction history - yourtrade</title>
			</Head>
			<div className='container row'>
				<div className='col l8 s12'>
					<center>
						<Link href='/user/deposits/crypto'>
							<a className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								NEW DEPOSIT
							</a>
						</Link>
					</center>
					{showNotice && (
						<ul className='collection app-mx-1'>
							<li className='collection-item'>
								Deposits will be pending until there are sufficent confirmations on the blockchain.
								<span onClick={() => setShowNotice(false)} style={{ float: "right", cursor: "pointer" }}>
									X
								</span>
							</li>
						</ul>
					)}
					<ul className='collection'>
						{data && data.length && data.length > 0 ? (
							data.map((item) => (
								<li key={item.id} className='collection-item app-py-1'>
									<br />
									<div className='app-flex' style={{ alignItems: "center" }}>
										<div style={{ flex: "0.7 1 0%" }}>
											<center>
												<p className='app-trading-month'>{item.month.toUpperCase()}</p>
												<span className='app-trading-day'>{item.date}</span>
											</center>
										</div>
										<div style={{ flex: "3.5 1 0%" }}>
											<span>${commaNumber(item.amount, ",", ".")}</span>
											<br />
											<span> </span>
											<p>
												{item.purpose} ({item.status})
											</p>
										</div>
										<div style={{ flex: "0.7 1 0%" }}>
											{item.payable ? (
												<Link href={`/user/deposits/${item.id}`}>
													<a>PAY</a>
												</Link>
											) : (
												<span style={{ color: "green" }}>Done</span>
											)}
										</div>
									</div>
								</li>
							))
						) : (
							<li className='collection-item app-py-1 mt-5'>No transactions yet</li>
						)}
						{/* <li className="collection-item app-py-1">
                            <br />
                            <div className="app-flex" style={{alignItems: "center"}}>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <center>
                                        <p className="app-trading-month">MAR</p>
                                        <span className="app-trading-day">25</span>
                                    </center>
                                </div>
                                <div style={{flex: "3.5 1 0%"}}>
                                    <span>$500.00</span><br /><span>0.16105 </span>
                                    <p>Ethereum Mining (Pending)</p>
                                </div>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <Link  href="/user/deposits/251">
                                    
                                        <a>PAY</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="collection-item app-py-1">
                            <br />
                            <div className="app-flex" style={{alignItems: "center"}}>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <center>
                                        <p className="app-trading-month">MAR</p>
                                        <span className="app-trading-day">25</span>
                                    </center>
                                </div>
                                <div style={{flex: "3.5 1 0%"}}>
                                    <span>$500.00</span><br /><span> </span>
                                    <p>Trading (Pending)</p>
                                </div>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <Link href="/user/deposits/250">
                                    
                                        <a>PAY</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="collection-item app-py-1">
                            <br />
                            <div className="app-flex" style={{alignItems: "center"}}>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <center>
                                        <p className="app-trading-month">MAR</p>
                                        <span className="app-trading-day">25</span>
                                    </center>
                                </div>
                                <div style={{flex: "3.5 1 0%"}}>
                                    <span>$999.00</span><br /><span> </span>
                                    <p>Binance Coin Mining (Pending)</p>
                                </div>
                                <div style={{flex: "0.7 1 0%"}}>
                                    <Link href="/user/deposits/249">
                                    
                                        <a>PAY</a>
                                    </Link>
                                </div>
                            </div>
                        </li> */}
					</ul>
				</div>
				<div className='col l4 s12'>
					<ul className='collection'>
						<li className='collection-item app-py-2 app-px-2'>
							<center>
								<img src='/images/UserVector2.png' className='responsive-img' style={{ maxHeight: "30vh" }} />
								<h2 style={{ margin: "0px", padding: "0px" }}>Deposit</h2>
							</center>
						</li>
					</ul>
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default UserDepositList

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

		const funds = await FundModel.find({ _userId: user._id })

		// console.log(funds)

		if (funds.length > 0) {
			async function getFundData() {
				const fundData = []

				for (let fund of funds) {
					const purpose = await PaymentPurposeModel.findById(fund._puposeId, "name")
					const date = moment(fund.time).format("D")
					const month = moment(fund.time).format("MMM")

					const item = {
						id: fund.id,
						amount: fund.amount,
						purpose: purpose.name,
						status: "Pending",
						payable: true,
						date,
						month,
					}

					if (fund.status === false) {
						const hasProof = await PaymentProofModel.findOne({ _transactionId: fund._id })

						if (hasProof) {
							item.status = "Verifying"
							item.payable = false
						}
					} else {
						item.payable = false
						item.status = "Completed"
					}

					fundData.push(item)
				}

				return fundData
			}

			const data = await getFundData()

			return {
				props: {
					data,
				},
			}
		}

		return {
			props: {
				data: [],
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
