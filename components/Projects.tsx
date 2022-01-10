import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { XCircleIcon } from '@heroicons/react/solid/esm'

const projects = [
	{
		id: 'customer-journey',
		duration: '01.12.2019 - present',
		modalId: 'customer-journey-modal-open',
		pictures: [
			'/images/customer-journey-4.png',
			'/images/customer-journey-5.png',
			'/images/customer-journey-6.png',
			'/images/customer-journey-7.png'
		],
		title: 'Customer Journey',
		description: `MeetingPackage's Customer Journey project involves all the development in customer-facing pages. A typical journey includes 5 pages: Front page, Search page, Checkout page, Order confirmation page, and Order management page.`,
		extendedDescription: (
			<>
				<p className="mb-2">
					MeetingPackage&#39;s Customer Journey project involves all the development in customer-facing pages.
					This is a white-label solution, meaning different hotels can have the looks and feels that match
					their brands, thus increasing the customer experiences. A typical journey includes 5 pages:
				</p>
				<ul className="w-full steps-vertical md:steps-horizontal steps mb-2 md:mb-4">
					<li className="step step-primary">Front page</li>
					<li className="step step-primary">Search page</li>
					<li className="step step-primary">Checkout page</li>
					<li className="step step-primary">Order confirmation page</li>
					<li className="step step-primary">Order management page</li>
				</ul>
				<p className="mb-2">My main responsibilities includes:</p>
				<ul className="list-disc ml-10 mb-2">
					<li>Develop, Design, and Maintain customer-facing pages in Vue</li>
					<li>Maintain legacy projects</li>
					<li>Assist in backend development</li>
				</ul>
				<p>
					The white-label solution is used by many hotel chains:{' '}
					<Link href="https://www.scandichotels.fi/">
						<a className="link link-secondary">Scandic Hotels</a>
					</Link>{' '}
					and{' '}
					<Link href="https://www.nordicchoicehotels.com/">
						<a className="link link-secondary">Nordic Choice Hotels</a>
					</Link>{' '}
					to name a few.
				</p>
			</>
		),
		type: 'internal',
		sources: [
			{
				name: 'Venue page example',
				url: 'https://meetingpackage.com/venue/clarion-hotel-helsinki',
				urlText: 'https://meetingpackage.com/venue/clarion-hotel-helsinki'
			},
			{
				name: 'Partner example',
				url: 'https://meetingpackage.com/booking-engine-customers',
				urlText: 'https://meetingpackage.com/booking-engine-customers'
			},
			{
				name: 'HotelTechReport on product',
				url: 'https://hoteltechreport.com/meetings-and-events/venue-booking-platforms/meetingpackagecom-booking-engine',
				urlText:
					'https://hoteltechreport.com/meetings-and-events/venue-booking-platforms/meetingpackagecom-booking-engine'
			}
		],
		stacks: ['vue', 'vuex', 'bootstrap']
	},
	{
		id: 'dashboard',
		duration: '01.11.2019 - present',
		modalId: 'dashboard-modal-open',
		pictures: ['/images/dashboard-1.png', '/images/dashboard-2.png'],
		title: 'Venue & Sales Management',
		description: `MeetingPackage's Venue and Sales management software is an all-in-one solution that helps venue suppliers easily manage their contents, inventory, and sale analytics.`,
		extendedDescription: (
			<>
				<p className="mb-2">
					MeetingPackage&#39;s Venue and Sales management software is an all-in-one solution that helps venue
					suppliers easily manage their contents, inventory, and sale analytics. During my position here as a
					Frontend Developer, my main tasks in the project include:
				</p>

				<ul className="list-disc ml-10 mb-2">
					<li>Redesigning and Maintaining legacy dashboard pages</li>
					<li>Initiating and Developing new pages in React</li>
					<li>Assist in backend development</li>
				</ul>
				<p>
					After 2 years since I joined, the software is voted as the{' '}
					<Link href="https://hoteltechreport.com/meetings-and-events/group-sales/meetingpackagecom-hotels">
						<a className="link link-secondary">#2 Group Sales Management Software provider</a>
					</Link>{' '}
					in the 2021 HotelTechAwards. Many Hoteliers has reviewed this software as easy-to-use, appealing,
					and having good user experiences.
				</p>
			</>
		),
		type: 'internal',
		sources: [
			{
				name: 'Venue & Sales Management',
				url: 'https://support.meetingpackage.com/knowledge-base/cloud-based-venue-sales-management',
				urlText: 'https://support.meetingpackage.com/knowledge-base/cloud-based-venue-sales-management'
			},
			{
				name: 'HotelTechReport on product',
				url: 'https://hoteltechreport.com/meetings-and-events/group-sales/meetingpackagecom-hotels',
				urlText: 'https://hoteltechreport.com/meetings-and-events/group-sales/meetingpackagecom-hotels'
			},
			{
				name: 'Product/Feature updates',
				url: 'https://support.meetingpackage.com/knowledge-base/product-feature-updates',
				urlText: 'https://support.meetingpackage.com/knowledge-base/product-feature-updates'
			}
		],
		stacks: ['react', 'redux', 'formik', 'mui']
	},

	{
		id: 'booking-widget',
		duration: '01.10.2019 - present',
		modalId: 'booking-widget-modal-open',
		pictures: ['/images/booking-widget-1.png'],
		title: 'Booking Engine Widget',
		description: `MeetingPackage's Booking Engine Widget allows customer to easily make a search to venue's meeting room and event space services. It is a piece of HTML code that even a novice developer can copy and paste and use it on any websites. This is a white-label solution, meaning different hotels can have the looks and feels that match their brands, thus increasing the customer experiences.`,
		extendedDescription: (
			<>
				<p className="mb-2">
					MeetingPackage&#39;s Booking Engine Widget allows customer to easily make a search to venue&#39;s
					meeting room and event space services. It is a piece of HTML code that even a novice developer can
					copy and paste and use it on any websites. This is a white-label solution, meaning different hotels
					can have the looks and feels that match their brands, thus increasing the customer experiences.
				</p>
				<p>
					In this project, my responsibility is to develop and design the whole widget solution. This project
					gives me a perfect opportunity to try out{' '}
					<Link href="https://storybook.js.org/">
						<a className="link link-secondary">Storybook</a>
					</Link>{' '}
					, it helps me easily share the design between team members and receive quick feedbacks.
				</p>
			</>
		),
		type: 'internal',
		sources: [
			{
				name: 'Live usage',
				url: 'https://www.scandichotels.com/conferences-meetings',
				urlText: 'https://www.scandichotels.com/conferences-meetings'
			},
			{
				name: 'Widget creation',
				url: 'https://support.meetingpackage.com/knowledge-base/create-booking-engine',
				urlText: 'https://support.meetingpackage.com/knowledge-base/create-booking-engine'
			}
		],
		stacks: ['react', 'mui', 'storybook']
	},
	{
		id: 'data-4-health',
		duration: '25.06.2021 - 31.09.2021',
		modalId: 'data-4-health-modal-open',
		pictures: [
			'/images/data-4-health-1.png',
			'/images/data-4-health-4.png',
			'/images/data-4-health-2.png',
			'/images/data-4-health-3.png'
		],
		title: 'Data 4 Healthy Recovery',
		description:
			'In this hackathon, I am in Cell-Culture Simulator team and my responsibility is to create an interactive dashboard that enable scientist to perform cell-culture simulations.',
		extendedDescription: (
			<>
				<p className="mb-2">
					Data 4 Healthy Recovery is a hackathon with an emphasis on smart health, dedicated to solving this
					sectore&#39;s most pressing challenges.
				</p>
				<p className="mb-2">
					In this hackathon, I am in Cell-Culture Simulator team and my responsibility is to create an
					interactive dashboard that enable scientist to perform cell-culture simulations in a computer or
					mobile devices.
				</p>
				<p>
					As a result, our team was chosen as the winning team in the EU Data 4 Healthy Recovery Accelerator.
				</p>
			</>
		),
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
		modalId: 'portfolio-modal-open',
		pictures: [
			'/images/portfolio-1.png',
			'/images/portfolio-2.png',
			'/images/portfolio-3.png',
			'/images/portfolio-4.png'
		],
		title: 'This Portfolio :)',
		description: 'To be updated...',
		extendedDescription: (
			<>
				<p className="mb-2">
					This is the project of the Portfolio you are seeing. It is built from scratch using NextJs and
					TailwindCss. Here are some hight light of the websites:
					<ul className="list-disc ml-10 mb-2">
						<li>Redesigning and Maintaining legacy dashboard pages</li>
						<li>Initiating and Developing new pages in React</li>
						<li>Assist in backend development</li>
					</ul>
				</p>
			</>
		),
		type: 'hobby',
		sources: [
			{
				name: 'Live page',
				url: '/',
				urlText: 'you are viewing it :)'
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
		modalId: 'bumi-cafe-modal-open',
		pictures: ['/images/bumi.png', '/images/bumi-2.png'],
		title: 'Bumi Cafe',
		description: 'To be updated...',
		extendedDescription: <div> To be updated...</div>,
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
		modalId: 'schedulable-todo-modal-open',
		pictures: [
			'/images/schedulable-toto-1.png',
			'/images/schedulable-toto-2.png',
			'/images/schedulable-toto-3.png',
			'/images/schedulable-toto-4.png'
		],
		title: 'Schedulable Todo',
		description: 'To be updated...',
		extendedDescription: <div> To be updated...</div>,
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
		modalId: 'contact-manager-modal-open',
		pictures: ['/images/contact-manager-1.png', '/images/contact-manager-2.png', '/images/contact-manager-3.png'],
		title: 'Contact Manager',
		description: 'To be updated...',
		extendedDescription: <div> To be updated...</div>,
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
		modalId: 'github-fetcher-modal-open',
		duration: '07.06.2019 - 09.06.2019',
		pictures: ['/images/github-fetcher-1.png', '/images/github-fetcher-2.png'],
		title: 'Github Fetcher',
		description: 'To be updated...',
		extendedDescription: <div> To be updated...</div>,
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
	extendedDescription: JSX.Element
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
	const router = useRouter()
	return (
		<div className="card bg-base-200 rounded-lg shadow-md">
			<a
				onClick={() => {
					// use router push bc Link wont trigger css target state of modal
					router.push(`/#${modalId}`)
				}}
				href={`#${modalId}`}
				className="h-52 relative hover-shine"
			>
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
					<span className="mr-2"> {title}</span>{' '}
					{type === 'internal' && <div className="badge badge-secondary">internal</div>}
					{type === 'hackathon' && <div className="badge badge-info">hackathon</div>}
					{type === 'freelance' && <div className="badge badge-success">freelance</div>}
					{type === 'hobby' && <div className="badge badge-primary">hobby</div>}
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
						onClick={() => {
							router.push(`/#${modalId}`)
						}}
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

const Modal = ({ modalId, title, extendedDescription, type, duration, stacks, pictures, sources }: ModalProps) => {
	const router = useRouter()
	return (
		<div
			id={modalId}
			onClick={() => {
				// router  push state to make useRouter get correct asPath
				router.push(`/#modal-close`)
				if (window) {
					// set window href to trigger css target state
					window.location.href = '/#modal-close'
				}
			}}
			className="modal"
		>
			<div
				className="modal-box max-h-[85vh] overflow-x-hidden overflow-y-auto w-full sm:max-w-7xl sm:w-10/12"
				onClick={e => {
					e.stopPropagation()
				}}
			>
				<button
					onClick={() => {
						router.push(`/#modal-close`)
						if (window) {
							// set window href to trigger css target state
							window.location.href = '/#modal-close'
						}
					}}
					className="absolute top-0 right-0 md:top-4 md:right-4 btn btn-circle btn-ghost"
				>
					<XCircleIcon className="h-9 w-9" />
				</button>
				<div className="md:container mx-auto">
					<h1 className="font-bold text-3xl md:text-4xl mb-2">
						<span className="mr-2"> {title}</span>
						{type === 'internal' && <div className="badge badge-secondary">internal</div>}
						{type === 'hackathon' && <div className="badge badge-info">hackathon</div>}
						{type === 'freelance' && <div className="badge badge-success">freelance</div>}
						{type === 'hobby' && <div className="badge badge-primary">hobby</div>}
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
								<div
									key={pic}
									className="w-12/12 h-64 md:h-80 xl:h-[360px] relative border mockup-window"
								>
									<Image
										blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8nwYAAmoBZ0eMiB8AAAAASUVORK5CYII="
										className="border-2 border-gray-400"
										placeholder="blur"
										src={pic}
										layout="fill"
										alt={title}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="mb-6">
						<h3 className="font-semibold text-2xl mb-4 ">Description</h3>
						{extendedDescription}
					</div>
					<div className="mb-6">
						<h3 className="font-semibold text-2xl mb-4">Sources</h3>
						<ul className="list-disc ml-10">
							{sources.map(({ name, url, urlText }) => (
								<li key={name}>
									{name}:{' '}
									<Link href={url}>
										<a className="link link-secondary" rel="noreferrer" target="_blank">
											{urlText}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="modal-action">
					<a
						onClick={() => {
							router.push(`/#modal-close`)
						}}
						href={`/#modal-close`}
						className="btn"
					>
						Close
					</a>
				</div>
			</div>
		</div>
	)
}

const Project = () => {
	const [showAll, setShowAll] = useState(false)

	return (
		<div id="projects" className="py-10 bg-primary">
			<div className="mx-auto container ">
				<h1 className="font-bold text-primary-content text-4xl mb-10 text-center">My Projects</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
					{projects
						.slice(0, 6)
						.map(
							({
								id,
								duration,
								modalId,
								title,
								pictures,
								type,
								description,
								extendedDescription,
								stacks,
								sources
							}) => {
								const modalProps: ModalProps = {
									duration,
									modalId,
									title,
									pictures,
									type,
									extendedDescription: extendedDescription,
									stacks,
									sources
								}
								const cardProps: CardProps = {
									modalId,
									picture: pictures[0],
									title,
									type,
									description,
									stacks
								}
								return (
									<div key={id}>
										<Card {...cardProps} />
										<Modal {...modalProps} />
									</div>
								)
							}
						)}

					{projects
						.slice(6)
						.map(
							({
								id,
								duration,
								modalId,
								title,
								pictures,
								type,
								description,
								extendedDescription,
								stacks,
								sources
							}) => {
								const modalProps: ModalProps = {
									duration,
									modalId,
									title,
									pictures,
									type,
									extendedDescription: extendedDescription,
									stacks,
									sources
								}
								const cardProps: CardProps = {
									modalId,
									picture: pictures[0],
									title,
									type,
									description,
									stacks
								}
								return (
									<Transition
										key={id}
										show={showAll}
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
							}
						)}
				</div>
				<div className="text-right">
					<button className="btn" onClick={() => setShowAll(showAll => !showAll)}>
						{showAll ? 'Show less' : 'Show all'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Project
