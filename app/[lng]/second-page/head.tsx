import {useTranslation} from '../../i18n';

type Props = {
	params: {
		lng: string
	}
};

export default async function Head({params: {lng}}: Props) {
	const {t} = await useTranslation(lng, 'second-page');

	return (
		<title>{t('title')}</title>
	);
}