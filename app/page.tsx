import Image from 'next/image';
import Link from 'next/link';
import NarekImage from '../public/narek.jpg';
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Narek | Front-End Developer',
	description:
		'Hi, I am Narek, a passionate Front-End Developer with over 2 years of experience in building modern web applications using React.',
};

export default function Home() {
	return (
		<main className='page'>
			<section className='section'>
				<div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left'>
					<h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-[poppins]'>
						Hi, I&apos;m Narek
					</h1>
					<h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold font-[poppins] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
						Front-End Developer.
					</h2>
					<p className='text-base sm:text-lg text-white font-[poppins] max-w-md lg:max-w-none'>
						I&apos;m a passionate React developer with over 2 years of
						experience crafting modern, responsive web applications. I
						specialize in building intuitive user interfaces and delivering
						seamless user experiences using the latest technologies and best
						practices.
					</p>
					<Link href='/contact'>
						<button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-[poppins] py-2 px-4 sm:py-3 sm:px-6 rounded-full cursor-pointer hover:opacity-90 transition-opacity duration-300'>
							Contact
						</button>
					</Link>
				</div>

				<div className='w-full lg:w-1/2 flex justify-center'>
					<Image
						src={NarekImage}
						alt='Narek'
						className='rounded-full'
						width={400}
						height={400}
					/>
				</div>
			</section>
		</main>
	);
}
