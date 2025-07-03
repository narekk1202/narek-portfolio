const Heading = () => {
	return (
		<header className='flex flex-col items-center gap-2'>
			<h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold font-[poppins] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
				Projects
			</h1>
			<span className='text-base sm:text-md text-white font-[poppins] leading-relaxed'>
				A collection of projects I&apos;ve made
			</span>
		</header>
	);
};

export default Heading;
