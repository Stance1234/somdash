import Link from "next/link"

function LandingPage() {
	return (
		<section className='min-h-screen flex dark:bg-slate-900'>
			<div className='h-screen flex flex-col items-center p-3 gap-14 relative w-full md:w-2/3'>
				<svg className='absolute top-5 left-7 opacity-5 -z-50' width='100px' height='100px' viewBox='0 0 32 32'>
					<path
						d='M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.236-21.309c-.777-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.785 2.74c-.45.128-.907.269-1.362.41l-.79-2.758-1.712.49.806 2.813c-.369.114-.73.225-1.086.327l-.002-.008-2.362.676.525 1.829s1.257-.387 1.243-.357c.693-.2 1.035.139 1.2.467l.92 3.205c.047-.013.11-.03.184-.04l-.181.052 1.287 4.49c.032.227.003.612-.481.752.027.013-1.245.356-1.245.356l.246 2.143 2.229-.64c.414-.118.824-.228 1.226-.34l.816 2.845 1.71-.49-.806-2.815a65.74 65.74 0 001.371-.38l.803 2.803 1.712-.491-.813-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.725-2.912-3.472-2.836.848-.79 1.214-1.859.643-3.301zm-.651 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.08-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.513 2.857l-.98-3.419c.966-.277 3.914-1.455 4.493.562z'
						fillRule='evenodd'
					/>
				</svg>
				<svg className='absolute bottom-5 right-9 opacity-5 -z-50' width='80px' height='80px' viewBox='0 0 32 32'>
					<g fillRule='evenodd'>
						<path d='M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z' />
						<g fillRule='nonzero'>
							<path fillOpacity='.298' d='M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z' />
							<path fillOpacity='.801' d='M16.498 20.573l7.497-4.353-7.497-3.348z' />
							<path fillOpacity='.298' d='M9 16.22l7.498 4.353v-7.701z' />
						</g>
					</g>
				</svg>
				<svg
					className='absolute -z-50 opacity-5 right-1/3 top-20 w-28 h-28'
					version='1.1'
					id='Layer_1'
					x='0px'
					y='0px'
					viewBox='0 0 226.777 226.777'
					enableBackground='new 0 0 226.777 226.777'>
					<path
						fill='#231F20'
						d='M226.883,107.66c0-14.245-38.761-26.13-90.27-28.872l-0.004-22.697h64.315V8.855H25.06v47.236h64.31v22.808  C38.799,81.829,0.97,93.59,0.97,107.66c0,14.072,37.829,25.834,88.4,28.759v81.504h47.239V136.53  C188.122,133.794,226.883,121.905,226.883,107.66z M113.926,121.693c-55.288,0-100.109-8.557-100.109-19.119  c0-8.943,32.139-16.451,75.553-18.54v5.383h0.005v22.059c7.827,0.439,16.053,0.669,24.551,0.669c7.825,0,15.424-0.199,22.688-0.563  V83.952c44.355,1.961,77.423,9.548,77.423,18.622C214.036,113.136,169.214,121.693,113.926,121.693z'
					/>
				</svg>
				<svg className='absolute w-20 h-20 opacity-5 left-9 top-96 -z-50' viewBox='0 0 32 32'>
					<path d='M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.07-24l-4.574 4.523a3.556 3.556 0 01-4.996 0L8.93 8H6.035l6.02 5.957a5.621 5.621 0 007.89 0L25.961 8h-2.89zM8.895 24.563L13.504 20a3.556 3.556 0 014.996 0l4.605 4.563H26l-6.055-5.993a5.621 5.621 0 00-7.89 0L6 24.562h2.895z' />
				</svg>
				<p className='text-6xl dark:text-slate-300 mt-14'>
					<span className='block'>Fast, reliable and </span>
					<span className='text-[#0018A8]-500 block'>convenient</span>
				</p>
				<h2 className='text-lg md:translate-x-20 translate-x-0 bg-white text-black p-4 rounded-lg shadow-xl dark:bg-slate-700 dark:text-slate-300'>
					Your Trader is a financial organization that offers financial services to both legal entities and individuals. The company
					trades and works with digital assets, stocks, etc. Your Trader attracts funds from private customers via this website by
					offering a return on investment and safe storage of digital assets.
				</h2>
				<div>
					<div className='flex justify-center gap-4'>
						<Link href='/signup'>
							<a className='bg-[#0018A8]-500 px-8 py-3 rounded-md text-gray-50 shadow-md hover:shadow-lg'>Get started</a>
						</Link>
						<Link href='/about'>
							<a className='bg-gray-50 px-8 py-3 rounded-md shadow-md hover:shadow-lg dark:bg-slate-700 dark:text-slate-300'>
								Learn about us
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-[url("/images/landing-page.jpg")] bg-no-repeat bg-cover bg-bottom w-1/3 hidden md:block'>..</div>
		</section>
	)
}

export default LandingPage
