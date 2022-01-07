import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

function getCookie(cName: string, cookie: string) {
	const name = cName + '='
	const cDecoded = decodeURIComponent(cookie) //to be careful
	const cArr = cDecoded.split('; ')
	let res
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) res = val.substring(name.length)
	})
	return res
}

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		const theme = getCookie('theme', ctx.req?.headers.cookie ?? '')
		return { ...initialProps, theme }
	}

	render() {
		const { theme } = this.props as any
		return (
			<Html data-theme={theme} className="scroll-smooth">
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
