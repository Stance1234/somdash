import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import moment from "moment"
import commaNumber from "comma-number"
import _ from "lodash"
import UserModel from "../../../models/user"
import UserWithdrawalModel from "../../../models/withdrawal"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function UserWithdrawalList({ withdrawals }) {
	console.log(withdrawals)
	const [list, setList] = useState(JSON.parse(withdrawals))

	return (
		<AuthUserLayout>
			<Head>
				<title>Withdrawal history - yourtrade</title>
			</Head>
			<div className='container row'>
				<div className='col l8 s12'>
					{/* <center>
                        <Link href="/user/deposits/crypto">
                            <a className="btn">NEW DEPOSIT</a>
                        </Link>
                    </center>
                    {
                        showNotice && (
                            <ul className="collection app-mx-1">
                                <li className="collection-item">
                                    Deposits will be pending until there are sufficent confirmations
                                    on the blockchain.
                                    <span onClick={() => setShowNotice(false)} style={{float: "right", cursor: "pointer"}} >X</span>
                                </li>
                            </ul>
                        )
                    } */}
					<ul className='collection'>
						{list && list.length && list.length > 0 ? (
							list.map((item) => (
								<li key={item.id} className='collection-item app-py-1'>
									<br />
									<div className='app-flex' style={{ alignItems: "center" }}>
										<div style={{ flex: "0.7 1 0%" }}>
											<center>
												<p className='app-trading-month'>{moment(item.created_at).format("MMM")}</p>
												<span className='app-trading-day'>{moment(item.created_at).format("D")}</span>
											</center>
										</div>
										<div style={{ flex: "3.5 1 0%" }}>
											<span>${commaNumber(item.amount, ",", ".")}</span>
											<br />
											<span> </span>
											<p>{item.msg}</p>
										</div>
										<div style={{ flex: "0.7 1 0%" }}>
											<span style={{ color: "green" }}>{item.status}</span>
										</div>
									</div>
								</li>
							))
						) : (
							<li className='collection-item app-py-1'>No Withdrawal yet</li>
						)}
					</ul>
				</div>
				<div className='col l4 s12'>
					<ul className='collection'>
						<li className='collection-item app-py-2 app-px-2'>
							<center>
								<img src='/images/UserVector2.png' className='responsive-img' style={{ maxHeight: "30vh" }} />
								<h2 style={{ margin: "0px", padding: "0px" }}>Withdrawal</h2>
							</center>
						</li>
					</ul>
				</div>
			</div>
			<div style={{ marginBottom: "30px" }}></div>
		</AuthUserLayout>
	)
}

export default UserWithdrawalList

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

		const withdrawalsDB = await UserWithdrawalModel.find({ _userId: user.id }, "id amount created_at status type msg").sort("-created_at")
		const withdrawals = _.map(withdrawalsDB, (withdrawal) => _.pick(withdrawal, ["id", "amount", "created_at", "status", "type", "msg"]))

		return {
			props: {
				withdrawals: JSON.stringify(withdrawals),
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
