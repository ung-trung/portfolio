const Contact = () => {
	return (
		<div className="container mx-auto py-24 flex flex-wrap justify-start md:justify-evenly">
			<div className="w-full md:w-6/12">
				<h1 className="font-bold text-4xl mb-6">Get In Touch</h1>
				<p className="mb-6 text-xl">
					My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get
					back to you!
				</p>
			</div>
			<div className="flex items-center">
				<button className="btn btn-primary px-8 py-4 h-auto ">
					<a href="mailto:ungkientrung@gmail.com" className="text-xl">
						Say Hello 👋
					</a>
				</button>
			</div>
		</div>
	)
}

export default Contact
