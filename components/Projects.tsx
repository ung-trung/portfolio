import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

const projects = [
	{
		id: 'dashboard',
		duration: '01.11.2019 - present',
		modalId: 'dashboard-modal',
		pictures: ['/images/dashboard-1.png'],
		title: 'Dashboard',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'asd asd asd '
		],
		type: 'internal',
		sources: [
			{
				name: 'Supplier register',
				url: 'https://meetingpackage.com/venue-self-register',
				urlText: 'https://meetingpackage.com/venue-self-register'
			}
		],
		stacks: ['react', 'redux', 'formik', 'mui']
	},
	{
		id: 'customer-journey',
		duration: '01.12.2019 - present',
		modalId: 'customer-journey-modal',
		pictures: [
			'/images/customer-journey-4.png',
			'/images/customer-journey-5.png',
			'/images/customer-journey-2.png',
			'/images/customer-journey-3.png',
			'/images/customer-journey-6.png',
			'/images/customer-journey-7.png'
		],
		title: 'Customer Journey',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'internal',
		sources: [
			{
				name: 'Venue page',
				url: 'https://meetingpackage.com/venue/clarion-hotel-helsinki',
				urlText: 'https://meetingpackage.com/venue/clarion-hotel-helsinki'
			},
			{
				name: 'MeetingPackage partners',
				url: 'https://meetingpackage.com/booking-engine-customers',
				urlText: 'https://meetingpackage.com/booking-engine-customers'
			},
			{
				name: "MeetingPackage's guide to booking engine",
				url: 'https://blog.meetingpackage.com/beginners-guide-what-is-a-meetings-events-booking-engine-and-why-do-you-need-one',
				urlText:
					'https://blog.meetingpackage.com/beginners-guide-what-is-a-meetings-events-booking-engine-and-why-do-you-need-one'
			}
		],
		stacks: ['vue', 'vuex', 'bootstrap']
	},
	{
		id: 'booking-widget',
		duration: '01.10.2019 - present',
		modalId: 'booking-widget-modal',
		pictures: ['/images/booking-widget-1.png'],
		title: 'Booking Widget',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'internal',
		sources: [
			{
				name: 'Live usage',
				url: 'https://www.scandichotels.com/conferences-meetings',
				urlText: 'https://www.scandichotels.com/conferences-meetings'
			}
		],
		stacks: ['react', 'mui', 'storybook']
	},
	{
		id: 'data-4-health',
		duration: '25.06.2021 - 31.09.2021',
		modalId: 'data-4-health-modal',
		pictures: ['/images/data-4-health-1.png', '/images/data-4-health-2.png', '/images/data-4-health-3.png'],
		title: 'Data 4 Health',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'hackathon',
		sources: [
			{
				name: 'Dashboard page',
				url: 'https://amcellsim.netlify.app',
				urlText: 'https://amcellsim.netlify.app'
			},
			{
				name: 'Contribution',
				url: 'https://www.linkedin.com/posts/analysismode-labs_analysismode-speeds-up-scientific-discovery-activity-6851868916659056641-AdDm',
				urlText:
					'https://www.linkedin.com/posts/analysismode-labs_analysismode-speeds-up-scientific-discovery-activity-6851868916659056641-AdDm'
			},
			{
				name: 'Winner status',
				url: 'https://healthincubatorhelsinki.com/news-and-events/analysismode',
				urlText: 'https://healthincubatorhelsinki.com/news-and-events/analysismode'
			}
		],
		stacks: ['react', 'mui']
	},
	{
		id: 'portfolio',
		duration: '05.01.2022 - present',
		modalId: 'portfolio-modal',
		pictures: [
			'/images/portfolio-1.png',
			'/images/portfolio-2.png',
			'/images/portfolio-3.png',
			'/images/portfolio-4.png'
		],
		title: 'Portfolio',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'hobby',
		sources: [
			{
				name: 'Live page',
				url: '/',
				urlText: '/'
			},
			{
				name: 'Github repo',
				url: 'mailto:ungkientrung@gmail.com',
				urlText: 'Contact me'
			}
		],
		stacks: ['react', 'nextjs', 'tailwindcss']
	},
	{
		id: 'bumi-cafe',
		duration: '01.06.2020 - 30.06.2020',
		modalId: 'bumi-cafe-modal',
		pictures: ['/images/bumi.png', '/images/bumi-2.png'],
		title: 'Bumi Cafe',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'freelance',
		sources: [
			{
				name: 'Bumi frontpage',
				url: 'https://bumicafe.com',
				urlText: 'https://bumicafe.com'
			}
		],
		stacks: ['wordpress']
	},

	{
		id: 'schedulable-todo',
		duration: '20.06.2019 - 31.12.2019',
		modalId: 'schedulable-todo-modal',
		pictures: [
			'/images/schedulable-toto-1.png',
			'/images/schedulable-toto-2.png',
			'/images/schedulable-toto-3.png',
			'/images/schedulable-toto-4.png'
		],
		title: 'Schedulable Todo',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'hobby',
		sources: [
			{
				name: 'Live page',
				url: 'https://trinhtodo.netlify.app',
				urlText: 'https://trinhtodo.netlify.app'
			},
			{
				name: 'Github frontend repo',
				url: 'https://github.com/ung-trung/react-todo-filterable',
				urlText: 'https://github.com/ung-trung/react-todo-filterable'
			},
			{
				name: 'Github backend repo',
				url: 'https://github.com/ung-trung/trinhtodo-apis',
				urlText: 'https://github.com/ung-trung/trinhtodo-apis'
			}
		],
		stacks: ['react', 'redux', 'bulma']
	},
	{
		id: 'contact-manager',
		duration: '10.06.2019 - 14.06.2019',
		modalId: 'contact-manager-modal',
		pictures: ['/images/contact-manager-1.png', '/images/contact-manager-2.png', '/images/contact-manager-3.png'],
		title: 'Contact Manager',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'hobby',
		sources: [
			{
				name: 'Live page',
				url: 'https://contact-managee.herokuapp.com',
				urlText: 'https://contact-managee.herokuapp.com'
			},
			{
				name: 'Github repo',
				url: 'https://github.com/ung-trung/enhanced-contact-manager',
				urlText: 'https://github.com/ung-trung/enhanced-contact-manager'
			}
		],
		stacks: ['react', 'react context', 'sematic']
	},
	{
		id: 'github-fetcher',
		modalId: 'github-fetcher-modal',
		duration: '07.06.2019 - 09.06.2019',
		pictures: ['/images/github-fetcher-1.png', '/images/github-fetcher-2.png'],
		title: 'Github Fetcher',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		type: 'hobby',
		sources: [
			{
				name: 'Live page',
				url: 'https://githubfetcher.netlify.app',
				urlText: 'https://githubfetcher.netlify.app'
			},
			{
				name: 'Github repo',
				url: 'https://github.com/ung-trung/react-context-github-search',
				urlText: 'https://github.com/ung-trung/react-context-github-search'
			}
		],
		stacks: ['react', 'react context', 'sematic']
	}
]

