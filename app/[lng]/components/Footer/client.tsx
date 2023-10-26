'use client'

import {FooterBase} from './FooterBase';
import {useTranslation} from '../../../i18n/client';

type Props = {
	lng: string
	path?: string
};

export const Footer = ({lng, path}: Props) => {
	const {t} = useTranslation(lng, 'footer');
	return <FooterBase t={t} lng={lng} path={path} />;
}