import Head from "next/head"
import UserLayout from "../components/layout/userLayout"

function Cryptos() {
	return (
		<UserLayout>
			<Head>
				<title>Trade Top Cryptocurrencies - Your Trader Inc. Broker </title>
			</Head>
			<div style={{ paddingBottom: "6rem", paddingTop: "2rem" }} className='fade-appear-done fade-enter-done'>
				<h1 className='center app-relative white-dark'>Trade Top Cryptocurrencies</h1>
				<p className='app-relative center'>Bitcoin, Ethereum, Ripple and other crypto assets at your disposal</p>
			</div>

			<div className='container fade-appear-done fade-enter-done'>
				<br />
				<h3>Build Your Cryptocurrency Trading Portfolio with Your Trader Inc. Broker </h3>
				<p>
					Your Trader Inc. Broker is excited to announce the launch of our new cryptocurrency trading platform. Now you can start trading Bitcoin,
					Ethereum and many more cryptocurrencies quickly, easily and safely from wherever you are — in just seconds. You get
					great margin trading leverage and short sell options with fast deposits and withdrawals. Our support team is available
					24/7/365 to help get you trading on our CySEC-regulated platform with a trading volume of US $11 billion monthly.
				</p>
				<h3>What is a crypto currency</h3>
				<p>
					A cryptocurrency like bitcoin is a virtual currency traded peer-to-peer on a blockchain, independent of centralized
					authorities like banks and governments. Cryptocurrencies are entirely virtual, so they are not backed by physical
					commodities and have no intrinsic value.
				</p>
				<h3>How Do Cryptocurrencies Work?</h3>
				<p>
					Primarily, cryptocurrencies rely on blockchain technology to complete a transaction via an intricate P2P network. Once a
					transfer request is entered into the network, it is validated by the network and added to a pool of other transactions
					to create a block of data for the ledger, which is then entered into the existing blockchain. Once the block is
					successfully added to the chain, the transaction is approved and completed.
				</p>
				<h3>Are There Investment Opportunities with Cryptocurrencies?</h3>
				<p>
					Absolutely. Cryptocurrencies have become established investment commodities among major financial institutions and have
					even been adopted by countries such as Australia and Japan. As with any investment though, there are risks linked to
					market movements, high volatility and economics.
				</p>
				<br />
				<br />
			</div>
		</UserLayout>
	)
}

export default Cryptos