interface CardProps {
	modalId: string
	title: string
	description: string
	picture: string
	type: string
	stacks: string[]
}
interface ModalProps {
	modalId: string
	title: string
	descriptions: string[]
	type: string
	duration: string
	stacks: string[]
	pictures: string[]
	sources: {
		name: string
		url: string
		urlText: string
	}[]
}

const Card = ({ modalId, picture, title, type, description, stacks }: CardProps) => {
	return (
		<div className="card bg-base-200 rounded-lg shadow-md">
			<a href={`#${modalId}`} className="h-52 relative hover-shine">
				<Image
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
					priority={true}
					placeholder="blur"
					src={picture}
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
		</div>
	)
}

const Modal = ({ modalId, title, descriptions, type, duration, stacks, pictures, sources }: ModalProps) => {
	return (
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
				<div className="container mx-auto">
					<h1 className="font-bold text-4xl mb-2">
						{title} {type === 'internal' && <div className="badge mx-2 badge-secondary">internal</div>}
						{type === 'hackathon' && <div className="badge mx-2 badge-info">hackathon</div>}
						{type === 'freelance' && <div className="badge mx-2 badge-success">freelance</div>}
						{type === 'hobby' && <div className="badge mx-2 badge-primary">hobby</div>}
					</h1>
					<h3 className="text-xl mb-2">{duration}</h3>
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
					<div className="mb-6">
						<h3 className="font-semibold text-2xl mb-4">Show case</h3>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							{pictures.map(pic => (
								<div key={pic} className="w-12/12 h-64 md:h-80 relative border mockup-window">
									<Image
										blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
										className="border-2 border-gray-400"
										placeholder="blur"
										src={pic}
										layout="fill"
										objectFit="cover"
										alt={title}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="mb-6">
						<h3 className="font-semibold text-2xl mb-4 ">Description</h3>
						{descriptions.map(description => (
							<p key={description} className="mb-2 last:mb-0">
								{description}
							</p>
						))}
					</div>
					<div className="mb-6">
						<h3 className="font-semibold text-2xl mb-4">Sources</h3>
						<ul className="list-disc ml-10">
							{sources.map(({ name, url, urlText }) => (
								<li key={name}>
									{name}:{' '}
									<a className="link link-secondary" href={url} target="_blank">
										{urlText}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="modal-action">
					<a href={`/#modal-close`} className="btn">
						Close
					</a>
				</div>
			</div>
		</div>
	)
}

const Project = () => {
	const [open, setOpen] = useState(false)
	return (
		<div id="projects" className="py-10 bg-primary">
			<div className="mx-auto container ">
				<h1 className="font-bold text-primary-content text-4xl mb-10 text-center">My Projects</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
					{projects
						.slice(0, 6)
						.map(({ id, duration, modalId, title, pictures, type, descriptions, stacks, sources }) => {
							const modalProps: ModalProps = {
								duration,
								modalId,
								title,
								pictures,
								type,
								descriptions,
								stacks,
								sources
							}
							const cardProps: CardProps = {
								modalId,
								picture: pictures[0],
								title,
								type,
								description: descriptions[0],
								stacks
							}
							return (
								<div key={id}>
									<Card {...cardProps} />
									<Modal {...modalProps} />
								</div>
							)
						})}

					{projects
						.slice(6)
						.map(({ id, duration, modalId, title, pictures, type, descriptions, stacks, sources }) => {
							const modalProps: ModalProps = {
								duration,
								modalId,
								title,
								pictures,
								type,
								descriptions,
								stacks,
								sources
							}
							const cardProps: CardProps = {
								modalId,
								picture: pictures[0],
								title,
								type,
								description: descriptions[0],
								stacks
							}
							return (
								<Transition
									key={id}
									show={open}
									enter="transition-opacity duration-150"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-opacity duration-150"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Card {...cardProps} />
									<Modal {...modalProps} />
								</Transition>
							)
						})}
				</div>
				<div className="text-right">
					<button className="btn btn-outline" onClick={() => setOpen(open => !open)}>
						{open ? 'Show less' : 'Show all'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Project
