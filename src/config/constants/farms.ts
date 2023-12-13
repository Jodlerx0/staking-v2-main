import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 8 ) should always be at the top of the file we use them for price strings.
   */
  {
    pid: 0,
    lpSymbol: 'ECOLAB',
    lpAddresses: {
      97: '',
      56: '0x21f557ab017a9af912089e49766e90889e37fd17',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ECOLAB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf1a2403897c2683bb7aa08ef6aebce89407e1987',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'ECOLAB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xa73d0ece8ffd1da16be5c8cc7876feab2804fb56',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /* Add new farms below this line */

]

export default farms
