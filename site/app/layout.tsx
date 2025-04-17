import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'phoenix UI Library',
	description:
		'A beautiful, flexible UI component library built for modern web apps.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
