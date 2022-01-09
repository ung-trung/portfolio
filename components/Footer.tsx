import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
	const links = [
		{
			logo: '/logos/linkedin.svg',
			url: 'https://www.linkedin.com/in/trung-ung/',
			alt: 'Linkedin'
		},
		{
			logo: '/logos/github.svg',
			url: 'https://github.com/ung-trung',
			alt: 'Github'
		},
		{
			logo: '/logos/mail.svg',
			url: 'mailto:ungkientrung@gmail.com',
			alt: 'Gmail'
		}
	]
	return (
		<footer className="flex items-center justify-center gap-6 mb-6">
			{links.map(({ logo, url, alt }) => (
				<Link href={url} key={alt}>
					<a className="hover-default hover:-translate-y-4 ">
						<Image src={logo} alt={alt} height={40} width={40} />
					</a>
				</Link>
			))}
		</footer>
	)
}

export default Footer
