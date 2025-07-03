import SubmitButton from './submit-button';

const Form = () => {
	return (
		<div className='w-full flex flex-col lg:w-1/2 max-lg:mt-10'>
			<h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
				Send me a message
			</h2>
			<form className='space-y-6'>
				<div>
					<label htmlFor='name' className='label'>
						Name
					</label>
					<input
						required
						id='name'
						type='text'
						name='name'
						className='input'
						placeholder='Your name'
					/>
				</div>

				<div>
					<label htmlFor='email' className='label'>
						Email
					</label>
					<input
						required
						id='email'
						type='email'
						name='email'
						className='input'
						placeholder='your.email@example.com'
					/>
				</div>

				<div>
					<label htmlFor='subject' className='label'>
						Subject
					</label>
					<input
						required
						type='text'
						id='subject'
						name='subject'
						className='input'
						placeholder='What is this about?'
					/>
				</div>

				<div>
					<label htmlFor='message' className='label'>
						Message
					</label>
					<textarea
						rows={6}
						required
						id='message'
						name='message'
						className='input'
						placeholder='Your message...'
					/>
				</div>

				<SubmitButton />
			</form>
		</div>
	);
};

export default Form;
