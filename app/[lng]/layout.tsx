import './global.css'
import {ReactNode} from 'react';
import {dir} from 'i18next';
import {languages} from '../i18n/settings';

export async function generateStaticParams() {
	return languages.map((lng) => ({lng}));
}

type Props = {
	children: ReactNode
	params: {
		lng: string
	}
};

export default function RootLayout({children, params: {lng}}: Props) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<head />
			<body>
				{children}
			</body>
		</html>
	);
}