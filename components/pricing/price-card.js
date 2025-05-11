import Link from "next/link"
import commaNumber from "comma-number"

function PriceCard({ percentage, returns, minPrice, maxPrice, title, callToAction, path }) {
	return (
		<div className='bg-slate-100 dark:bg-transparent dark:text-slate-300 p-10 h-96 border-2 border-[#0018A8]-500 rounded-md'>
			<div className='text-center font-bold'>
				<h3 className='text-2xl font-bold text-center text-[#0018A8]-500'>{title}</h3>

				<div className='mt-4'>
					<p className='border-b-2 border-[#0018A8]-500 py-2'>Mininum Deposit</p>
					<span className='border-b-2 border-[#0018A8]-500 py-2 block'>${commaNumber(minPrice)}</span>
				</div>
				<div className='mb-4'>
					<p className='border-b-2 border-[#0018A8]-500 py-2'>{percentage}%</p>
					<p className='py-2'>returns daily for {returns} days</p>
				</div>
				{callToAction && (
					<Link href={path}>
						<a className='bg-[#0018A8]-500 text-white px-5 py-2 mt-5 block rounded-md'>PURCHASE PLAN</a>
					</Link>
				)}
			</div>
		</div>
	)
}

export default PriceCard
