import tokens from '../data/tokens.json';

export const letterSpacing = {
  none: Number(tokens?.core?.letterSpacing?.none?.value.replace('%', '')),
  xs: Number(tokens?.core?.letterSpacing?.xs?.value.replace('%', '')),
  sm: Number(tokens?.core?.letterSpacing?.sm?.value.replace('%', '')),
  md: Number(tokens?.core?.letterSpacing?.md?.value.replace('%', '')),
}
