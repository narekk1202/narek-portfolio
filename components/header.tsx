'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' },
];

const Header = () => {
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;

	return (
		<header className='max-w-7xl mx-auto flex items-center justify-center p-4'>
			<nav className='flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center flex-wrap'>
				{links.map(link => (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'text-sm sm:text-base md:text-lg font-medium hover:text-purple-700 transition-colors duration-300 font-[poppins]',
							{
								'text-purple-700': isActive(link.href),
								'text-neutral-200': !isActive(link.href),
							}
						)}
					>
						{link.name}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
