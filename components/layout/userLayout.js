/* eslint-disable @next/next/no-css-tags */
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Script from "next/script"
import Head from "next/head"
// import { useSelector } from 'react-redux'
// import HeaderFixed from "../user/header/header"
import SideNav from "../user/nav/sidenav"
import UserFooter from "../user/footer"

function UserLayout({ children }) {
	// const theme = useSelector(state => state.theme.choice)
	const router = useRouter()
	const [path, setPath] = useState("")

	function wowInit() {
		new window.WOW().init()
	}

	function initTranslate() {
		new google.translate.TranslateElement({ pageLanguage: "id" }, "google_translate_element")
	}

	const { pathname } = router

	// useEffect(() => {
	//     if(theme) document.body.className = theme
	// })

	useEffect(() => {
		if (pathname.includes("/signup/")) {
			setPath("signup")
		}
	}, [pathname])

	return (
		<div style={{ outline: "none" }} tabIndex={-1} id='gatsby-focus-wrapper'>
			<Head>
				<link rel='stylesheet' href='/css/bitpay.css' />
			</Head>
			{/* <HeaderFixed /> */}
			{children}
			
			<Script strategy='lazyOnload' src='/javascript/chat-widget.js' />
			<Script
				onLoad={wowInit}
				src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
				integrity='sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=='
				crossorigin='anonymous'
				referrerpolicy='no-referrer'
				async
			/>
		</div>
	)
}

export default UserLayout
