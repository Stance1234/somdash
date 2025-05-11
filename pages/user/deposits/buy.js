import AuthUserLayout from "../../../components/layout/authUserLayout"

function CryptoBuy() {
	return (
		<AuthUserLayout>
			<section className='center'>
				<h2 className='text-black dark:text-slate-300'>BUY CRYPTO</h2>
				<p className='dark:text-slate-300'>
					buy bitcoin, ethereum, and other crypto currencies for account funding from third parties
				</p>
				<br />
				<br />
				<div className='container'>
					<div className='container'>
						<ul className='collection'>
							<a href='https://bitcoin.com/' target='_blank' rel='noreferrer' className='collection-item bg'>
								<li>Bitcoin.com</li>
							</a>
							<a href='https://exchange.mercuryo.io/' target='_blank' rel='noreferrer' className='collection-item bg'>
								<li>Mercuryo</li>
							</a>
							<a href='https://changelly.com/' target='_blank' rel='noreferrer' className='collection-item bg'>
								<li>Changelly</li>
							</a>
							<a href='https://crypto.com/' target='_blank' rel='noreferrer' className='collection-item bg'>
								<li>Crypto.com</li>
							</a>
						</ul>
					</div>
				</div>
			</section>
		</AuthUserLayout>
	)
}

export default CryptoBuy
