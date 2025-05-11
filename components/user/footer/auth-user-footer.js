import Link from "next/link"
import { useRouter } from "next/router"

function AuthUserFooter() {
	const router = useRouter()

	return (
		<div className='fixed-footer mobile-bg dark:bg-slate-900'>
			<ul className='tabs'>
				<li className='tab col s6'>
					<Link href='/user'>
						<a className={`${router.pathname === "/user" && "active"}`}>
							<span className='material-icons notranslate'>assessment</span>
							<span>Trading</span>
						</a>
					</Link>
				</li>
				<li className='tab col s6'>
					<Link href='/user/mining'>
						<a className={`${router.pathname === "/user/mining" && "active"}`}>
							<span className='material-icons notranslate'>copyright</span>
							<span>Mining</span>
						</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default AuthUserFooter
