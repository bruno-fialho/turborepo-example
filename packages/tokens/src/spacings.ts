import tokens  from '../tokens.json';

export const spacings = {
  1: Number(tokens?.core?.Spacings?.['1']?.value),
  2: Number(tokens?.core?.Spacings?.['2']?.value),
  3: Number(tokens?.core?.Spacings?.['3']?.value),
  4: Number(tokens?.core?.Spacings?.['4']?.value),
  5: Number(tokens?.core?.Spacings?.['5']?.value),
  6: Number(tokens?.core?.Spacings?.['6']?.value),
}
