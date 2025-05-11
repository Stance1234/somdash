import PriceCard from "../components/pricing/price-card"

function PricingDisplay({ hasAction }) {
	return (
		<div className='py-32'>
			<h2 className='text-center text-3xl font-bold text-[#0018A8]-500'>Trading Plans</h2>
			<div className='flex flex-col md:flex-row px-10 md:px-0 justify-center gap-5 mt-5'>
				<PriceCard
					title='Starter'
					minPrice={500}
					maxPrice={4999}
					returns={30}
					percentage={1.6}
					callToAction={hasAction || false}
					path={`/user/deposits/crypto?to=1`}
				/>
				<PriceCard
					title='Premium'
					minPrice={5000}
					maxPrice={9999}
					returns={365}
					percentage={2.4}
					callToAction={hasAction || false}
					path={`/user/deposits/crypto?to=2`}
				/>
				<PriceCard
					title='Ultimate'
					minPrice={10000}
					maxPrice={50000}
					returns={365}
					percentage={3}
					callToAction={hasAction || false}
					path={`/user/deposits/crypto?to=3`}
				/>
			</div>
		</div>
	)
}

export default PricingDisplay
