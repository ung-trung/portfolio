import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Cookies from 'cookies'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		const { req, res } = ctx
		let theme = ''
		if (req && res) {
			const cookies = new Cookies(req, res)
			theme = cookies.get('theme') ?? 'bumblebee'
			cookies.set('theme', theme, {
				httpOnly: false
			})
		}
		return { ...initialProps, theme }
	}

	render() {
		const { theme } = this.props as any

		return (
			<Html data-theme={theme} lang="en" className="scroll-smooth">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
