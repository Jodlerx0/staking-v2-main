import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Labswap',
  description:
    'Join ECOLAB And Stake Tokens An Open Source Project On The BSC Network Visit Our Github Page To Contribute!',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Labswap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Labswap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Labswap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Labswap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Labswap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Labswap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Labswap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Labswap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Labswap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Labswap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Labswap')}`,
      }
    default:
      return null
  }
}
