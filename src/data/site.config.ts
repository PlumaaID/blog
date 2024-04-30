interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Ernesto García', // Site author
	title: 'Pluma ID - Blog', // Site title.
	description: 'Firma Electrónica Avanzada y Tecnología Financiera', // Description to display in the meta tags
	lang: 'es-mx',
	ogLocale: 'ex_MX',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
