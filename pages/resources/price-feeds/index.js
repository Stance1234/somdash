import UserLayout from "../../../components/layout/userLayout"

function PriceFeeds() {
	return (
		<UserLayout>
			<div className='b-rootLayout relative css-179ecci'>
				<div />
				<div className='center ph4 mw8-5 w-100 b-rootLayoutNavigationBump'>
					<div className='cf nmh4 flex-m flex-l flex-column items-center'>
						<div className='fl ph4 w-100 w-80-m w-60-l w-60-xl'>
							<div className='pv5 pv6-l'>
								<h1 className='pt2 f2 f1-m f-subheadline-l fw5 mt0 mw9 mb3 mb4-l'>Price Feeds</h1>
								<div className='lh-copy black-70 mb4'>Last updated: March, 2019</div>
							</div>
							<div className='mb5'>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									<a
										href='https://Octatradeglobal.github.io/Octatradeglobal-docs/'
										className='[#0018A8] no-underline'
										target='_BLANK'
										rel='noopener noreferrer'>
										Octa Trade Global Inc. Broker Platform V1
									</a>{" "}
									transactions will be assessed a notional USD value using the Tradeblock XBX Index rate at the
									time of the transaction. See Tradeblock&apos;s constituent prices and more information about the
									XBX methodology on the right panel at the link{" "}
									<a
										href='https://tradeblock.com/markets/index'
										className='[#0018A8] no-underline'
										target='_BLANK'
										rel='noopener noreferrer'>
										here
									</a>
									.
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									<a
										href='https://app.dashboard.octatradeglobal.com/docs/'
										className='[#0018A8] no-underline'
										target='_BLANK'
										rel='noopener noreferrer'>
										Octa Trade Global Inc. Broker Platform V2
									</a>{" "}
									transactions will be assessed a notional USD value using the BitcoinAverage rate at the time of
									the transaction. See BitcoinAverage&apos;s methodology{" "}
									<a
										href='https://bitcoinaverage.com/en/methodology'
										className='[#0018A8] no-underline'
										target='_BLANK'
										rel='noopener noreferrer'>
										here
									</a>
									.
								</div>
							</div>
							<div className='mb5'>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
									Octa Trade Global Inc. Broker Billing Methodology
								</h4>
								<div className='mb4'>
									<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
										Assets Under Custody (AUC) We calculate the assets-under-custody fees for a given set of
										wallets under an enterprise by coin. The set of wallets to bill with AUC billing can
										differ from contract to contract, but is usually all of the cold and custodial wallets the
										customer has. AUC billing is based on a percentage (bps) fee calculated on the average USD
										balance over the month (see “Computing Average Balance” below). Each coin and token bill
										is calculated separately and given its own line-item in the bill.
									</div>
									<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
										Even though custodial wallets may execute a minimal number of transactions and therefore
										have the same coin-based balance over the course of the month, the USD value of the coins
										varies over the hours of the month resulting in differing USD-based balances at each
										hourly fencepost.
									</div>
									<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
										There are exactly 720 hourly balances in a 30-day month. We calculate balances at the
										beginning of each hour, which means that transactions or price changes in the very last
										hour of the month are not reflected in the average for that month. However they will be
										reflected in the average for the following month.
									</div>
								</div>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Preservation of Value</h4>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									Octa Trade Global Inc. Broker also intends to preserve value for customers. When forks occur with significant
									value, Octa Trade Global Inc. Broker will work with customers to attempt to deliver that new value to customers.
									This may or may not mean that Octa Trade Global Inc. Broker can support the coin as a fully featured wallet with
									all the security principles that Octa Trade Global Inc. Broker generally tries to maintain. It may mean that
									Octa Trade Global Inc. Broker provides customers with tools such that they can access the coin and convert it to
									other forms of value.
								</div>
							</div>
							<div className='mb5'>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Computing Average Balance</h4>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									The billing system multiplies the balance at the start of the month by the price of the coin or
									token at the beginning of the month to compute the first hourly USD amount. It then adds the
									delta of the transactions that moved coin to/from the AUC wallets that happened in the next hour
									to the balance, and multiplies that amount by the price of the coin for the second hour in the
									month. The billing system continues this process until there are no more hours in the current
									month. It then takes the average of all the hourly USD holdings in the month, and multiples that
									by the rate or tiered rates specified in the customer&apos;s contract.
								</div>
							</div>
							<div className='mb5'>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
									Volume Discount Pricing (VDP) / Transactional Billing / Tiered Billing
								</h4>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									VDP/Transactional/Tiered billing is the billing structure used for hot wallet customers,
									although transactions executed from cold wallets still count towards VDP. For transactional
									billing, we bill all outgoing transactions from customer wallets sent to addresses not in the
									customer&apos;s enterprise. Billing in VDP is separated by coin, and each coin and token has its
									own entry or entries in the bill. In tiered billing each coin starts the count from 0. On each
									externally sent transaction, we use the USD value sent and count it towards the billable amount
									sent for that coin.
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									Let&apos;s look at an example customer with 2 tiers, $0 - $1,000,000 at 25 bps and $1,000,000
									and higher at 20 bps. Their BTC sends from 0 to 1 million USD will be billed at 25 bps, so they
									would pay $2,500 for it. All BTC sends thereafter will be billed at 20 bps. However, if the
									customer then did an ETH send of $100, it would still be billed in the 25 bps tier because the
									tiers are distinct for each coin. If a transaction exists in both tiers, such as when a customer
									that has already sent $999,000 in XRP later sends $2,000, then the first $1,000 would be billed
									at 25 bps and the next $1,000 at 20 bps.
								</div>
							</div>
							<div className='mb5'>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Final Bill</h4>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									The final bill adds together the AUC and VDP charges and compares that to the customer monthly
									minimum (MM).
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default PriceFeeds
