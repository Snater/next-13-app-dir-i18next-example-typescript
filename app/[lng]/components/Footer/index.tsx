import {FooterBase} from './FooterBase';
import {useTranslation} from '../../../i18n';

type Props = {
	lng: string
	path?: string
};

export const Footer = async ({lng, path}: Props) => {
	const {t} = await useTranslation(lng, 'footer');

	return (
		<FooterBase t={t} lng={lng} path={path} />
	);
}