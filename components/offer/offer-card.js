import Link from "next/link"
import Image from "next/image"

function OfferCard({ title, desc, imgSrc }) {
	return (
		<div className='flex-1 flex flex-col rounded-xl shadow-lg overflow-hidden dark:text-slate-300 dark:border-2 dark:border-slate-700'>
			<Image src={imgSrc} className='' placeholder='blur' alt={title} />
			<div className='p-5 text-center flex flex-col justify-between  flex-1'>
				<h3 className='font-bold'>{title}</h3>
				<p className=''>{desc}</p>

				<Link href='/cryptos'>
					<a className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-slate-900 dark:hover:text-slate-50 hover:text-slate-800'>
						Learn More
					</a>
				</Link>
			</div>
		</div>
	)
}

export default OfferCard
