import OfferCard from "../components/offer/offer-card"

function WhatWeOffer() {
	return (
		<section className='py-24 px-8'>
			<div className=''>
				<h2 className='text-3xl font-bold text-center text-black dark:text-slate-300'>
					What We <span className='text-[#0018A8]-500 dark:text-slate-300'>Offer</span>
				</h2>
				<p className='text-center my-5'>
					We&apos;re building a new standard for trading and mining. One account with streamlined access to multiple liquidity
					venues.
				</p>
			</div>
			<div className='flex flex-col md:flex-row gap-10'>
				<OfferCard
					title='Crypto Mining'
					desc='Now you can start trading Bitcoin, Ethereum and many
                            more cryptocurrencies quickly, easily and safely
                            from wherever you are — in just seconds'
					imgSrc={"/images/Crypto2.jpeg"}
				/>
				<OfferCard
					title='Forex Trading'
					desc='The forex market is a place where currencies are
                            traded. It is the largest and most liquid financial
                            market in the world with an average daily turnover
                            of 6.6 trillion U.S. dollars as of 2019.'
					imgSrc={"/images/Trading.jpeg"}
				/>
				<OfferCard
					title='Copy Trading'
					desc='Copy trading allows you to directly copy the positions
                            taken by another trader. You decide the amount you wish
                            to invest and simply copy everything they do
                            automatically.'
					imgSrc={"/images/BgTrader.jpg"}
				/>
			</div>
		</section>
	)
}

export default WhatWeOffer
