import { Typewriter } from 'react-simple-typewriter'
import { ChevronDownIcon } from '@heroicons/react/outline/esm'

const Hero = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content p-0">
				<div className="container md:max-w-xl pb-20">
					<p className="mb-2 text-3xl font-semibold">
						Hello <span className="text-yellow-400">👋</span>
					</p>
					<p className="mb-6 text-5xl font-bold">
						I&lsquo;m {''}
						<Typewriter words={['Trung Ung']} typeSpeed={120} />
					</p>
					<p className="mb-6 text-2xl ">
						I&lsquo;m a passionate <b>web developer</b>. I love creating scalable projects that use latest
						technology.
					</p>
					<button className="mb-6 text-2xl btn btn-secondary animate-wiggle">Download Résumé</button>
					<p className="text-2xl ">
						and{' '}
						<a
							href="#next"
							className="link link-secondary decoration-secondary decoration-wavy decoration-2 font-semibold"
						>
							Scroll down
						</a>{' '}
						to hear more! 👇
					</p>
				</div>
				<div className="absolute bottom-6">
					<button className=" font-bold">
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
