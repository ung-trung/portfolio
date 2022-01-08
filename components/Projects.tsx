import Image from 'next/image'

const projects = [
	{
		id: 'dashboard',
		modalId: 'dashboard-modal',
		pictures: ['/images/dashboard-1.png'],
		title: 'Dashboard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['react', 'redux', 'formik', 'mui']
	},
	{
		id: 'customer-journey',
		modalId: 'customer-journey-modal',
		pictures: ['/images/customer-journey-3.png', '/images/customer-journey-2.png'],
		title: 'Customer Journey',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['vue', 'vuex', 'bootstrap']
	},
	{
		id: 'booking-widget',
		modalId: 'booking-widget-modal',
		pictures: ['/images/booking-widget-1.png'],
		title: 'Booking Widget',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['react', 'mui', 'storybook']
	},
	{
		id: 'data-4-health',
		modalId: 'data-4-health-modal',
		pictures: ['/images/data-4-health-1.png', '/images/data-4-health-2.png', '/images/data-4-health-3.png'],
		title: 'Data 4 Health',
		description:
			'https://amcellsim.netlify.app/ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hackathon',
		stacks: ['react', 'mui']
	},
	{
		id: 'bumi-cafe',
		modalId: 'bumi-cafe-modal',
		pictures: ['/images/bumi.png', '/images/bumi-2.png'],
		title: 'Bumi Cafe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'freelance',
		stacks: ['wordpress']
	},
	{
		id: 'schedulable-todo',
		modalId: 'schedulable-todo-modal',
		pictures: [
			'/images/schedulable-toto-1.png',
			'/images/schedulable-toto-2.png',
			'/images/schedulable-toto-3.png',
			'/images/schedulable-toto-4.png'
		],
		title: 'Schedulable Todo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hobby',
		stacks: ['react', 'redux', 'bulma']
	},
	{
		id: 'contact-manager',
		modalId: 'contact-manager-modal',
		pictures: ['/images/contact-manager-1.png', '/images/contact-manager-2.png', '/images/contact-manager-3.png'],
		title: 'Contact Manager',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hobby',
		stacks: ['react', 'react context', 'sematic']
	},
	{
		id: 'github-fetcher',
		modalId: 'github-fetcher-modal',
		pictures: ['/images/github-fetcher-1.png', '/images/github-fetcher-2.png'],
		title: 'Github Fetcher',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hobby',
		stacks: ['react', 'react context', 'sematic']
	}
]

const Project = () => {
	return (
		<div id="projects" className="py-10 bg-primary scroll-mt-16">
			<div className="mx-auto container ">
				<h1 className="font-bold text-primary-content text-4xl mb-10 text-center">My Projects</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
					{projects.map(({ id, modalId, title, pictures, type, description, stacks }) => (
						<div id={id} key={id} className="card bg-base-200 rounded-lg shadow-md scroll-mt-40">
							<a href={`#${modalId}`} className="h-52 relative hover-shine">
								<Image
									blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
									priority={true}
									placeholder="blur"
									src={pictures[0]}
									layout="fill"
									alt={title}
								/>
							</a>

							<div className="card-body ">
								<h2 className="card-title">
									{title}
									{type === 'internal' && <div className="badge mx-2 badge-secondary">internal</div>}
									{type === 'hackathon' && <div className="badge mx-2 badge-info">hackathon</div>}
									{type === 'freelance' && <div className="badge mx-2 badge-success">freelance</div>}
									{type === 'hobby' && <div className="badge mx-2 badge-primary">hobby</div>}
								</h2>
								<p className="line-clamp-4 mb-4">{description}</p>

								<div className="flex gap-1">
									{stacks.map(stack => (
										<div
											key={stack}
											className="badge badge-accent hover-default hover:-translate-y-2 cursor-default"
										>
											{stack}
										</div>
									))}
								</div>
								<div className="justify-end card-actions">
									<a
										href={`#${modalId}`}
										className="link link-secondary decoration-secondary decoration-wavy decoration-2 text-lg font-semibold"
									>
										Show more
									</a>
								</div>
							</div>
							<div
								id={modalId}
								onClick={() => {
									if (window) {
										window.location.href = '/#modal-close'
									}
								}}
								className="modal"
							>
								<div
									className="modal-box max-h-[95vh] overflow-auto w-full sm:max-w-7xl sm:w-10/12"
									onClick={e => {
										e.stopPropagation()
									}}
									onScroll={e => {
										e.stopPropagation()
									}}
								>
									<h1 className="font-bold text-4xl mb-4">
										{title}{' '}
										{type === 'internal' && (
											<div className="badge mx-2 badge-secondary">internal</div>
										)}
										{type === 'hackathon' && <div className="badge mx-2 badge-info">hackathon</div>}
										{type === 'freelance' && (
											<div className="badge mx-2 badge-success">freelance</div>
										)}
										{type === 'hobby' && <div className="badge mx-2 badge-primary">hobby</div>}
									</h1>
									<div className="flex gap-1 mb-6">
										{stacks.map(stack => (
											<div
												key={stack}
												className="badge badge-accent hover-default hover:-translate-y-2 cursor-default"
											>
												{stack}
											</div>
										))}
									</div>
									<h3 className="font-semibold text-3xl mb-4">Show case</h3>
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
										{pictures.map(pic => (
											<div className="w-12/12 h-64 md:h-80 relative">
												<Image
													key={pic}
													blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
													placeholder="blur"
													src={pic}
													layout="fill"
													objectFit="cover"
													alt={title}
												/>
											</div>
										))}
									</div>

									<p>{description}</p>
									<div className="modal-action">
										<a href={`/#modal-close`} className="btn">
											Close
										</a>
									</div>
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
