import Image from 'next/image'

const Project = () => {
	const projects = [
		{
			picture: 'https://picsum.photos/id/1005/400/400',
			title: 'Dashboard',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			isInternal: true,
			stacks: ['react', 'mui']
		},
		{
			picture: 'https://picsum.photos/id/1005/400/400',
			title: 'Customer Journey',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			isInternal: true,
			stacks: ['react']
		},
		{
			picture: 'https://picsum.photos/id/1005/400/400',
			title: 'Booking Widget',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			isInternal: true,
			stacks: ['react']
		}
	]
	return (
		<div className="py-10 bg-primary">
			<div className="mx-auto container ">
				<h1 className="font-bold text-primary-content text-4xl mb-10 text-center">My Projects</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
					{projects.map(({ title, picture, isInternal, description, stacks }) => (
						<div key={title} className="card bg-base-200 rounded-lg">
							<div className="h-52 relative">
								<Image src={picture} layout="fill" alt={title} objectFit="cover" />
							</div>

							<div className="card-body ">
								<h2 className="card-title">
									{title}
									{isInternal && <div className="badge mx-2 badge-secondary">INTERNAL</div>}
								</h2>
								<p className="line-clamp-5">{description}</p>

								<div className="mt-4 flex gap-1">
									{stacks.map(stack => (
										<div key={stack} className="badge badge-accent hover-default hover:-translate-y-1 cursor-default">
											{stack}
										</div>
									))}
								</div>
								<div className="justify-end card-actions">
									<button className="link link-secondary decoration-secondary decoration-wavy decoration-2 text-lg font-semibold">
										Show more
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
