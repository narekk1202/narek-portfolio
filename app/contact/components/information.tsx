import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const Information = () => {
	return (
		<div className='space-y-6'>
			<div className='flex items-center space-x-4'>
				<div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
					<IoMailOutline className='w-6 h-6 text-blue-600 dark:text-blue-400' />
				</div>
				<div>
					<h3 className='font-medium text-gray-900 dark:text-white'>Email</h3>
					<a
						href='mailto:your.email@example.com'
						className='text-blue-600 dark:text-blue-400 hover:underline'
					>
						narekdunamaliiian@gmail.com
					</a>
				</div>
			</div>

			<div className='flex items-center space-x-4'>
				<div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center'>
					<FaGithub className='w-6 h-6 text-purple-600 dark:text-purple-400' />
				</div>
				<div>
					<h3 className='font-medium text-gray-900 dark:text-white'>GitHub</h3>
					<a
						href='https://github.com/narekk1202'
						target='_blank'
						rel='noopener noreferrer'
						className='text-purple-600 dark:text-purple-400 hover:underline'
					>
						github.com/narekk1202
					</a>
				</div>
			</div>

			<div className='flex items-center space-x-4'>
				<div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
					<FaLinkedin className='w-6 h-6 text-blue-600 dark:text-blue-400' />
				</div>
				<div>
					<h3 className='font-medium text-gray-900 dark:text-white'>
						LinkedIn
					</h3>
					<a
						href='https://www.linkedin.com/in/narek-dunamalyan-6a41a8298/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 dark:text-blue-400 hover:underline'
					>
						linkedin.com/in/narek-dunamalyan-6a41a8298
					</a>
				</div>
			</div>
		</div>
	);
};

export default Information;
