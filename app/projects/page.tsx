import { Metadata } from 'next';
import AddressImage from '../../public/address-screenshot.png';
import ERealtyImage from '../../public/erealty-screenshot.png';
import HatakagitsImage from '../../public/hatakagits-screenshot.png';
import Heading from './components/heading';
import ProjectCard from './components/project-card';

export const metadata: Metadata = {
	title: 'Projects | Narek',
	description:
		'Explore my recent projects showcasing my skills in front-end development and modern web technologies.',
};

export default function Projects() {
	return (
		<main className='page'>
			<Heading />

			<section className='section flex-col'>
				<ProjectCard
					title='Hatakagits'
					imageSrc={HatakagitsImage}
					projectUrl='https://new.hatakagits.am'
					description='Hatakagits is an interactive web platform for construction companies
					that allows them to present building projects with detailed floor
					plans and interactive elements, improving customer engagement.'
				/>

				<ProjectCard
					reverse
					title='Express Realty'
					imageSrc={ERealtyImage}
					projectUrl='https://erealty.am'
					description='Express Realty is a dedicated platform showcasing a curated selection of properties available for sale and rent directly from Express Realty.'
				/>

				<ProjectCard
					title='Address Construction'
					imageSrc={AddressImage}
					projectUrl='https://addressconstruction.com'
					description='A clean and elegant landing page designed for Address Construction to showcase their premium real estate developments. The project focused on creating a sophisticated digital experience that mirrors the high-end quality and aesthetic appeal of their architectural work.'
				/>
			</section>
		</main>
	);
}
