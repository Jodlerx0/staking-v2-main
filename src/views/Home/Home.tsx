import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@labswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/ecolabtable.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/ecolabtable.svg');
    background-position: right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`
const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="secondary">
            {t('Labswap')}
          </Heading>
          <Text>{t('The Future is here. Dex, Stake & Yield Farming on BNB Chain')}</Text>
        </Hero>
        <div>
          <Cards>
            <FarmStakingCard />
            <CakeStats />
          </Cards>
          <Cards>
            <EarnAPRCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
