export type Language = 'en' | 'de' | 'it';

export const fallbackLng: Language = 'en'
export const languages: Language[] = [fallbackLng, 'de', 'it']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		// preload: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	}
}