import Link from 'next/link'

const Contact = () => {
	return (
		<div className="container mx-auto py-24 flex flex-wrap justify-start md:justify-evenly">
			<div className="w-full md:w-6/12">
				<h1 className="font-bold text-4xl mb-6">Get In Touch</h1>
				<p className="mb-2 text-xl">
					Want to know more about me? Download my résumé{' '}
					<a
						href="/resume.pdf"
						className="link link-secondary decoration-double decoration-2"
						download="Trung Ung Portfolio"
					>
						here
					</a>
					.
				</p>
				<p className="mb-6 text-xl">
					Also, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best
					to get back to you!
				</p>
			</div>
			<div className="flex items-center">
				<Link href="mailto:ungkientrung@gmail.com">
					<a className="text-xl">
						<button className="btn btn-primary px-8 py-4 h-auto ">Say Hello 👋</button>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Contact
