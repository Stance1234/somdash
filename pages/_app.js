import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"
import { store } from "../app/store"
import { Provider } from "react-redux"
import { DefaultSeo } from "next-seo"
// import Script from "next/script"
import SEO from "../seo-config"
// import "../public/css/reactapp-modules.css"
// import "../public/css/custom.css"
// import "../styles/reactapp.css"
// import "../styles/bitpay.css"
import "../styles/globals.css"
import LiveChat from "../public/javascript/chat-widget"

import "react-toastify/dist/ReactToastify.min.css"
import "../public/css/flag-icon-css/css/flag-icon.min.css"

const progress = new ProgressBar({
	size: 2,
	color: "rgb(24 43 85)",
	className: "bar-of-progress",
	delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<SessionProvider session={pageProps.session}>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
				<ToastContainer />
				{/* <Script src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' /> */}
				{/* <Script src='/javascript/translate.js' /> */}
			</SessionProvider>
			<LiveChat />
		</Provider>
	)
}

export default MyApp
