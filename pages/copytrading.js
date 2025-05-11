import { useState } from "react"
import Head from "next/head"
import UserLayout from "../components/layout/userLayout"

function Copytrading() {
	const [tab, setTab] = useState(0)
	return (
		<UserLayout>
			<Head>
				<title>Copy Expert Traders - Octa Trade Global Inc. Broker </title>
			</Head>
			<div style={{ paddingBottom: "6rem", paddingTop: "2rem" }} className='fade-appear-done fade-enter-done'>
				<h1 className='center app-relative white-dark'>Copy Expert Traders</h1>
				<p className='app-relative center'>You dont need to be an expert trader to make profit, just copy traders</p>
			</div>

			<div className='container fade-appear-done fade-enter-done'>
				<br />
				<p style={{ textAlign: "justify" }}>
					It&apos;s all in the name! Copy trading allows you to directly copy the positions taken by another trader. You decide
					the amount you wish to invest and simply copy everything they do automatically in real-time &hypen; when that trader
					makes a trade, your account will make that same trade as well. You do not need to have any input on the trades, and you
					get the identical returns on each trade as your chosen trader. But by copying another trader, you could potentially make
					money based on their skills. In fact, no advanced knowledge of the financial market is required to take part!
				</p>
				<br />
				<p style={{ textAlign: "justify" }}>
					The history of copy trading goes back to 2005 when traders used to copy specific algorithms that were developed through
					automated trading. Brokers recognised the potential of having systems where any linked to that trader could
					automatically copy their trading account. There was no need to constantly monitor email signals or trading
					&apos;chat&apos; rooms. We think they were onto something. Out of this were born services that allowed traders to
					connect their personal trading accounts to their platform. Traders no longer had to submit their specific strategies.
					The popularity of copy trading has since exploded.
				</p>
				<br />
				<p style={{ textAlign: "justify" }}>
					1 in 3 say a traditional stock market approach is over-complex and this can be simplified by automatically following
					traders. 1 in 4 investors said they were considering Copy trading last year
				</p>
				<br />
				<p style={{ textAlign: "justify" }}>
					Here is how the copier works: You, as an investor, simply select an expert or experts that you want to copy trades from.
					Once you are signed up, this is the only action needed on your part.
				</p>
				<br />
				<p style={{ textAlign: "justify" }}>
					Once you&apos;ve taken care of the above, you are all set. There are no codes that you need to run or signals for you to
					manually input. Our software will handle the trade copying automatically on your behalf. We monitor your experts trading
					activity and as soon as there is a trade, we calculate all the necessary parameters and execute the trade.
				</p>
				<br />
				<p style={{ textAlign: "justify" }}>
					The only thing you have to make sure of is that you have enough funds available in your trading account. When the expert
					exits a position, you too will exit it. Automatically.
				</p>
				<div className='row'>
					<br />
					<h3 className='center'>Frequently Asked Questions</h3>
					<br />
					<div className='col l6 s12'>
						<div className='app-padding wow fadeInUp slow' style={{ visibility: "visible" }}>
							<ul className='collapsible'>
								<li className=''>
									<div onClick={() => setTab(1)} className='collapsible-header' tabIndex='0'>
										<i className='material-icons notranslate'>arrow_drop_down</i>
										Who are the experts?
									</div>
									<div className='collapsible-body' style={{ display: `${tab === 1 && "block"}` }}>
										<span>
											<p>
												We carefully select expert applicants. We get to know them as a trader and
												examine their trading performance over a period of time. We also tend to look
												for expert who already have a following to further confirm their competence
												(social proof). You can also read about every expert on their individual
												performance pages.
											</p>
										</span>
									</div>
								</li>
								<li>
									<div onClick={() => setTab(2)} className='collapsible-header' tabIndex='0'>
										<i className='material-icons notranslate'>arrow_drop_down</i>
										Recommended amount to start with?
									</div>
									<div className='collapsible-body' style={{ display: `${tab === 2 && "block"}` }}>
										<span>
											<p>
												We suggest to have around $3000-$5000 in your account due to exchanges minimum
												order requirements and so that you can at least cover the trading cost every
												month.
											</p>
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className='col l6 s12'>
						<div className='app-padding wow fadeInUp slow' style={{ visibility: "visible" }}>
							<ul className='collapsible'>
								<li>
									<div onClick={() => setTab(3)} className='collapsible-header' tabIndex='0'>
										<i className='material-icons notranslate'>arrow_drop_down</i>
										How does this work?
									</div>
									<div className='collapsible-body' style={{ display: `${tab === 3 && "block"}` }}>
										<span>
											<p>
												Here is how the copier works: You, as an investor, simply select an expert or
												experts that you want to copy trades from. Once you are signed up, this is the
												only action needed on your part.
											</p>
											<br />
											<p>
												Once you&apos;ve taken care of the above, you are all set. There are no codes
												that you need to run or signals for you to manually input. Our software will
												handle the trade copying automatically on your behalf. We monitor your experts
												trading activity and as soon as there is a trade, we calculate all the
												necessary parameters and execute the trade.
											</p>
											<br />
											<p>
												The copier works based on trade percent amount. So, for example, if your
												expert takes a position in XYZ coin for a total of 10% of his account value
												and you are 100% allocated to that expert, then the copier will also execute a
												trade in your account in the amount of 10% of your account value.
											</p>
											<br />
											<p>
												The only thing you have to make sure of is that you have enough available base
												currency that your expert trades with, in your trading account. How much is
												enough? First, you must meet the exchanges minimum order amount (let&apos;s
												say about $10 per trade to be safe). That means that if your expert executes a
												5% order, you must have at least $300 in your account total value (at 100%
												expert allocation as an example). This also means that you need to have at
												least 10% or higher in available base currency to avoid missed trades.
											</p>
											<br />
											<p>
												When the expert exits a position, you too will exit it. Automatically. You can
												also change allocation at any time.
											</p>
										</span>
									</div>
								</li>
								<li>
									<div onClick={() => setTab(4)} className='collapsible-header' tabIndex='0'>
										<i className='material-icons notranslate'>arrow_drop_down</i>
										What are the fees?
									</div>
									<div className='collapsible-body' style={{ display: `${tab === 4 && "block"}` }}>
										<span>
											We do not charge you any setup or maintenance fees, each trader gets a set
											percentage of the profit they make, make sure you check this percentage before
											copying any trader.
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<br />
				<br />
			</div>
		</UserLayout>
	)
}

export default Copytrading
