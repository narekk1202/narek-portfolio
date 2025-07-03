import Image, { StaticImageData } from 'next/image';

type CardProps = {
	title: string;
	reverse?: boolean;
	projectUrl: string;
	description: string;
	imageSrc: StaticImageData;
};

const ProjectCard = ({
	title,
	imageSrc,
	projectUrl,
	description,
	reverse = false,
}: CardProps) => {
	return (
		<div
			className={`mt-3 flex flex-col lg:flex-${reverse ? 'row-reverse' : 'row'} lg:items-start lg:gap-8`}
		>
			<div className='flex flex-col items-start w-full lg:w-1/2'>
				<h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-[poppins] mt-10'>
					{title}
				</h1>
				<a
					href={projectUrl}
					className='hover:underline'
					target='_blank'
					rel='noopener noreferrer'
				>
					Visit {title}
				</a>

				<p className='text-white text-base sm:text-lg font-[poppins] mt-4'>
					{description}
				</p>
			</div>

			<Image
				src={imageSrc}
				alt={title}
				className='w-full lg:w-1/2 rounded-lg mt-6 lg:mt-10'
			/>
		</div>
	);
};

export default ProjectCard;
