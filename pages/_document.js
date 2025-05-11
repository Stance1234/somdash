import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const originalRenderPage = ctx.renderPage
		const sheet = new ServerStyleSheet()

		// Run the React rendering logic synchronously
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					// Useful for wrapping the whole react tree
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
					// Useful for wrapping in a per-page basis
					enhanceComponent: (Component) => Component,
				})

			// Run the parent `getInitialProps`, it now includes the custom `renderPage`
			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: [
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>,
				],
			}

			// return initialProps
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" /> */}
					<link href='https://fonts.googleapis.com' rel='preconnect' />
					<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
					<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />
					{/* <link href='/css/custom.css' rel='stylesheet' /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
