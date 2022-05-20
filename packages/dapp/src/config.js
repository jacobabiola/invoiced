import LexDAOLogo from './assets/lex-dao.png';

export const CONFIG = {
  INFURA_ID: process.env.REACT_APP_INFURA_ID,
  IPFS_ENDPOINT: 'https://ipfs.infura.io',
  BOX_ENDPOINT: 'https://ipfs.3box.io',
  NETWORK_CONFIG: {
    1: {
      SUBGRAPH: 'dan13ram/mainnet-smart-invoices',
      WRAPPED_NATIVE_TOKEN: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase(),
      INVOICE_FACTORY: '0xb7019c3670f5d4dd99166727a7d29f8a16f4f20a'.toLowerCase(),
      TOKENS: {
        ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase()]: {
          decimals: 18,
          symbol: 'WETH',
        },
      },
      RESOLVERS: {
        ['0x01b92e2c0d06325089c6fd53c98a214f5c75b2ac'.toLowerCase()]: {
          name: 'LexDAO',
          logoUrl: LexDAOLogo,
          termsUrl:
            'https://github.com/lexDAO/Arbitration/blob/master/rules/ToU.md#lexdao-resolver',
        },
      },
    },
    83: {
      SUBGRAPH: 'meterio/smart-invoice',
      WRAPPED_NATIVE_TOKEN: '0x4cb6cef87d8cadf966b455e8bd58fff32aba49d1'.toLowerCase(),
      INVOICE_FACTORY: '0x588bAF3e28fA8CDE7B2FA75405478bF4eFA15A73'.toLowerCase(),
      TOKENS: {
        ['0x4cb6cef87d8cadf966b455e8bd58fff32aba49d1'.toLowerCase()]: {
          decimals: 18,
          symbol: 'MTR',
        },
        ['0x8a419ef4941355476cf04933e90bf3bbf2f73814'.toLowerCase()]: {
          decimals: 18,
          symbol: 'MTRG',
        },
      },
      RESOLVERS: {
        ['0x034CfED494EdCff96f0D7160dC2B55Cae5Ee69E1'.toLowerCase()]: {
          name: 'SmartInvoiceAO',
          logoUrl: LexDAOLogo,
          termsUrl:
            'https://github.com/smartinvoiceDAO',
        },
      },
    },
    100: {
      SUBGRAPH: 'dan13ram/xdai-smart-invoices',
      WRAPPED_NATIVE_TOKEN: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d'.toLowerCase(),
      INVOICE_FACTORY: '0x26832d296Be653C1A818B7AaF3D4e5e16A0C314d'.toLowerCase(),
      TOKENS: {
        ['0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d'.toLowerCase()]: {
          decimals: 18,
          symbol: 'WXDAI',
        },
        ['0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1'.toLowerCase()]: {
          decimals: 18,
          symbol: 'WETH',
        },
      },
      RESOLVERS: {
        ['0x034CfED494EdCff96f0D7160dC2B55Cae5Ee69E1'.toLowerCase()]: {
          name: 'LexDAO',
          logoUrl: LexDAOLogo,
          termsUrl:
            'https://github.com/lexDAO/Arbitration/blob/master/rules/ToU.md#lexdao-resolver',
        },
      },
    },
    4: {
      SUBGRAPH: 'jacobabiola/smart-invoice',
      WRAPPED_NATIVE_TOKEN: '0xc778417E063141139Fce010982780140Aa0cD5Ab'.toLowerCase(),
      INVOICE_FACTORY: '0xAaa29c0A03cBAA01B71c8e9Dd368c5e8Ec755581'.toLowerCase(),
      TOKENS: {
        ['0xc778417E063141139Fce010982780140Aa0cD5Ab'.toLowerCase()]: {
          decimals: 18,
          symbol: 'WETH',
        },
        ['0x3af6b2f907f0c55f279e0ed65751984e6cdc4a42'.toLowerCase()]: {
          decimals: 18,
          symbol: 'DAI',
        },
        ['0x982e00B16c313E979C0947b85230907Fce45d50e'.toLowerCase()]: {
          decimals: 18,
          symbol: 'TEST',
        },
      },
      RESOLVERS: {
        ['0x1206b51217271FC3ffCa57d0678121983ce0390E'.toLowerCase()]: {
          name: 'LexDAO',
          logoUrl: LexDAOLogo,
          termsUrl:
            'https://github.com/lexDAO/Arbitration/blob/master/rules/ToU.md#lexdao-resolver',
        },
      },
    },
  },
};
