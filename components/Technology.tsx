import Image from 'next/image'

const Technology = () => {
	const techList = [
		{
			name: 'HTML5',
			url: 'https://html.spec.whatwg.org/',
			logo: '/logos/html5.svg'
		},
		{
			name: 'TypeScript',
			url: 'https://www.typescriptlang.org/',
			logo: '/logos/typescript.svg'
		},
		{
			name: 'React',
			url: 'https://reactjs.org/',
			logo: '/logos/react.svg'
		},
		{
			name: 'NextJS',
			url: 'https://nextjs.org/',
			logo: '/logos/nextjs.svg'
		},
		{
			name: 'Git',
			url: 'https://git-scm.com/',
			logo: '/logos/git.svg'
		},
		{
			name: 'NodeJS',
			url: 'https://nodejs.org/en/',
			logo: '/logos/nodejs.svg'
		},
		{
			name: 'MUI',
			url: 'https://mui.com/',
			logo: '/logos/mui.svg'
		},
		{
			name: 'TailwindCSS',
			url: 'https://tailwindcss.com/',
			logo: '/logos/tailwindcss.svg'
		},
		{
			name: 'PostgreSQL',
			url: 'https://www.postgresql.org/',
			logo: '/logos/postgresql.svg'
		},
		{
			name: 'MongoDB',
			url: 'https://www.mongodb.com/',
			logo: '/logos/mongodb.svg'
		}
	]
	return (
		<div id="next" className="container mx-auto py-10 mb-10 sm:scroll-mt-16">
			<h1 className="font-bold text-4xl mb-10">My Favorite Tech</h1>
			<div className="flex flex-wrap justify-around md:justify-between gap-4 lg:gap-6 relative">
				{techList.map(({ name, url, logo }) => (
					<a
						key={name}
						href={url}
						className="w-36 h-36 md:w-44 md:h-44 shadow-xl rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer z-10 bg-zinc-50 hover-default hover:-translate-y-4 hover:shadow-2xl"
					>
						<Image
							lazyBoundary="500px"
							className="rounded-xl"
							src={logo}
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
							placeholder="blur"
							height={62}
							width={62}
							alt={name}
						></Image>
						<h1 className="font-semibold text-zinc-700">{name}</h1>
					</a>
				))}
				<div
					className="absolute h-36 w-80 -bottom-12 right-0 xl:-right-12 -z-10"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`
					}}
				></div>
			</div>
		</div>
	)
}

export default Technology
