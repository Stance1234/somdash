import Link from "next/link"
import Head from "next/head"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function DepositPricing() {
	return (
		<AuthUserLayout>
			<Head>
				<title>Pricing - Octatradeglobal</title>
			</Head>
			<div className='container center'>
				<div className='dark:text-slate-300 text-3xl'>Pricing</div>
				<br />
				<div className='container'>
					<ul className=''>
						<li>
							<Link href='/user/deposits/trading'>
								<a className='p-5 bg-slate-300 block rounded-md text-[#0018A8]-500'>Trading Plans</a>
							</Link>
						</li>
						<li>
							<Link href='/user/mining'>
								<a className='p-5 bg-slate-300 block rounded-md text-[#0018A8]-500 mt-5'>Mining Plans</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default DepositPricing
