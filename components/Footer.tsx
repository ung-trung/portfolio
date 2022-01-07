import Image from 'next/image'
import GithubLogo from '@/logos/github.svg'
import LinkedinLogo from '@/logos/linkedin.svg'
import MailLogo from '@/logos/mail.svg'
const Footer = () => {
	const links = [
		{
			logo: LinkedinLogo,
			url: 'https://www.linkedin.com/in/trung-ung/',
			alt: 'Linkedin'
		},
		{
			logo: GithubLogo,
			url: 'https://github.com/ung-trung',
			alt: 'Github'
		},
		{
			logo: MailLogo,
			url: 'mailto:ungkientrung@gmail.com',
			alt: 'Gmail'
		}
	]
	return (
		<footer className="flex items-center justify-center gap-6 mb-6">
			{links.map(({ logo, url, alt }) => (
				<a key={alt} href={url} className="hover-default hover:-translate-y-4 ">
					<Image src={logo} alt={alt} height={40} width={40} />
				</a>
			))}
		</footer>
	)
}

export default Footer
