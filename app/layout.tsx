import Header from '@/components/header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Narek Dunamalyan | Portfolio',
	description: 'Portfolio of Narek Dunamalyan, a software engineer specializing in web development, with a focus on React, Next.js, and TypeScript.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased bg-gradient-to-r from-zinc-900 via-slate-800 to-purple-900 text-white`}>
				<NextTopLoader color='#7c3aed' showSpinner={false} />
				<Header />
				{children}
			</body>
		</html>
	);
}
