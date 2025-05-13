import { useEffect, useState } from "react"
import Image from "next/image"

function ExploreEnigma() {
	const [currentImage, setCurrentImage] = useState(1)
	useEffect(() => {
		function cycleImages() {
			setCurrentImage((prev) => (prev % 4) + 1)
		}

		let interval = null

		if (!interval) interval = setInterval(cycleImages, 5000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div className=' app-py-3 center app-image-back-10'>
			<h1 className='wow fadeInUp slow text-2xl font-bold text-[#0018A8]-500 dark:text-slate-300' style={{ visibility: "visible" }}>
				EXPLORE ENIGMA
			</h1>
			<div className='container'>
				<p className='wow fadeInUp slow dark:text-slate-300' style={{ visibility: "visible" }}>
					The evolution of one of the world&apos;s largest cryptocurrency mining facilities
				</p>
				<p className='wow fadeInUp slow dark:text-slate-300' style={{ visibility: "visible" }}>
					Enigma is one of the largest cryptocurrency mining facilities in the world. First built to exclusively mine Ethereum,
					the facility is being continuously upgraded for mining state-of-the-art Blockchain technology. Enigma&apos;s
					computational performance is achieved with specifically designed mining rigs that efficiently mine hashing algorithms
					for various cryptocurrencies such as Zcash, Dash, Monero and others. The Enigma facility is powered by geothermal
					energy, and resides in the capital of Iceland.
				</p>
			</div>
			<section className='container'>
				<div className='container app-py-3'>
					<div className='card-panel' style={{ padding: "0px" }}>
						<div className='app-flex-center'>
							<div className='carousel top carousel-slider enigma' id='engima' style={{ height: "362.938px" }}>
								<div className='carousel-item' style={{ visibility: `${currentImage === 1 ? "visible" : "hidden"}` }}>
									<div className='row'>
										<div className='col l6 s12'>
											<Image
												src={"/images/Enigma1.webp"}
												style={{ maxWidth: "100%" }}
												placeholder='blur'
												alt='Energy'
											/>
										</div>
										<div className='col l6 s12 center'>
											<br />
											<h2>
												<span style={{ color: "rgb(187, 191, 194)" }}>01</span> <br />
												Energy (Iceland + Geothermal Energy)
											</h2>
											<br />
											<p className='container'>
												The results of cryptocurrency mining highly depend on infrastructure
												efficiency and electricity rates, which make renewable energy sources - such
												as geothermal and hydropower - the go-to solution for a cost-effective and
												clean mining operation. Today, over 80% of Iceland&apos;s energy is provided
												by renewable sources.
											</p>
										</div>
									</div>
								</div>
								<div className='carousel-item' style={{ visibility: `${currentImage === 2 ? "visible" : "hidden"}` }}>
									<div className='row'>
										<div className='col l6 s12'>
											<Image
												src={"/images/Enigma2.webp"}
												style={{ maxWidth: "100%" }}
												alt='mining hardware'
												placeholder='blur'
											/>
										</div>
										<div className='col l6 s12 center'>
											<br />
											<h2>
												<span style={{ color: "rgb(187, 191, 194)" }}>02</span>
												<br />
												Mining Hardware
											</h2>
											<br />
											<p className='container'>
												Enigma is powered by a setup of optimized GPUs (graphic processing units).
												These GPUs are placed in &apos;Rigs&apos; which are specifically designed to
												house as much hashing power as efficiently as possible. The miners&apos;
												software is configured for maximum performance by mining Kernels (hardware
												operating systems) like &apos;Your Trader OS&apos; that we&apos;ve developed
												in-house. We then manage it with our Hive interface.
											</p>
										</div>
									</div>
								</div>
								<div className='carousel-item' style={{ visibility: `${currentImage === 3 ? "visible" : "hidden"}` }}>
									<div className='row'>
										<div className='col l6 s12'>
											<Image
												src={"/images/Enigma3.webp"}
												style={{ maxWidth: "100%" }}
												alt='Mining software'
												placeholder='blur'
											/>
										</div>
										<div className='col l6 s12 center'>
											<br />
											<h2>
												<span style={{ color: "rgb(187, 191, 194)" }}>03</span> <br />
												Mining Software / Hive
											</h2>
											<br />
											<p className='container'>
												Hive is our software interface which enables the efficient setup,
												configuration and management of all our mining facilities. Keeping track of
												all devices is key for the success of any mining operation. Besides the total
												hashrate, power consumption and facility temperatures there are a myriad of
												details and settings like firmware, mining pools and safety protections that
												need to be checked and managed.
											</p>
										</div>
									</div>
								</div>
								<div className='carousel-item' style={{ visibility: `${currentImage === 4 ? "visible" : "hidden"}` }}>
									<div className='row'>
										<div className='col l6 s12'>
											<Image
												src={"/images/Enigma4.webp"}
												style={{ maxWidth: "100%" }}
												alt='Minable'
												placeholder='blur'
											/>
										</div>
										<div className='col l6 s12 center'>
											<br />
											<h2>
												<span style={{ color: "rgb(187, 191, 194)" }}>04</span> <br />
												Minable Cryptocurrencies (Algorithms)
											</h2>
											<br />
											<p className='container'>
												Enigma is validating the blockchain networks of many of the majorly
												distributed cryptocurrencies such as Ethereum, Litecoin, Zcash, Dash and
												others. The most popular and widespread cryptocurrency, Bitcoin, is being
												mined in facilities with a different hardware setup (such as ASIC miners).
											</p>
										</div>
									</div>
								</div>
								<ul className='indicators'>
									<li className={`indicator-item ${currentImage === 1 && "active"}`}></li>
									<li className={`indicator-item ${currentImage === 2 && "active"}`}></li>
									<li className={`indicator-item ${currentImage === 3 && "active"}`}></li>
									<li className={`indicator-item ${currentImage === 4 && "active"}`}></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ExploreEnigma
