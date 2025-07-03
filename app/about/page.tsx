import { skills } from './constants/skills';

export const metadata = {
	title: 'About | Narek',
	description:
		'I specialize in React, Next, TypeScript, and modern CSS frameworks, with a strong focus on performance optimization and accessibility. I believe that great software should not only look good but also be intuitive, fast, and inclusive for all users.',
};

export default function About() {
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
							key={skill.id}
							className='rounded-full flex items-center justify-center p-2 sm:p-3 bg-gray-500/10'
							title={skill.name}
						>
							<skill.Icon
								className={`size-12 sm:size-14 lg:size-16 ${skill.colorClass}`}
							/>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
