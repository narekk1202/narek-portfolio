import SubmitButton from './submit-button'

const Form = () => {
	return (
		<div className='w-full flex flex-col lg:w-1/2 max-lg:mt-10'>
			<h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
				Send me a message
			</h2>
			<form className='space-y-6'>
				<div>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
						placeholder='Your name'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
						placeholder='your.email@example.com'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='subject'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Subject
					</label>
					<input
						type='text'
						id='subject'
						name='subject'
						className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
						placeholder='What is this about?'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						rows={6}
						className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-vertical'
						placeholder='Your message...'
						required
					/>
				</div>

				<SubmitButton />
			</form>
		</div>
	);
};

export default Form;
