'use client';

import Link from 'next/link';

export default function Error() {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-zinc-900 via-slate-800 to-purple-900 text-white'>
			<h1 className='text-4xl font-bold mb-4 text-center'>Something went wrong!</h1>
			<p className='text-lg text-center'>Please try again later.</p>
			<Link href='/' className='mt-6 text-purple-500 hover:underline'>
				Go back to home
			</Link>
		</div>
	);
}
