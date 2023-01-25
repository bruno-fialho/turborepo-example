import tokens  from '../tokens.json';

export const lineHeight = {
  dafault: tokens?.core?.lineHeights?.default?.value.replace('%', ''),
  xs: tokens?.core?.lineHeights?.xs?.value.replace('%', ''),
  sm: tokens?.core?.lineHeights?.sm?.value.replace('%', ''),
  md: tokens?.core?.lineHeights?.md?.value.replace('%', ''),
  lg: tokens?.core?.lineHeights?.lg?.value.replace('%', ''),
}
