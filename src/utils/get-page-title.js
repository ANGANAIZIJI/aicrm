import defaultSettings from '@/settings'

const title = defaultSettings.title || 'aiways-aicrm-mobile-web'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
