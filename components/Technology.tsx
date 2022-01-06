import GitLogo from '@/logos/git.svg'
import Html5Logo from '@/logos/html5.svg'
import MongodbLogo from '@/logos/mongodb.svg'
import MuiLogo from '@/logos/mui.svg'
import NextjsLogo from '@/logos/nextjs.svg'
import NodejsLogo from '@/logos/nodejs.svg'
import PostgresqlLogo from '@/logos/postgresql.svg'
import ReactLogo from '@/logos/react.svg'
import TailwindLogo from '@/logos/tailwindcss.svg'
import TypescriptLogo from '@/logos/typescript.svg'
import Image from 'next/image'

const Technology = () => {
	const techList = [
		{
			name: 'HTML5',
			url: 'https://html.spec.whatwg.org/',
			Logo: Html5Logo
		},
		{
			name: 'TypeScript',
			url: 'https://www.typescriptlang.org/',
			Logo: TypescriptLogo
		},
		{
			name: 'React',
			url: 'https://reactjs.org/',
			Logo: ReactLogo
		},
		{
			name: 'NextJS',
			url: 'https://nextjs.org/',
			Logo: NextjsLogo
		},
		{
			name: 'NodeJS',
			url: 'https://nodejs.org/en/',
			Logo: NodejsLogo
		},
		{
			name: 'Git',
			url: 'https://git-scm.com/',
			Logo: GitLogo
		},
		{
			name: 'MUI',
			url: 'https://mui.com/',
			Logo: MuiLogo
		},
		{
			name: 'TailwindCSS',
			url: 'https://tailwindcss.com/',
			Logo: TailwindLogo
		},
		{
			name: 'PostgreSQL',
			url: 'https://www.postgresql.org/',
			Logo: PostgresqlLogo
		},
		{
			name: 'MongoDB',
			url: 'https://www.mongodb.com/',
			Logo: MongodbLogo
		}
	]
	return (
		<div id="next" className="container mx-auto py-10 mb-10">
			<h1 className="font-bold text-4xl mb-10">Technology I Use</h1>
			<div className="flex flex-wrap justify-between gap-6 relative">
				{techList.map(({ name, url, Logo }) => (
					<a
						key={name}
						href={url}
						className="w-44 h-44 shadow-xl rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer z-10 bg-base-100 hover-animation hover:shadow-2xl"
					>
						<Image src={Logo} height={62} width={62}></Image>
						<h1 className="font-semibold">{name}</h1>
					</a>
				))}
				<div
					className="absolute h-36 w-80 -bottom-12 -right-12 -z-10"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`
					}}
				></div>
			</div>
		</div>
	)
}

export default Technology
