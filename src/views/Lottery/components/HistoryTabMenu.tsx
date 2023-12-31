import React from 'react'
import { ButtonMenu, ButtonMenuItem } from '@labswap/uikit'
import { useTranslation } from 'contexts/Localization'

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="subtle">
      <ButtonMenuItem>{t('Your History')}</ButtonMenuItem>
      <ButtonMenuItem>{t('All History')}</ButtonMenuItem>
    </ButtonMenu>
  )
}

export default HistoryTabMenu
