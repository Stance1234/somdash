import Head from "next/head"
import UserLayout from "../../components/layout/userLayout"

function MiningAbout() {
	return (
		<UserLayout>
			<Head>
				<title>Crypto Mining - bitgobroker
				
				</title>
			</Head>
			<div style={{ paddingBottom: "6rem", paddingTop: "2rem" }} className='fade-appear-done fade-enter-done'>
				<h1 className='center app-relative white-dark'>Crypto Mining</h1>
				<p className='app-relative center'>Get to know a new idea of money</p>
			</div>

			<div className='container fade-appear-done fade-enter-done'>
				<br />
				<section className='bg bg-secondary'>
					<br />
					<br />
					<div className='container'>
						<div className='app-flex-center'>
							<div className='carousel top carousel-slider' id='topcar' style={{ minHeight: "450px" }}>
								<div
									className='carousel-item active'
									style={{
										zIndex: "0",
										opacity: "1",
										visibility: "visible",
										transform: "translateX(0px) translateX(0px) translateX(0px) translateZ(0px)",
									}}>
									<div className='row'>
										<div className='col l6 s12'>
											<h2>Why is mining so important?</h2>
											<b>
												Cryptocurrency networks need computational power to run securely. The
												world&apos;s most powerful blockchains are supported by millions of computers
												around the world.
											</b>
											<br />
											<br />
											<p>
												Unlike paper money, Bitcoin and other cryptocurrencies are produced
												mathematically and held digitally. The people who voluntarily offer their
												computing power to secure these cryptocurrency networks are called miners.
												Cryptocurrencies don&apos;t have a central government or other so-called
												&apos;middlemen&apos; that decide about the future of the system. &hypen; They
												are in fact digital, borderless democracies in which miners vote with their
												computing power to reach order and consensus.
											</p>
										</div>
										<div className='col l6 s12'>
											<img
												src='/images/Slide1.jpg'
												className='circle responsive-img'
												style={{ maxHeight: "400px" }}
											/>
										</div>
									</div>
								</div>
								<div
									className='carousel-item'
									style={{
										transform: "translateX(0px) translateX(715px) translateZ(0px)",
										zIndex: "-1",
										opacity: "1",
										visibility: "visible",
									}}>
									<div className='row'>
										<div className='col l6 s12'>
											<h2>How is Bitcoin kept secure?</h2>
											<b>
												The only way to not create money out of thin air or corrupt it, is to burn
												real energy. This is called Proof-Of-Work.
											</b>
											<br />
											<br />
											<p>
												Today, bitcoin is the most secure computer network on the planet and it&apos;s
												practically impossible to break it! The reason for that is hash power, the
												umbrella term used for the computing power that miners provide to the bitcoin
												network and similar cryptocurrency networks. Due to the rapid growth of the
												ecosystem, mining operations today are mostly running with specialized
												high-performance computers that function most efficiently set up in large data
												centers.
											</p>
										</div>
										<div className='col l6 s12'>
											<img
												src='/images/Slide2.jpg'
												className='circle responsive-img'
												style={{ maxHeight: "400px" }}
											/>
										</div>
									</div>
								</div>
								<div
									className='carousel-item'
									style={{
										transform: "translateX(0px) translateX(-1430px) translateZ(0px)",
										zIndex: "-2",
										opacity: "1",
										visibility: "visible",
									}}>
									<div className='row'>
										<div className='col l6 s12'>
											<h2>What&apos;s the Incentive for miners?</h2>
											<b>
												It all comes down to trust: Miners keep the blockchains trustworthy and are
												rewarded for their efforts.
											</b>
											<br />
											<br />
											<p>
												As miners, we are processing and verifying the transactions of the
												cryptocurrency ecosystems and keeping their public transaction history
												(blockchains) maintained and secure. For this, the mining community is
												rewarded with the networks&apos; transaction fees and newly created coins.
												It&apos;s a win-win situation! When you start mining with us, you are getting
												your share of this reward.
											</p>
										</div>
										<div className='col l6 s12'>
											<img
												src='/images/Slide3.jpg'
												className='circle responsive-img'
												style={{ maxHeight: "400px" }}
											/>
										</div>
									</div>
								</div>
								<div
									className='carousel-item'
									style={{
										transform: "translateX(0px) translateX(-715px) translateZ(0px)",
										zIndex: "-1",
										opacity: "1",
										visibility: "visible",
									}}>
									<div className='row'>
										<div className='col l6 s12'>
											<h2>The big vision of cryptocurrency</h2>
											<b>The future will be decentralized.</b>
											<br />
											<br />
											<p>
												To keep the integrity (and values!) of all cryptocurrency ecosystems intact,
												miners keep the networks safe and its authority decentralized by keeping each
												other constantly in check. This allows both a healthy growth and a fair
												distribution of currency units to all crypto-citizens!
											</p>
										</div>
										<div className='col l6 s12'>
											<img
												src='/images/Slide4.jpg'
												className='circle responsive-img'
												style={{ maxHeight: "400px" }}
											/>
										</div>
									</div>
								</div>
								<ul className='indicators'>
									<li className='indicator-item active'></li>
									<li className='indicator-item'></li>
									<li className='indicator-item'></li>
									<li className='indicator-item'></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className='bg app-py-3'>
					<div className='container'>
						<center>
							<h2>Why Octatradeglobal?</h2>
							<br />
							<span>We are making mining accessible to everyone.</span>
							<br />
							<p>
								We are uniting all key aspects of running an efficient cryptocurrency mining operation. From building
								highly efficient
								<br />
								data centers to providing a streamlined mining system for our users.
							</p>
						</center>
						<br />
						<br />
						<div className='row app-pt-3 app-mt-3'>
							<div className='col l4'>
								<div className='card-panel'>
									<h3>We make mining competitive.</h3>
									<br />
									<p>
										To mine competitively today, you need to invest significant resources, time and effort
										into your setup. Our team has built the most efficient mining systems to do the job for
										you. This way you can fully focus on keeping track of the markets and remain competitive
										with your mining rewards.
									</p>
								</div>
							</div>
							<div className='col l4'>
								<div className='card-panel'>
									<h3>Contributing to the ecosystem.</h3>
									<br />
									<p>
										Besides being the portal for interesting mining data, we are also actively contributing to
										the cryptocurrency ecosystem, from launching awareness campaigns to releasing open-source
										mining software.
									</p>
									<br />
									<br />
									<br />
								</div>
							</div>
							<div className='col l4'>
								<div className='card-panel'>
									<h3>
										Multi-algorithm
										<br />
										support.
									</h3>
									<br />
									<p>
										We are building mining data centers around the world that are able to support 6 mining
										algorithms for 10+ different cryptocurrencies. If that&apos;s not enough, we&apos;d be
										happy to also support the ones you want to mine!
									</p>
									<br />
									<br />
								</div>
							</div>
						</div>
					</div>
				</section>
				<br />
				<br />
			</div>
		</UserLayout>
	)
}

export default MiningAbout
