'use client'

import {Header} from '../components/Header';
import {Footer} from '../components/Footer/client';
import Link from 'next/link';
import {useTranslation} from '../../i18n/client';

type Props = {
	params: {
		lng: string
	}
};

export default function Page({params: {lng}}: Props) {
	const {t} = useTranslation(lng, 'second-client-page');

	return (
		<>
			<main>
				<Header heading={t('h1')} />
				<Link href={`/${lng}`}>
					<button type="button">
						{t('back-to-home')}
					</button>
				</Link>
			</main>
			<Footer lng={lng} path="/second-client-page" />
		</>
	);
}