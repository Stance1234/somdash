import { useState } from "react"
import Head from "next/head"
import UserLayout from "../components/layout/userLayout"

function Help() {
	const [tab, setTab] = useState(0)
	return (
		<UserLayout>
			<Head>
				<title>FAQs - Octatradeglobal</title>
			</Head>
			<div style={{ paddingBottom: "6rem", paddingTop: "2rem" }} className='fade-appear-done fade-enter-done'>
				<h1 className='center app-relative dark-text'>FAQs</h1>
				<p className='app-relative center dark-text'>Frequently Asked Questions</p>
			</div>

			<section className='bg app-pt-3 fade-appear-done fade-enter-done'>
				<div className='wow fadeInUp slow' style={{ visibility: "visible" }}>
					<h2 className='center-align'>FAQS</h2>
				</div>
				<div className='container app-py-3'>
					<div className='row'>
						<div className='col l6 s12'>
							<div className='app-padding wow fadeInUp slow' style={{ visibility: "visible" }}>
								<ul className='collapsible'>
									<li>
										<div onClick={() => setTab(1)} className='collapsible-header' tabIndex='0'>
											<i className='material-icons notranslate'>arrow_drop_down</i>
											Who are the trading experts?
										</div>
										<div className='collapsible-body' style={{ display: `${tab === 1 ? "block" : "none"}` }}>
											<span>
												<p>
													We carefully select expert applicants. We get to know them as a trader
													and examine their trading performance over a period of time. We also
													tend to look for expert who already have a following to further confirm
													their competence (social proof). You can also read about every expert on
													their individual performance pages.
												</p>
												<br />
											</span>
										</div>
									</li>
									<li>
										<div onClick={() => setTab(2)} className='collapsible-header' tabIndex='0'>
											<i className='material-icons notranslate'>arrow_drop_down</i>
											What is the recommended amount to start with?
										</div>
										<div className='collapsible-body' style={{ display: `${tab === 2 ? "block" : "none"}` }}>
											<span>
												<p>
													We suggest to have around $3000-$5000 in your account in BTC value due
													to exchanges minimum order requirements and so that you can at least
													cover the subscription cost every month.
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
											How does copy trading work?
										</div>
										<div className='collapsible-body' style={{ display: `${tab === 3 ? "block" : "none"}` }}>
											<span>
												<p>
													Here is how the copier works: You, as an investor, simply select an
													expert or experts that you want to copy trades from. Once you are signed
													up, this is the only action needed on your part.
												</p>
												<br />
												<p>
													Once you&apos;ve taken care of the above, you are all set. There are no
													codes that you need to run or signals for you to manually input. Our
													software will handle the trade copying automatically on your behalf. We
													monitor your experts trading activity and as soon as there is a trade,
													we calculate all the necessary parameters and execute the trade.
												</p>
												<br />
												<p>
													The only thing you have to make sure of is that you have enough
													available base currency that your expert trades with, in your trading
													account. How much is enough? First, you must meet the exchanges minimum
													order amount (let&apos;s say about $10 per trade to be safe). That means
													that if your expert executes a 5% order, you must have at least $300 in
													your account total value (at 100% expert allocation as an example). This
													also means that you need to have at least 10% or higher in available
													base currency to avoid missed trades.
												</p>
												<br />
												<p>
													When the expert exits a position, you too will exit it. Automatically.
													You can also change allocation at any time.
												</p>
											</span>
										</div>
									</li>
									<li>
										<div onClick={() => setTab(4)} className='collapsible-header' tabIndex='0'>
											<i className='material-icons notranslate'>arrow_drop_down</i>
											What are the fees?
										</div>
										<div className='collapsible-body' style={{ display: `${tab === 4 ? "block" : "none"}` }}>
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
				</div>
			</section>
		</UserLayout>
	)
}

export default Help
