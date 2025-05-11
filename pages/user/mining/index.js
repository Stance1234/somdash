import Link from "next/link"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import _ from "lodash"
import commaNumber from "comma-number"
import AuthUserLayout from "../../../components/layout/authUserLayout"
import UserModel from "../../../models/user"
import MiningContractModel from "../../../models/mining-contract"
import UserMiningContractModel from "../../../models/user-mining-contract"
import AssetModel from "../../../models/assets"

function AuthUserMining({ contracts, balance }) {
	return (
		<AuthUserLayout>
			<section className='pc-container' style={{ margin: "auto" }}>
				<div className='container'>
					<div className='center '>
						<h2 className='text-[#0018A8]-500' style={{ margin: "0px", padding: "0px", fontWeight: "bold" }}>
							${commaNumber(balance.toFixed(2))}
						</h2>
						<span className='dark:text-slate-300' style={{ fontSize: "11px" }}>
							MINING BALANCE
						</span>
						<br />
					</div>
					<div className='container'>
						<br />
						<ul className='space-y-5'>
							<li>
								<Link href='/user/mining/my-contracts'>
									<a className='p-5 bg-slate-300 block rounded-md text-[#0018A8]-500'>MY MINING CONTRACTS</a>
								</Link>
							</li>
							<li>
								<Link href='/user/deposits/crypto'>
									<a className='p-5 bg-slate-300 block rounded-md text-[#0018A8]-500'>BUY MINING CONTRACT</a>
								</Link>
							</li>
							{contracts && contracts.length && contracts.length > 0 ? (
								contracts.map((c) => (
									<li key={c.id} className='collection-item bg'>
										<div className='row'>
											<div className='col l1 center'>
												<img
													src={`/uploads/${c.logo}`}
													style={{ maxHeight: "40px", borderRadius: "10px" }}
												/>
											</div>
											<div className='col l9 s6'>
												{c.name}
												<br /> <span className='grey-text'>${commaNumber(c.price.toFixed(2))}</span>
											</div>
											<div className='col l2'>
												<br />
												<span className='grey-text'>{commaNumber(c.power)} GH/s</span>
												<br />
											</div>
										</div>
									</li>
								))
							) : (
								<li className='collection-item bg'>
									<div className='row'>
										<div className='p-4 rounded-md bg-red-100'>No Mining contracts available</div>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</section>
		</AuthUserLayout>
	)
}

export default AuthUserMining

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

		const contractsDB = await MiningContractModel.find({})
		const contracts = _.map(contractsDB, (contract) => _.pick(contract, ["id", "name", "_assetId", "price", "power"]))

		const userContracts = await UserMiningContractModel.find({ _userId: user.id })
		let balance = 0

		for (const u of userContracts) {
			const contract = await MiningContractModel.findById(u._contractId)
			const asset = await AssetModel.findById(contract._assetId)

			balance += u.quantity * asset.price
		}

		const contractsData = []

		for (const contract of contracts) {
			const asset = await AssetModel.findById(contract._assetId)

			const item = {
				id: contract.id,
				name: contract.name,
				price: contract.price,
				power: contract.power,
				logo: asset.logo,
			}

			contractsData.push(item)
		}

		// let tradingFundDB = await UserTradingFundModel.findOne({ _userId: user.id })

		// if(!tradingFundDB) {
		//     tradingFundDB = await new UserTradingFundModel({ _userId: user.id, balance: 0.0 })
		//     await tradingFundDB.save()
		// }

		// const categoriesDB = await AssetsCategoryModel.find({ }).sort("name")
		// const categories = _.map(categoriesDB, category => _.pick(category, ["id", "name"]))
		// const assetsDB = await AssetModel.find({ _categoryId: categories[0].id })
		// const assets = _.map(assetsDB, asset => _.pick(asset, ["id", "name", "price", "logo", "symbol", "type"]))
		// const tradingFund = _.pick(tradingFundDB, ["id", "balance"])

		// const openTradesDB = await UserTradingContractModel.find({ _userId: user.id, status: "open" })
		// const openTrades = _.map(openTradesDB, trade => _.pick(trade, ["id", "trade_value", "duration", "direction", "status", "_assetId", "gain"]))

		// openTrades.duration = openTrades.duration.toString()

		return {
			props: {
				contracts: contractsData,
				balance,
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
