'use client';

import { useActionState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { sendEmail } from '../actions/send-email';

const SubmitButton = () => {
	const [state, formAction, isPending] = useActionState(sendEmail, {
		error: null,
		success: false,
	});

	return (
		<div className='flex flex-col gap-2 items-center'>
			<button
				type='submit'
				formAction={formAction}
				className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer'
			>
				{isPending ? 'Sending...' : 'Send Message'}
			</button>
			{state.success && (
				<div className='w-full bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2'>
					<FaCheckCircle />
					<span className='font-medium'>Message sent successfully!</span>
				</div>
			)}
			{state.error && (
				<div className='w-full bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2'>
					<MdError />
					<span className='font-medium'>{state.error}</span>
				</div>
			)}
		</div>
	);
};

export default SubmitButton;
