import {languages} from '../../../i18n/settings';
import Link from 'next/link';
import {Trans} from 'react-i18next/TransWithoutContext';
import {TFunction} from 'i18next';
import {ReactNode} from 'react';

type Props = {
	t: TFunction
	lng: string
	path?: string
}

export const FooterBase = ({t, lng, path = ''}: Props) => {
	return (
		<footer>
			<Trans i18nKey="languageSwitcher" t={t}>
				Switch from <strong>{{lng} as unknown as ReactNode}</strong> to:{' '}
			</Trans>
			{languages.filter((l) => lng !== l).map((l, index) => {
				return (
					<span key={l}>
						{index > 0 && (' or ')}
						<Link href={`/${l}${path}`}>{l}</Link>
					</span>
				);
			})}
			<p>{t('description')}</p>
		</footer>
	);
}