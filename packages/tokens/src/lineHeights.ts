import tokens  from '../data/tokens.json';

export const lineHeights = {
  dafault: tokens?.core?.lineHeights?.default?.value.replace('%', ''),
  xs: tokens?.core?.lineHeights?.xs?.value.replace('%', ''),
  sm: tokens?.core?.lineHeights?.sm?.value.replace('%', ''),
  md: tokens?.core?.lineHeights?.md?.value.replace('%', ''),
  lg: tokens?.core?.lineHeights?.lg?.value.replace('%', ''),
}
