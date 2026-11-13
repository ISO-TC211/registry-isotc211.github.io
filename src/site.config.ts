import type { SiteConfig } from '@isotc211/astro-ui'

export const siteConfig: SiteConfig = {
  title: 'ISO/TC 211 Registries',
  titleHtml: 'ISO/TC&nbsp;211 Registries',
  brandSub: 'Harmonized Resources Maintenance Agency',
  description:
    'Registries for geographic information technology from ISO/TC 211 Geographic information/Geomatics.',
  faviconSvg: '/assets/favicon.svg',
  faviconIco: '/assets/favicon.ico',
  nav: [
    { title: 'News', url: '/news/' },
    { title: 'ISO/TC 211 Resources', url: 'https://www.isotc211.org' },
  ],
  committee: {
    id: 211,
    name: 'Geographic information/Geomatics',
    home: 'https://committee.iso.org/home/tc211',
  },
  footerLinks: [
    { title: 'Main Site', url: 'https://www.isotc211.org' },
    { title: 'Geodetic Registry', url: 'https://geodetic.isotc211.org/' },
    { title: 'Schemas', url: 'https://schemas.isotc211.org' },
    { title: 'Committee Site', url: 'https://committee.iso.org/home/tc211' },
  ],
  social: {
    links: [{ url: 'https://twitter.com/ISOTC211' }, { url: 'https://github.com/ISO-TC211' }],
  },
}
