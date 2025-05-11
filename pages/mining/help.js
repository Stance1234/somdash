import Head from "next/head"
import UserLayout from "../../components/layout/userLayout"

function MiningHelp() {
	return (
		<UserLayout>
			<Head>
				<title>Mining Help - Octatradeglobal</title>
			</Head>
			<div style={{ paddingBottom: "6rem", paddingTop: "2rem" }} className='fade-appear-done fade-enter-done'>
				<h1 className='center app-relative white-dark'>Mining Help</h1>
				<p className='app-relative center'>Frequently Asked Questions</p>
			</div>
			<div className='container fade-appear-done fade-enter-done'>
				<br />
				<section className='bg app-py-3'>
					<div className='container'>
						<div className='wow fadeInUp' style={{ visibility: "visible" }}>
							<h3 className='center'>Top Questions</h3>
							<br />
						</div>
						<div className='row'>
							<div className='col l6 s12'>
								<div className='app-padding wow fadeInUp' style={{ visibility: "visible" }}>
									<ul className='collapsible'>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												How does Bitcoin mining work with Octatradeglobal
											</div>
											<div className='collapsible-body'>
												<span>
													It&apos;s quick and very easy! As soon as we receive your payment your
													contract will be added to your profile, and you can immediately start
													mining. Depending on the blockchain algorithm you select and the
													associated mining service agreement you enter into, you can either mine
													native cryptocurrencies directly or allocate your hashpower to other
													cryptocurrencies (marked with AUTO), and even choose a specific
													allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The
													first mining output is released after 48 hours, and then a daily mining
													output will follow.
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												Are you mining for yourself?
											</div>
											<div className='collapsible-body'>
												<span>
													Besides the fact that we ourselves mine with the very same hardware that
													we offer to our clients, our capital is limited. We believe that Bitcoin
													and Altcoin mining is one of the best ways to receive Cryptocurrencies,
													however, we do not want to “put all our eggs in one basket”.
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												Where is your mining farm located?
											</div>
											<div className='collapsible-body'>
												<span>
													For security reasons, we do not disclose the exact location of our
													mining farms. As of April 2015, we are operating several mining farms
													that are located in Europe, America and Asia. Electricity cost and
													availability of cooling are important, but not the only criteria. See
													our Datacenters page for more information.
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												What coins I mine with each algorithm?
											</div>
											<div className='collapsible-body'>
												<span>
													<p>
														You are able to mine Bitcoin and various altcoins directly via our
														mining allocation page*. The availability of cryptocurrencies you
														can mine depends on the contract you have chosen.
													</p>
													<p>
														You must allocate your hashpower in order to determine the
														cryptocurrency received for your mining output. If no allocation
														has been made, the mining output will default to the following for
														the given blockchain algorithm:
													</p>
													SHA-256 contract - Bitcoin
													<br />
													Ethash contract - Ethereum
													<br />
													<p>
														(*) “Octa Trade Global Broker Advanced Allocation” (special feature): It allows you
														to get mining outputs in many different coins even if they are not
														mined directly by a certain algorithm. For example, you can get
														mining outputs in BTC while mining with an X11 algorithm! That is
														possible by mining the DASH coin directly, which is then
														automatically swapped to BTC by our algorithmic framework. The
														Allocation function is designed for customers to receive delivery
														of their mining results in their preferred cryptocurrency. We call
														it “mining BTC the smart way”. The same technique is also used to
														get mining results in LTC with a SHA-256 contract, etc.
													</p>
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												How do your ether contracts work?
											</div>
											<div className='collapsible-body'>
												<span>
													<span>
														<p>
															When you purchase an Ether mining contract, you buy a share
															of a GPU (“graphics processing unit“) to mine Ethereum. The
															hashing algorithm used to mine Ether is called Ethash (or
															Dagger-Hashimoto).
														</p>
														<p>
															Ethash requires the so called DAG file in order to perform
															the calculations. This file grows over time, which means
															that more operations for each hashing operation need to be
															performed. This means that the effective hashrate decreases
															a little each time the DAG file grows.
														</p>
														<p>
															This has to be considered when comparing the theoretical
															output of your hashpower. Online calculators do not take
															this into account.
														</p>
														<p>
															Also, please keep in mind that some of our products have a
															maintenance fee attached.
														</p>
													</span>
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className='col l6 s12'>
								<div className='app-padding wow fadeInUp' style={{ visibility: "visible" }}>
									<ul className='collapsible'>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												What are the expected returns?
											</div>
											<div className='collapsible-body'>
												<span>
													<p>
														Bitcoin and altcoin mining depends highly on the prices and
														network difficulties of the Cryptocurrencies that you are mining,
														which cannot be predicted. It would not “look right” if we would
														provide data on the mining performance and sell contracts at the
														same time. Therefore, we recommend all our clients to do their own
														research and do their own performance calculation.
													</p>
													<p>
														For example, you might want to have a look at coinwarz.com.
														Remember that some of our products have a daily maintenance fee
														which must be deducted from the daily mining rewards.
													</p>
													<p>
														Please note that the website is an independent source of reference
														and not related to Octa Trade Global Broker in any manner.
													</p>
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												Which pools are you using for mining?
											</div>
											<div className='collapsible-body'>
												<span>
													<p>
														We do not publish a list of pools we are using. Our main criteria
														for a good pool are: reliability, fee structure and reject rate.
														Going forward we will solo-mine a few coins (and pass the fee
														savings to our users!).
													</p>
													<p>
														Our internal policy is: “be a good crypto citizen”. This means,
														that we will at least use two different pools (in some cases we
														use up to four) for each coin. This is to preserve the
														decentralized nature of the crypto networks! If we become aware
														that a pool is getting close to 50% share, we will switch away
														from it and use a backup instead.
													</p>
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												Isn&apos;t buying hardware cheaper?
											</div>
											<div className='collapsible-body'>
												<span>
													<p>
														On the first glance one might think that buying miner X is
														slightly cheaper than hosted mining. However, there are a number
														of “hidden” costs related to purchasing and maintaining a miner
														that change the economics significantly:
													</p>
													<p>
														Shipping costs: few merchants will cover this, but in most cases
														they will charge you extra.
													</p>
													<p>
														Customs dues / VAT: if it is an international delivery you will
														likely have to pay customs dues and VAT; generally this has a huge
														impact on the total cost of your mining equipment.
													</p>
													<p>
														Delivery time: when you pay for your device you have to wait until
														the miner is packaged and shipped; if it is held up in the customs
														this can take weeks. And during that time you cannot mine at all
														(“opportunity costs”). You have to wait and hope. And if the
														merchant has a stock shortage; it is you who has to wait.
														WithBitgo Broker you pay and get your hashpower immediately online. No
														delays!
													</p>
													<p>
														Costs for additional equipment: when buying miners from larger
														retailers you often have to buy additional equipment like an extra
														PSU that matches the electricity specs for your country, control
														units and specific shelves to store them efficiently. This adds up
														significantly to the overall price for hashpower.
													</p>
													<p>
														Setting the system up: when the device finally arrived you have to
														assemble and configure it. Beginners often underestimate the
														amount of work and technical knowledge that is needed to bring the
														device up and optimize its settings. People that used the first
														ASICs spend days and weeks on it. In monetary terms this costs you
														twice: (i) your time and (ii) lost mining opportunity.
													</p>
													<p>
														Maintenance: hardware failures, outages and crashes could lead to
														downtimes between seconds and weeks. If your unit breaks you have
														to return it and start from scratch (by the way: check the
														guarantee time of your miner; it is often less than a year). With
														Octa Trade Global Broker you have a guaranteed uptime of 100%: in case one of your
														units fails another unit will be switched over and start mining
														for you the very same second.
													</p>
													<p>
														Electricity: having the machines at home not only brings heat and
														noise, but also an increase of your electricity bill; an important
														factor that many underestimate. Please do not get us wrong: we do
														not want to discourage anyone from mining at home! We are often
														asked about prices and realized that many users do not know about
														all the hidden costs. If you compare the true costs, you will
														notice that our prices are very competitive. We want to provide
														you the best possible mining experience, so that you can focus on
														mining your favorite coins (and we take care of the rest).
													</p>
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												What is the maintenance fee?
											</div>
											<div className='collapsible-body'>
												<span>
													<p>
														Some of our products have a maintenance fee attached. The
														maintenance fee covers all costs related to mining including,
														inter alia:
														<br />
														<br />
														electricity cost
														<br />
														cooling
														<br />
														maintenance work
														<br />
														hosting services
														<br />
														<br />
														The fee is fixed in USD but deducted from the daily mining rewards
														in the natively mined coin on a daily basis.
													</p>
												</span>
											</div>
										</li>
										<li>
											<div className='collapsible-header' tabIndex='0'>
												<i className='material-icons notranslate'>arrow_drop_down</i>
												How can I mine different coins at the same time?
											</div>
											<div className='collapsible-body'>
												<span>
													<span>
														<p>
															Octa Trade Global Broker allows its clients to mine different types of coins at
															the same time. You decide which coins you prefer and you can
															allocate hashpower accordingly.
														</p>
														<p>
															Each mining algorithm is set up with a default delivery
															cryptocurrency. The Octa Trade Global Broker Advanced Auto-Allocation (in short
															“AUTO”) will apply to all cryptocurrencies which cannot be
															mined directly. In the user interface go to “Mining
															Allocation” and choose the hashpower allocation that is best
															for you. When you are done press “save allocation”.
														</p>
														<p>
															Remember that the cryptocurrencies marked with (AUTO) are
															not directly mined, as mentioned in the “What coins can I
															mine?” section of this Customer Service page.
														</p>
														<p>
															In order to get the mining output, please ensure to add your
															wallet address(es) to your Octa Trade Global Broker profile. Find out more
															details about how to add your wallet(s) in the next section.
														</p>
													</span>
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className='bg app-py-3'>
					<h2 className='center'>Frequnetly asked questions</h2>
					<br />
					<center>
						<ul className='tabs'>
							<li className='tab col s2'>
								<a href='#account' className='active'>
									<span>My account</span>
								</a>
							</li>
							<li className='tab col s2'>
								<a href='#outputs' className=''>
									<span>Mining outputs</span>
								</a>
							</li>
							<li className='tab col s2'>
								<a href='#allocation' className=''>
									<span>Allocation</span>
								</a>
							</li>
							<li className='tab col s2'>
								<a href='#contracts' className=''>
									<span>Contracts</span>
								</a>
							</li>
							<li className='tab col s2'>
								<a href='#affiliate' className=''>
									<span>Affiliate Program</span>
								</a>
							</li>
							<li className='tab col s2'>
								<a href='#general' className=''>
									<span>General</span>
								</a>
							</li>
							<li className='indicator' style={{ left: "0px", right: "657px" }}></li>
						</ul>
					</center>
					<div className='container'>
						<div id='account' className='active' style={{ display: "block" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How can I unlock my account?
									</div>
									<div className='collapsible-body'>
										<span>
											Due to security measures, your account can only be unlocked by customer support.
											Please submit a ticket via the web contact form below (select: &apos;My account -
											General - Unlock my account&apos;) and we will unlock your account for you. Before
											submitting, make sure you enter the primary e-mail address of your account, or else
											we won&apos;t be able to help you.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>I forgot my 2FA code, what can I do?
									</div>
									<div className='collapsible-body'>
										<span>
											For security reasons, we only allow the deactivation of the 2FA code through a
											personal dialog via ticket. Please scroll down to the web contact form, select:
											&apos;My account - General - Lost access to my device (I forgot 2FA code)&apos; and
											we will send you the instructions on how to confirm your account ownership. Before
											submitting the ticket, please make sure you enter the primary e-mail address of your
											Octa Trade Global Broker account, or else we won&apos;t be able to help you.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How can I change my email address
									</div>
									<div className='collapsible-body'>
										<span>
											For your security, we only allow e-mail address modifications after following an
											identification procedure. Please contact our customer service team via ticket for
											further information. In case you have access to your primary e-mail, submit your
											request via your account under &apos;My Account - Contact Customer Service&apos;.
											Just select &apos;My account - General - Change my login email address&apos; in our
											service topic drop-down menu. In case you have lost access to your primary e-mail,
											submit your request via our web contact form below. Just enter your new e-mail
											address and select &apos;My account - General - Lost access to my email&apos; in our
											service topic drop-down menu.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How can I setup a new wallet
									</div>
									<div className='collapsible-body'>
										<span>
											We do not offer a wallet service as of yet, but you can find many wallets available
											online. There are many different wallet types and we do not favor any specific one.
											Please go to MY ACCOUNT / SETTINGS / WALLETS in your GM profile and you will find a
											suggestion for every type of wallet. After you set up your address, keep in mind
											that sometimes it can take up to 48 hours for the change to take effect. How can I
											create a new a
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How can I create a new account
									</div>
									<div className='collapsible-body'>
										<span>
											To create a Octa Trade Global Broker account, simply click on SIGN UP, enter your e-mail address and a
											secure password, and repeat the chosen password. Read and agree to the Privacy
											Policy by checking the box (mandatory), and decide if you&apos;d like to receive
											occasional e-mails about our offers and discounts (optional). After you confirm the
											reCAPTCHA and click on &apos;Sign Up&apos;, go to your e-mail Inbox and verify your
											e-mail address.* Once you click on the verification link, it will automatically log
											you into your Octa Trade Global Broker account. *In case you did not receive a verification e-mail,
											please also check your Junk/Spam folder. If you cannot find the e-mail in any of the
											folders, please go to the Octa Trade Global Broker &apos;Login&apos; page, enter the needed info to log
											in, and there you will be able to select &apos;Resend verification e-mail&apos;.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How can I erase my account?
									</div>
									<div className='collapsible-body'>
										<span>
											If you have decided that you want to delete your account and stop being a member of
											the Octa Trade Global Broker family, please contact our customer service using your primary e-mail
											address. Just select &apos;My account - General - Terminate my account&apos; in our
											topic drop-down menu. We wish you success in all your future crypto endeavors!
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div id='outputs' className='' style={{ display: "none" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Why is my mining output decreasing?
									</div>
									<div className='collapsible-body'>
										<span>
											We do not control the market evolution and thus we cannot control the mining
											rewards. There are certain factors which may affect your outputs depending on the
											product you have purchased. This is the way your mining outputs will mostly vary: 1.
											It may happen that due to the lower mining output, the global interest in mining the
											natively mined coin of your contract diminishes. This would mean a decrease in the
											mining difficulty, which would also have a positive impact increasing your mining
											outputs. Conversely, if difficulty rises, your output will decrease. 2. If you
											change your allocation to any of the available AUTO coins (not natively mined), your
											mining outputs will be traded from the coin that is natively mined to the selected
											AUTO coin(s). Therefore, the exchange rate will affect your mining outputs. For any
											further questions regarding your contract, feel free to contact us via our web form
											or the “Contact Customer Service” section on your Octa Trade Global Broker account.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										What are the expected returns
									</div>
									<div className='collapsible-body'>
										<span>
											Since third-party calculators are a popular way of estimating mining performance, we
											have set up a Performance estimation tutorial on how to make your own calculations,
											along with the general explanation about potential mining scenarios. When evaluating
											the benefits, please keep in mind that mining, and using our service, is subject to
											a daily maintenance fee (if applicable to your mining plan) which must be deducted
											from the daily mining rewards. The results of cryptocurrency mining highly depend on
											the price and the network difficulties of the given cryptocurrencies that you are
											mining. Neither of those can be predicted, so each customer must make an independent
											decision about the benefits of cryptocurrency mining and, in doing so, should
											consider the risks and their own circumstance when choosing whether to mine.
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div id='allocation' className='' style={{ display: "none" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Why is my allocation switching back to BTC (SHA-256)
									</div>
									<div className='collapsible-body'>
										<span>
											The allocation is only reverting in appearance. Each time you click on &apos;Mining
											allocation&apos;, you will be sent to SHA-256 by default. Thus, to see the
											allocation for X11, Zcash, Ethash, Monero, or Scrypt, please click on X11, Zcash,
											Ethash, Monero, or Scrypt at the top of the page. You will be shown the correct
											allocation.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How does allocation work?
									</div>
									<div className='collapsible-body'>
										<span>
											Every algorithm can mine only certain cryptocurrencies directly: SHA-256 mines BTC
											and BCH X11 mines DASH Ethereum mines ETH and ETC Zcash mines ZEC Scrypt mines LTC
											and DOGE CryptoNight-R mines XMR CryptoNightV0 mines XMC The other coins are marked
											with AUTO and they are not mined directly. In other words, mining outputs will be
											traded automatically from the mined coins to the AUTO ones at the exchange rate of
											that day.
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div id='contracts' className='' style={{ display: "none" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										The product is a monthly or yearly payment?
									</div>
									<div className='collapsible-body'>
										<span>
											The cost is a one-off payment. In addition, some of our products have a daily
											maintenance fee, which is deducted from the daily mining rewards. You will find the
											details about upfront costs and fees in the Terms of Service of your contract.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										What is the maintenance fee?
									</div>
									<div className='collapsible-body'>
										<span>
											Some of our products have a maintenance fee attached. The maintenance fee covers all
											costs related to mining including, inter alia: electricity cost cooling maintenance
											work hosting services The fee is fixed in USD but deducted from the daily mining
											rewards in the natively mined coin on a daily basis. You will find the maintenance
											fee details of your chosen contract in the Terms of Service before the purchase.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Can I get a refund?
									</div>
									<div className='collapsible-body'>
										<span>No refunds are accepted as stated in the contract.</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Can I use my mining outputs to purchase additional hosted mining services?
									</div>
									<div className='collapsible-body'>
										<span>
											Unfortunately, at the moment, that is not possible. We are working on an
											AUTO-UPGRADE option that you will find on your dashboard. Until then, you can
											accumulate your mining outputs in your private wallet, and then use them to purchase
											a new contract.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Why has my payment order expired
									</div>
									<div className='collapsible-body'>
										<span>
											We only allow 30 minutes for the payment in cryptocurrencies to reach our wallet.
											After this period, the order will expire. Please try again or contact our customer
											service team directly to help you set your order manually.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Why is my transaction unconfirmed on the blockchain
									</div>
									<div className='collapsible-body'>
										<span>
											As soon we send out the coins, the transaction is within the blockchain waiting for
											confirmation. We can assure we send out the transactions with the proper fees but
											sometimes there are some delays in the blockchain. Unfortunately, we cannot
											accelerate this process from our end. Please keep in mind that some wallets only
											show the transactions once a certain number of blockchain confirmations have been
											reached.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										Why do I have less hashpower now?
									</div>
									<div className='collapsible-body'>
										<span>
											This is probably due to some of your contracts becoming inactive. This means that
											the mining rewards are not covering the maintenance fee of your associated machines
											any longer, and thus your contracts have been terminated. Please contact our
											customer service team directly for further information.
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div id='affiliate' className='' style={{ display: "none" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How do I use my affiliate link?
									</div>
									<div className='collapsible-body'>
										<span>
											Share it! Twitter, Facebook, your brother&apos;s podcast or your mom&apos;s blog -
											it doesn&apos;t matter where, but get it out there!
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How big are the rewards?
									</div>
									<div className='collapsible-body'>
										<span>
											At Rank 1 - our &apos;Starter&apos; tier - you&apos;ll get 2.5% of the quantity of
											hashpower purchased by your referral. For example, if someone purchases a 10 MH/s
											contract using your affiliate code, you&apos;ll get 0.25MH/s for free - and
											they&apos;ll get 3% off the total price. It&apos;s a win-win situation!
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										What do you mean by ranking system?
									</div>
									<div className='collapsible-body'>
										<span>
											Our tier-based program means you&apos;ll level up based on your progress: the more
											you refer, the bigger the bonus. There are a total of eight ranks to achieve, each
											with a bigger reward than the last - and some very special rewards.
										</span>
									</div>
								</li>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										How do I `rank up`?
									</div>
									<div className='collapsible-body'>
										<span>
											Your rank is based on the total amount your referrals have purchased over the last
											100 days. You start at Rank 1 - Starter. To move up in rank, you&apos;ll need to
											collect a total of $100 USD in referred sales. If you refer $50 USD in sales in the
											two weeks, then another $60 USD in the third week, your total amount purchased by
											your referrals will be $110 USD - so you&apos;ll hit Rank 2 - Copper. Six weeks
											later, your referrals might purchase another $400 USD - your total would be $510
											USD, and you&apos;d hit Rank 3 - Bronze. Ranks are based over the last 100 days -
											that means they&apos;re variable and your rank can &apos;decay&apos; over time. Any
											referral&apos;s purchase older than 100 days will be discarded, and your rank (and
											reward) adjusted accordingly. You&apos;ll see your current rank and total sales
											performance on your affiliate page.
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div id='general' className='' style={{ display: "none" }}>
							<ul className='collapsible'>
								<li>
									<div className='collapsible-header' tabIndex='0'>
										<i className='material-icons'>arrow_drop_down</i>
										What are the payment methods
									</div>
									<div className='collapsible-body'>
										<span>
											These are our payment methods: credit/debit card: Visa, Mastercard cryptocurrencies:
											Bitcoin, Ethereum
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

export default MiningHelp
