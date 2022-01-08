import Image from 'next/image'

const projects = [
	{
		id: 'dashboard',
		modalId: 'dashboard-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Dashboard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['react', 'redux', 'formik', 'mui']
	},
	{
		id: 'customer-journey',
		modalId: 'customer-journey-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Customer Journey',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['vue', 'vuex', 'bootstrap']
	},
	{
		id: 'booking-widget',
		modalId: 'booking-widget-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Booking Widget',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'internal',
		stacks: ['react', 'mui', 'storybook']
	},
	{
		id: 'data-4-health',
		modalId: 'data-4-health-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Data 4 Health',
		description:
			'https://amcellsim.netlify.app/ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hackathon',
		stacks: ['react', 'mui']
	},
	{
		id: 'bumi-cafe',
		modalId: 'bumi-cafe-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Bumi Cafe',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'freelance',
		stacks: ['wordpress']
	},
	{
		id: 'schedulable-todo',
		modalId: 'schedulable-todo-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Schedulable Todo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		type: 'hobby',
		stacks: ['react', 'redux', 'bulma']
	},
	{
		id: 'contact-manager',
		modalId: 'contact-manager-modal',
		picture: 'https://picsum.photos/id/1005/400/400',
		title: 'Contact Manager',
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
					{projects.map(({ id, modalId, title, picture, type, description, stacks }) => (
						<div id={id} key={id} className="card bg-base-200 rounded-lg shadow-md scroll-mt-40">
							<a href={`#${modalId}`} className="h-52 relative hover-shine">
								<Image src={picture} layout="fill" alt={title} objectFit="cover" />
							</a>

							<div className="card-body ">
								<h2 className="card-title">
									{title}
									{type === 'internal' && <div className="badge mx-2 badge-secondary">internal</div>}
									{type === 'hackathon' && <div className="badge mx-2 badge-info">hackathon</div>}
									{type === 'freelance' && <div className="badge mx-2 badge-success">freelance</div>}
									{type === 'hobby' && <div className="badge mx-2 badge-primary">hobby</div>}
								</h2>
								<p className="line-clamp-4">{description}</p>

								<div className="mt-4 flex gap-1">
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
									className="modal-box sm:max-w-7xl w-8/12"
									onClick={e => {
										e.stopPropagation()
									}}
								>
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
