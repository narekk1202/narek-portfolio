import {
	BiLogoJavascript,
	BiLogoNodejs,
	BiLogoTypescript,
} from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiReactrouter, SiRedux } from 'react-icons/si';

export const metadata = {
	title: 'About | Narek',
	description:
		'I specialize in React, Next, TypeScript, and modern CSS frameworks, with a strong focus on performance optimization and accessibility. I believe that great software should not only look good but also be intuitive, fast, and inclusive for all users.',
};

export default function About() {
	const skills = [
		<BiLogoJavascript
			key='javascript'
			className='size-12 sm:size-14 lg:size-16 text-yellow-500'
		/>,
		<BiLogoTypescript
			key='typescript'
			className='size-12 sm:size-14 lg:size-16 text-blue-600'
		/>,
		<BiLogoNodejs
			key='nodejs'
			className='size-12 sm:size-14 lg:size-16 text-green-600'
		/>,
		<FaReact
			key='react'
			className='size-12 sm:size-14 lg:size-16 text-blue-500'
		/>,
		<RiNextjsFill
			key='next'
			className='size-12 sm:size-14 lg:size-16 text-white'
		/>,
		<RiTailwindCssFill
			key='tailwind'
			className='size-12 sm:size-14 lg:size-16 text-cyan-400'
		/>,
		<SiRedux
			key='redux'
			className='size-12 sm:size-14 lg:size-16 text-purple-600'
		/>,
		<SiReactrouter
			key='react-router'
			className='size-12 sm:size-14 lg:size-16 text-red-500'
		/>,
	];

	return (
		<main className='page'>
			<h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold font-[poppins] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
				About
			</h1>

			<div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-center px-4 sm:px-0'>
				<p className='text-base sm:text-lg text-white font-[poppins] leading-relaxed'>
					I specialize in React, Next, TypeScript, and modern CSS frameworks,
					with a strong focus on performance optimization and accessibility. I
					believe that great software should not only look good but also be
					intuitive, fast, and inclusive for all users.
				</p>
				<p className='text-base sm:text-lg text-white font-[poppins] leading-relaxed'>
					When I&apos;m not coding, you can find me exploring new technologies
					or sharing my knowledge with the developer community. I&apos;m always
					eager to take on new challenges and collaborate on innovative projects
					that make a positive impact.
				</p>
			</div>

			<section className='mt-8 sm:mt-12 flex flex-col items-center space-y-4 sm:space-y-6 px-4 sm:px-0'>
				<h2 className='text-2xl sm:text-3xl font-semibold font-[poppins] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
					Skills
				</h2>
				<div className='flex flex-wrap items-center gap-2 sm:gap-3 justify-center max-w-md sm:max-w-2xl'>
					{skills.map(skill => (
						<div
							key={skill.key}
							className='rounded-full flex items-center justify-center p-2 sm:p-3 bg-gray-500/10'
						>
							{skill}
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
