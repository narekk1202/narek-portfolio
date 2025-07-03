import {
	BiLogoJavascript,
	BiLogoNodejs,
	BiLogoTypescript,
} from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiReactrouter, SiRedux } from 'react-icons/si';

export const skills = [
	{
		id: 'javascript',
		name: 'JavaScript',
		Icon: BiLogoJavascript,
		colorClass: 'text-yellow-500',
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		Icon: BiLogoTypescript,
		colorClass: 'text-blue-600',
	},
	{
		id: 'nodejs',
		name: 'Node.js',
		Icon: BiLogoNodejs,
		colorClass: 'text-green-600',
	},
	{
		id: 'react',
		name: 'React',
		Icon: FaReact,
		colorClass: 'text-blue-500',
	},
	{
		id: 'nextjs',
		name: 'Next.js',
		Icon: RiNextjsFill,
		colorClass: 'text-white',
	},
	{
		id: 'tailwind',
		name: 'Tailwind CSS',
		Icon: RiTailwindCssFill,
		colorClass: 'text-cyan-400',
	},
	{
		id: 'redux',
		name: 'Redux',
		Icon: SiRedux,
		colorClass: 'text-purple-600',
	},
	{
		id: 'react-router',
		name: 'React Router',
		Icon: SiReactrouter,
		colorClass: 'text-red-500',
	},
];
