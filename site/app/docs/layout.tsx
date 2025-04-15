import type { Metadata } from 'next';
import DocsHeader from './ui/DocsHeader';
import Sidebar from './ui/Sidebar';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div>
					<Sidebar />
					<DocsHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
