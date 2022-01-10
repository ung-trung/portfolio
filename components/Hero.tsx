import { Typewriter } from 'react-simple-typewriter'
import { ChevronDownIcon } from '@heroicons/react/outline/esm'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content p-0">
				<div className="container md:max-w-xl pb-20">
					<p className="mb-2 text-2xl sm:text-3xl font-semibold">
						Hello <span className="text-yellow-400">👋</span>
					</p>
					<p className="mb-6 text-4xl sm:text-5xl font-bold">
						I&lsquo;m {''}
						<Typewriter words={['Trung Ung']} typeSpeed={120} />
					</p>
					<p className="mb-6 text-xl sm:text-2xl ">
						I&lsquo;m a passionate <b>web developer</b>. I love creating scalable projects that use latest
						technology.
					</p>
					<button className="mb-6 text-xl sm:text-2xl btn btn-secondary animate-wiggle">
						Download Résumé
					</button>
					<p className="text-xl sm:text-2xl">
						<Link href="#next">
							<a className="link link-secondary decoration-secondary decoration-wavy decoration-2 font-semibold">
								Scroll down
							</a>
						</Link>{' '}
						to hear more! 👇
					</p>
				</div>
				<div className="absolute bottom-2 sm:bottom-6">
					<Link href="#next">
						<a aria-label="scroll to next" className="btn btn-ghost btn-circle motion-safe:animate-bounce ">
							<ChevronDownIcon className="h-10 w-10" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
