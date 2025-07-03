import { Metadata } from 'next';
import Form from './components/form';
import Information from './components/information';

export const metadata: Metadata = {
	title: 'Contact | Narek',
	description: 'Get in touch with me for any inquiries or collaborations.',
};

export default function Contact() {
	return (
		<main className='page'>
			<h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold font-[poppins] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
				Contact
			</h1>

			<div className='mt-8 w-full'>
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-8 text-center'>
					I&apos;d love to hear from you! Whether you have a project in mind,
					want to collaborate, or just want to say hello, feel free to reach
					out.
				</p>

				<div className='w-full flex flex-col lg:flex-row justify-between'>
					<Information />
					<Form />
				</div>
			</div>
		</main>
	);
}
