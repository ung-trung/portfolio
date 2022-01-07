import { useState, useEffect } from 'react'
import { getCookie, setCookie } from 'react-use-cookie'

const allThemes = [
	{ name: 'light', icon: '🌝' },
	{ name: 'dark', icon: '🌚' },
	{ name: 'cupcake', icon: '🧁' },
	{ name: 'bumblebee', icon: '🐝' },
	{ name: 'emerald', icon: '✳️' },
	{ name: 'corporate', icon: '🏢' },
	{ name: 'synthwave', icon: '🌃' },
	{ name: 'retro', icon: '👴' },
	{ name: 'cyberpunk', icon: '🤖' },
	{ name: 'valentine', icon: '🌸' },
	{ name: 'halloween', icon: '🎃' },
	{ name: 'garden', icon: '🌷' },
	{ name: 'forest', icon: '🌲' },
	{ name: 'aqua', icon: '🐟' },
	{ name: 'lofi', icon: '👓' },
	{ name: 'pastel', icon: '🖍' },
	{ name: 'fantasy', icon: '🧚' },
	{ name: 'wireframe', icon: '📝' },
	{ name: 'black', icon: '🏴' },
	{ name: 'luxury', icon: '💎' },
	{ name: 'dracula', icon: '🧛' },
	{ name: 'cmyk', icon: '🖨' }
]

const Header = () => {
	const [_document, setDocument] = useState<Document | null>(null)

	const [theme, setTheme] = useState('')

	useEffect(() => {
		setDocument(document)
	}, [])
	useEffect(() => {
		// use effect bc getCookie only has value in client
		const localTheme = getCookie('theme') ?? ''
		setTheme(localTheme)
	}, [])
	useEffect(() => {
		if (_document) _document.documentElement.dataset.theme = theme
		setCookie('theme', theme)
	}, [theme])
	return (
		<div
			id="nav"
			className="inset-x-0 top-0 z-50 w-full  border-b border-base-200 bg-base-100 text-base-content sticky"
		>
			<div className="mx-auto space-x-1 navbar max-w-none">
				<div className="flex-1"></div>
				<div title="Change Theme" className="dropdown dropdown-end">
					<div tabIndex={0} className="m-1 normal-case btn-ghost btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-6 h-6 stroke-current md:mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							></path>
						</svg>{' '}
						<span className="hidden md:inline">Change Theme</span>{' '}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1792 1792"
							className="inline-block w-4 h-4 ml-1 fill-current"
						>
							<path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
						</svg>
					</div>{' '}
					<div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
						<ul className="p-4 menu compact">
							{allThemes.map(({ name, icon }) => {
								const activeClass =
									typeof window !== 'undefined' ? (theme === name ? 'active' : '') : ''
								return (
									<li key={name}>
										<a
											onClick={() => {
												setTheme(name)
											}}
											tabIndex={0}
											className={activeClass}
										>
											{icon} {name}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
