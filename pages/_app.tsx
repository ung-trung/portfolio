import '../styles/globals.css'
import type { AppProps, AppContext } from 'next/app'
import App from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const [_document, setDocument] = useState<Document | null>(null)
	const router = useRouter()
	// check modal open state base on path. not very reliable but work for now
	let modalOpen = router.asPath.includes('modal-open')
	useEffect(() => {
		// hydrate and document
		setDocument(document)
	}, [])
	useEffect(() => {
		if (_document) {
			if (modalOpen) {
				document.body.classList.add('overflow-hidden')
			} else {
				document.body.classList.remove('overflow-hidden')
			}
		}
	}, [modalOpen, _document])
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext)

	return { ...appProps }
}

export default MyApp
