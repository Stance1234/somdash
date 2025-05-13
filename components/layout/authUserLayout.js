/* eslint-disable @next/next/no-css-tags */
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Script from "next/script"
import Head from "next/head"
import SideNav from "../user/nav/sidenav"
import AuthUserHeader from "../user/header/auth-user-header"
import AuthUserFooter from "../user/footer/auth-user-footer"
import useAuthChat from "../../hooks/useAuthChat"

function AuthUserLayout({ children }) {
	const router = useRouter()
	const [path, setPath] = useState("")
	useAuthChat()

	function wowInit() {
		new window.WOW().init()
	}
	const { pathname } = router

	useEffect(() => {
		if (pathname.includes("/signup/")) {
			setPath("signup")
		}
	}, [])

	return (
		<>
			<Head>
				<title>Trading - Your Trader</title>
				<link rel='stylesheet' href='/css/reactapp.css' />
				<link rel='stylesheet' href='/css/reactapp-modules.css' />
			</Head>
			<AuthUserHeader />
			<SideNav />
			<main className='app-py-1 dark:bg-black' style={{ minHeight: "100vh" }}>
				<div className='fade-appear-done fade-enter-done'>
					<div>
						<div>
							{children}
							<br />
						</div>
					</div>
				</div>
			</main>
			<Script strategy='lazyOnload' src='/javascript/chat-widget.js' />
			<Script
				onLoad={wowInit}
				src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
				integrity='sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=='
				crossorigin='anonymous'
				referrerpolicy='no-referrer'
				async
			/>
			<Script strategy='lazyOnload' src='https://unpkg.com/default-passive-events' />
		</>
	)
}

export default AuthUserLayout
