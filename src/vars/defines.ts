// nspv settings
export const TICKER = 'TOKEL';
export const RPC_PORT = '29405';

export const TOKEL_PARAMS =
  '-ac_name=TOKEL -ac_supply=100000000 -ac_eras=2 -ac_cbmaturity=1 -ac_reward=100000000,4250000000 -ac_end=80640,0 -ac_decay=0,77700000 -ac_halving=0,525600 -ac_cc=555 -ac_ccenable=236,245,246,247 -ac_adaptivepow=6 -addnode=135.125.204.169 -addnode=192.99.71.125 -addnode=144.76.140.197 -addnode=135.181.92.123';

export const TOPBAR_HEIGHT = 38;
export const FEE = 0.0001;
export const FIAT_CURRENCY = 'USD';
export const USD_VALUE = 5;
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PROD = process.env.NODE_ENV === 'production';

export const WindowSize = {
  XL: 1440,
  L: 1024,
  M: 760,
  S: 420,
};

export const WindowControl = {
  CLOSE: 'close',
  MIN: 'minimize',
  MAX: 'maximize',
};

export enum ViewType {
  DASHBOARD = 'dashboard',
  DEX = 'dex',
  NFT_MARKET = 'nft_market',
  SETTINGS = 'settings',
  CONSOLE = 'console',
  OUTPUT = `Output`,
}

export enum ModalName {
  RECEIVE = 'receive',
  SEND = 'send',
  FEEDBACK = 'feedback',
  TX_DETAIL = 'tx_detail',
}

export const Config = {
  DECIMAL: 8,
  DECIMAL_FIAT: 6,
};

export const Colors = {
  WHITE: 'white',
  GRAY: 'gray',
  BLACK: 'black',
  PURPLE: 'purple',
  TRANSPARENT: 'transparent',
};

export const OsType = {
  LINUX: 'Linux',
  MAC: 'Darwin',
  WINDOWS: 'Windows_NT',
};

export const SEE_EXPLORER = 'See explorer link for details';

export const INFORMATION_N_A = 'This information is currently not available';

export const NspvErrors = {
  INVALID_ADDR_AMOUNT_SMALL: 'invalid address or amount too small',
};

export const ErrorMessages = {
  ENTER_WIF: 'Please enter WIF',
  NETWORK_ISSUES: 'You are experiencing network issues. Please restart the app and try again',
  INVALID_ADDRESS: 'Entered address is not valid. Please check it and try again',
};
