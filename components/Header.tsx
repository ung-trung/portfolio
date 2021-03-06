import { useState, useEffect } from 'react'
import { getCookie, setCookie } from 'react-use-cookie'
import { DownloadIcon } from '@heroicons/react/outline/esm'

const allThemes = [
	{ name: 'light', icon: 'ð' },
	{ name: 'dark', icon: 'ð' },
	// { name: 'cupcake', icon: 'ð§' },
	{ name: 'bumblebee', icon: 'ð' },
	// { name: 'emerald', icon: 'â³ï¸' },
	{ name: 'corporate', icon: 'ð¢' },
	{ name: 'synthwave', icon: 'ð' },
	// { name: 'retro', icon: 'ð´' },
	{ name: 'cyberpunk', icon: 'ð¤' },
	// { name: 'valentine', icon: 'ð¸' },
	// { name: 'halloween', icon: 'ð' },
	// { name: 'garden', icon: 'ð·' },
	{ name: 'forest', icon: 'ð²' },
	// { name: 'aqua', icon: 'ð' },
	// { name: 'lofi', icon: 'ð' },
	// { name: 'pastel', icon: 'ð' },
	// { name: 'fantasy', icon: 'ð§' },
	{ name: 'wireframe', icon: 'ð' },
	// { name: 'black', icon: 'ð´' },
	// { name: 'luxury', icon: 'ð' },
	{ name: 'dracula', icon: 'ð§' },
	{ name: 'cmyk', icon: 'ð¨' }
]

const Header = () => {
	const [_document, setDocument] = useState<Document | null>(null)
	const [theme, setTheme] = useState('')

	useEffect(() => {
		// hydrate theme and document
		const localTheme = getCookie('theme') ? getCookie('theme') : 'bumblebee'
		setDocument(document)
		setTheme(localTheme)
	}, [])
	useEffect(() => {
		// set theme and cookie on state change
		if (_document) _document.documentElement.dataset.theme = theme
		setCookie('theme', theme)
	}, [theme, _document])
	return (
		<div
			id="nav"
			className="inset-x-0 top-0 z-50 w-full border-b border-base-200 bg-base-100 text-base-content sm:sticky"
		>
			<div className="mx-auto space-x-1 navbar max-w-none">
				<div className="flex-1"></div>
				<a href="/Trung-Ung-Resume.pdf" download="Trung-Ung-Resume" className="btn btn-ghost rounded-btn normal-case">
					<DownloadIcon className="w-6 h-6 mr-2" /> My RÃ©sumÃ©
				</a>
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
					<div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content transition-none-important ">
						<ul className="p-3 menu compact">
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
