import {getTranslation, useTranslation} from '../../i18n';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import Link from 'next/link';

type Props = {
	params: {
		lng: string
	}
};

export async function generateMetadata({params: {lng}}: Props) {
	const {t} = await getTranslation(lng, 'second-page');
	return {title: t('h1')};
}

export default async function Page({params: {lng}}: Props) {
	const {t} = await useTranslation(lng, 'second-page');

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
			<Footer lng={lng} path="/second-page" />
		</>
	);
}