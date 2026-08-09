import {
	siClaude,
	siHuggingface,
	siOllama,
	siDocker,
	siTeamcity,
	siTypescript,
	siNodedotjs,
	siAngular,
	siPython,
	siMongodb,
	siWebdriverio,
	siGnubash,
	siGit,
	siGithub,
} from 'simple-icons';
import { BlogPost, TechLogo } from './app/models/interfaces';

export const hero = {
	title: 'Roberto Jacobo',
	role: 'AI Infrastructure Engineer',
	tagline: 'LLM pipelines · AI agents · DevOps',
};

export const contact = {
	email: 'robjacobox@gmail.com',
	github: 'https://github.com/roberjacobo',
	linkedin: 'https://www.linkedin.com/in/roberto-jacobo/',
};

export const writing: { title: string; intro: string; posts: BlogPost[] } = {
	title: 'Writing',
	intro: 'Thoughts on building software in a field that changes every month.',
	posts: [
		{
			title: 'Think in Micro-Systems, Then in Applications',
			summary: 'With AI collapsing the cost of building, it pays to deeply solve one specific problem at a time — acting as developer, tester, and product owner of small, self-contained systems — before composing them into applications.',
			date: 'August 2026',
			url: 'https://medium.com/@robjacobot/think-in-micro-systems-then-in-applications-222ad521ae3e',
			source: 'Medium',
			readingTime: '2 min',
		},
	],
};

export const about = {
	eyebrow: 'Profile',
	title: 'About me',
	lead: `I'm an AI Infrastructure Engineer at OpenAxes, where I've worked since 2024 on the systems
  behind production AI: LLM pipelines, agentic developer tooling built on Claude Code, and the DevOps
  foundation that keeps it all shippable.`,
	body: `Before that I spent years across the stack — full-stack products at a startup, test
  automation for Warner Bros Discovery, frontend for Santander — which taught me how software holds
  up in the real world.`,
	thesis: `I work best where solid engineering discipline meets a field that changes every month:
  turning new AI capabilities into infrastructure teams can rely on.`,
	beyond: {
		label: 'Beyond the code',
		items: ['Coffee', 'Music', 'Movies', 'Videogames', 'Traveling', 'Tech'],
	},
};

/*
 * Generic glyphs for technologies with no brand icon in simple-icons.
 * SQL Server and Azure are absent upstream for trademark reasons; Unsloth is
 * simply not catalogued. Replace these with official SVGs when available.
 */
const databaseIcon: TechLogo = {
	name: 'SQL',
	path: 'M12 2C7.582 2 4 3.343 4 5v14c0 1.657 3.582 3 8 3s8-1.343 8-3V5c0-1.657-3.582-3-8-3zm0 2c3.314 0 6 .672 6 1.5S15.314 7 12 7 6 6.328 6 5.5 8.686 4 12 4z',
	hex: '4479A1',
	evenOdd: true,
};

const cloudIcon: TechLogo = {
	name: 'Azure',
	path: 'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
	hex: '0078D4',
};

const unslothIcon: TechLogo = {
	name: 'Unsloth',
	imageUrl: 'assets/images/tech-logos/unsloth.png',
	hex: '46C6A2',
};

const brand = (icon: { title: string; path: string; hex: string }, name?: string): TechLogo =>
	({ name: name ?? icon.title, path: icon.path, hex: icon.hex });

export const technologies: { title: string; logos: TechLogo[]; disciplinesTitle: string; disciplines: string[] } = {
	title: 'Technologies I\'ve worked with',
	logos: [
		brand(siClaude, 'Claude Code'),
		brand(siHuggingface, 'Hugging Face'),
		unslothIcon,
		brand(siOllama),
		brand(siPython),
		brand(siDocker),
		cloudIcon,
		brand(siTeamcity),
		brand(siGnubash, 'Bash'),
		brand(siGit),
		brand(siGithub),
		brand(siTypescript),
		brand(siNodedotjs),
		brand(siAngular),
		brand(siMongodb),
		databaseIcon,
		brand(siWebdriverio),
	],
	disciplinesTitle: 'Areas I work in',
	disciplines: [
		'LLM Infrastructure',
		'AI Agents',
		'DevOps',
	],
};

export const companies = {
	title: 'Companies I\'ve worked with',
	companies: [
		{ logoUrl: 'assets/images/companies-logos/qs-logo_.png', name: 'Quantum Studios', role: 'Fullstack Developer', description: 'In my first professional role at a startup, I rapidly expanded my skill set across full-stack development, diving into React, MongoDB, Node.js, GraphQL, and serverless functions on GCP. Tasked with building everything from SaaS applications and PWAs to the company\'s website, I played a pivotal role from day one, contributing to various aspects of the business in its formative stage. This intensive, year-long experience not only sharpened my technical skills but also ingrained a versatile approach to solving complex problems and delivering innovative solutions in a fast-paced environment.' },
		{ logoUrl: 'assets/images/companies-logos/globant-logo-dark.png', name: 'Globant', role: 'NodeJS Developer', description: 'During my tenure at Globant, a renowned global development company with over 20,000 employees, I embraced the opportunity to work with diverse teams and clients from around the world, enriching my professional journey with a variety of roles and learning experiences. My ability to adapt and excel in different settings allowed me to generate significant impact within such a large organization, earning positive reviews and recognition from clients for delivering high-quality solutions. This experience has not only broadened my understanding of global collaboration and project management but also highlighted my commitment to excellence and innovation in the tech industry, reinforcing Globant\'s reputation for fostering talent and delivering exceptional client value.' },
		{ logoUrl: 'assets/images/companies-logos/wbd.png', name: 'Warner Bros Discovery', role: 'Test Automation Engineer', description: 'At Warner Bros Discovery, I worked with a global team across New York, Seattle, and India, fully engaging in English with the client. As a Test Automation Engineer, I honed my QA and algorithm skills with TypeScript, Selenium, and WebDriverIO. I also led training sessions on test automation and programming for manual testers, promoting a culture of knowledge sharing. This experience not only broadened my expertise in global teamwork and communication but also significantly enriched my professional growth, making it a standout chapter in my career journey.' },
		{ logoUrl: 'assets/images/companies-logos/santander_.png', name: 'Santander', role: 'Frontend Developer', description: 'At Santander, alongside a skilled team of Globers from Mexico, I embraced my role as a Frontend Developer, focusing on Angular, TypeScript, and Unit Testing. I significantly contributed by developing a mock server in NodeJS to improve our testing framework. While my position entailed typical frontend tasks, the banking environment presented unique challenges that enhanced my soft skills. The need for effective communication, teamwork, and problem-solving was paramount in navigating the sector\'s complexities. This role not only sharpened my technical skills but also underscored the value of adaptability and continuous learning in meeting project goals within a strict regulatory landscape.' },
		{ logoUrl: 'assets/images/companies-logos/openaxes-logotype.svg', name: 'OpenAxes', role: 'Infrastructure Developer', description: 'Since May 2024 I\'ve been part of OpenAxes as an Infrastructure Developer, working at the intersection of DevOps and applied AI. I design and operate LLM infrastructure — agentic development pipelines built on Claude Code, deployment automation, and the platform tooling that lets engineering teams ship fast and reliably. Building production systems in a discipline that is being defined in real time demands strong architectural judgment and constant technical depth, and that is exactly where I do my best work: turning emerging AI capabilities into stable, scalable infrastructure.' },
	],
};
