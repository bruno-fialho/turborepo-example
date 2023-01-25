import tokens  from '../data/tokens.json';

export const borderRadius = {
  sm: Number(tokens?.core?.borderRadius?.sm?.value || 8),
  md: Number(tokens?.core?.borderRadius?.md?.value || 15),
  full: Number(tokens?.core?.borderRadius?.full?.value || 200),
}
