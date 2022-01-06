import { ChevronDownIcon } from '@heroicons/react/outline/esm'

const Hero = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content p-0">
				<div className="max-w-xl">
					<p className="mb-2 text-3xl font-semibold">
						Hello <span className="text-yellow-400">👋</span>
					</p>
					<p className="mb-6 text-5xl font-bold">I'm Trung</p>
					<p className="mb-6 text-2xl className">
						I'm a passionate <b>web developer</b> and <b>designer</b>. I also love freelancing and
						contributing to open-source.
					</p>
					<p className="text-2xl className">Scroll down to hear more! 👇</p>
				</div>
				<div className="absolute bottom-6">
					<button className="className font-bold">
						<a href="#next">
							<ChevronDownIcon className="motion-safe:animate-bounce h-10 w-10" />
						</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
