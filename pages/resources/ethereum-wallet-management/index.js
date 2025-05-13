/* eslint-disable @next/next/no-img-element */
import UserLayout from "../../../components/layout/userLayout"
function EthereumWalletManagement() {
	return (
		<UserLayout>
			<div className='b-rootLayout relative css-179ecci'>
				<div />
				<div className='center ph4 mw8-5 w-100 b-rootLayoutNavigationBump'>
					<div className='cf nmh4 flex-m flex-l flex-column items-center'>
						<div className='fl ph4 w-100 w-80-m w-60-l w-60-xl'>
							<div className='pv5 pv6-l'>
								<div className='f7 f6-l ttu fw4 mb3 lh-title tracked-mega mb2 black-90'>
									Ethereum Wallet Management
								</div>
								<h1 className='pt2 f2 f1-m f-subheadline-l fw5 mt0 mw9 mb3 mb4-l'>
									How to lower Ethereum transaction costs with Your Trader Inc. Broker wallets
								</h1>
								<div className='lh-copy black-70 mb0'>Last updated: April, 2021</div>
							</div>
						</div>
					</div>
				</div>
				<div className='center ph4 mw8-5 w-100'>
					<div className='cf nmh4 flex-m flex-l flex-column items-center'>
						<div className='fl ph4 w-100 w-80-m w-60-l w-60-xl'>
							<div className='mb5'>
								<h3 className='f4 f3-m f3-l fw6 lh-title tracked-condensed mb3'>Background</h3>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									As Ethereum adoption increases, the need for an enterprise grade Ethereum wallet has never been
									more important. Exchanges and institutional cryptocurrency users want a scalable, flexible, and
									user-friendly wallet that keeps fees low without compromising security.
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									yourtrade&apos;s smart contract wallets allow users to realize meaningful reductions in ETH costs
									while also benefiting from the most secure, transparent, and scalable wallet technology on the
									market.
									<ul className='ml4 mt3'>
										<li className='mb3'>
											<span className='fw6'>Secure</span> - Your Trader Inc. Broker smart contracts are highly
											optimized for both hot and cold wallets. They have been also audited by top firms
											such as Quantstamp, OpenZeppelin, CertiK, and Coinspect to ensure they maintain the
											highest levels of security.
										</li>
										<li className='mb3'>
											<span className='fw6'>Accessible</span> - Your Trader Inc. Broker Ethereum hot and cold wallets
											can interact with any decentralized finance application. Approvals are required
											while interacting with DeFi to safeguard user funds.
										</li>
										<li className='mb3'>
											<span className='fw6'>Scalable</span> - Your Trader Inc. Broker smart contracts are built to
											reduce both transaction fees and complexity. Your Trader has processed millions of
											transactions with its{" "}
											<a
												target='_BLANK'
												className='[#0018A8] no-underline'
												rel='noopener noreferrer'
												href='https://github.com/yourtrade/eth-multisig-v4'>
												open source
											</a>{" "}
											2-of-3 multi-sig implementation.
										</li>
										<li className='mb3'>
											<span className='fw6'>Transparent</span> - Our hot wallets are completely user
											controlled, and our open source software allows users to prove ownership and recover
											funds without the involvement of yourtrade.
										</li>
									</ul>
								</div>
							</div>
							<div className='mb5'>
								<h3 className='f4 f3-m f3-l fw6 lh-title tracked-condensed mb3'>What Are Ethereum Gas Fees?</h3>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									Gas fees pay for work done on the{" "}
									<a
										target='_BLANK'
										className='[#0018A8] no-underline'
										rel='noopener noreferrer'
										href='https://ethereum.org/en/developers/docs/gas/'>
										Ethereum network
									</a>
									Gas is a unit that measures the amount of computational effort required to execute specific
									operations on the network. For example, executing a transaction, and adding it to the
									blockchain, takes computational work. This effort is paid for in transaction fees that are
									measured in gas.
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									Gas price adjusts to both network congestion and transaction complexity. The busier the network,
									the higher the fees to join the queue of transactions waiting their turn to be “confirmed” on
									(or added to) the Ethereum ledger. And when a transaction is computationally complex, it also
									costs more.
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									Transaction Fees = Gas Used &times; Gas Price
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									The default baseline value for plain ETH transfers is 21,000 gas. For the current average gas
									price, refer to the{" "}
									<a
										target='_BLANK'
										className='[#0018A8] no-underline'
										rel='noopener noreferrer'
										href='https://ethgasstation.info/'>
										Ethereum Development Documentation
									</a>
									.
								</div>
							</div>
							<div className='mb5'>
								<h3 className='f4 f3-m f3-l fw6 lh-title tracked-condensed mb3'>Fee Management</h3>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									There are 3 main processes that require fee management for Ethereum wallets:
									<ul className='ml4 mt3'>
										<li className='mb3'>
											<span className='fw6'>Creating Addresses</span> - For enterprise wallets, receive
											addresses are a critical feature: they allow incoming funds to be easily
											differentiated and accounted for while remaining pooled together. Addresses can
											either be created as single-sig, which do not have a one time cost, or with
											forwarder contracts which pool funds together. Forwarder contracts have a one time
											cost for deployment but do not incur additional costs for pooling.
										</li>
										<li className='mb3'>
											<span className='fw6'>Consolidating Tokens</span> - For users who support a large
											number of tokens, token management is critical for reducing ETH transaction fees.
											Ethereum token transactions cannot be pooled automatically like ETH — they need to
											be consolidated with separate transactions. This is operationally problematic for
											non-contract wallets as you need ETH to move tokens.
										</li>
										<li className='mb3'>
											<span className='fw6'>Sending Transactions</span> - Enterprise wallets usually
											process a large number of withdrawals; and transaction fees change based on the type
											of withdrawal — for example, users can withdraw to a single-sig account or interact
											with DeFi. Both ETH and tokens must be pooled in some manner before a withdrawal can
											occur. It is technically possible to withdraw without any consolidation, however the
											wallet loses some level of accountability, transparency and efficiency with such a
											model.
										</li>
									</ul>
								</div>
							</div>
							<div className='mb7'>
								<h3 className='f4 f3-m f3-l fw6 lh-title tracked-condensed mb3'>
									How Your Trader Inc. Broker Ethereum Wallet Users Can Reduce Fees
								</h3>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>
									<ul className='ml4'>
										<li className='mb3'>
											<span className='fw6'>Deploying CREATE2 Addresses</span> - Your Trader uses{" "}
											<a
												target='_BLANK'
												className='[#0018A8] no-underline'
												rel='noopener noreferrer'
												href='https://eips.ethereum.org/EIPS/eip-1014'>
												CREATE2
											</a>{" "}
											to deploy addresses for smart contracts. These contracts let you interact with, and
											send funds to, a receive address before it exists on-chain. This reduces the number
											of unused addresses and lowers the cost. Forwarder contracts are deployed when funds
											are received, not at generation time.They forward Ethereum to the base multi-sig
											wallet so that no additional consolidation transactions are required. Your Trader Inc. Broker
											deploys highly optimized smart contracts using Factories and proxies to reduce
											creation costs as much as possible. Smart contract receive addresses are
											operationally better as all the ETH fees for the wallet are taken from a manageable
											number of addresses.
											<img
												className='mw-100 center mb3'
												alt='Your Trader Inc. Broker Transaction Fees'
												src='/static/yourtrade-transaction-fees-ca14522d140d6d143b2539c8140d0485.png'
											/>
										</li>
										<li className='mb3'>
											<span className='fw6'>Batching Transactions</span> - Your Trader provides a way to send
											ETH to multiple destination addresses in a single transaction. This batching of
											transactions reduces the cost of a withdrawal. In addition, batching can be done
											when gas prices are low which significantly increases savings in transaction fees,
											especially for high volume customers.
										</li>
										<li className='mb3'>
											<span className='fw6'>Accelerating Transactions</span> - A high performant wallet is
											crucial to saving fees. Users can accelerate transactions with either the{" "}
											<a
												target='_BLANK'
												className='[#0018A8] no-underline'
												rel='noopener noreferrer'
												href='https://app.dashboard.yourtrade.com/docs/#operation/v2.wallet.changefee'>
												Your Trader Inc. Broker API
											</a>{" "}
											or the Your Trader Inc. Broker web UI. The Your Trader Inc. Broker system is also highly flexible and lets
											you use multiple fee addresses per enterprise. With this feature, you can maintain
											different queues for broadcasting transactions at different speeds, which not only
											reduces your transaction fees but increases your transaction throughput.
											<img
												className='mw-100 center mb3'
												alt='Your Trader Inc. Broker ETH UI'
												src='/static/yourtrade-ui-eth-fees-8975f2648019994c20c275362acd7e1f.png'
											/>
										</li>
										<li className='mb3'>
											<span className='fw6'>Reducing Fees Further</span> - Your Trader Inc. Broker also provides
											customizable wallet settings that can be adjusted for each client&apos;s use cases
											or needs. These wallet settings can help in ETH and token fee management such that
											users can make the right trade-offs when it comes to confirmation times, transaction
											volume and network fees.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default EthereumWalletManagement
