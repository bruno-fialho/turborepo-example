import tokens  from '../data/tokens.json';

export const fontFamilies = {
  helvetica: {
    medium: (`${String(tokens?.core?.fontFamilies?.helvetica?.value)}-${String(tokens?.core?.fontWeights?.helvetica?.medium?.value)}`).replace(/\s/g, ''),
    regular: (`${String(tokens?.core?.fontFamilies?.helvetica?.value)}-${String(tokens?.core?.fontWeights?.helvetica?.regular?.value)}`).replace(/\s/g, ''),
    bold: (`${String(tokens?.core?.fontFamilies?.helvetica?.value)}-${String(tokens?.core?.fontWeights?.helvetica?.bold?.value)}`).replace(/\s/g, ''),
  },
  aeonik: {
    medium: (`${String(tokens?.core?.fontFamilies?.aeonik?.value)}-${String(tokens?.core?.fontWeights?.aeonik?.medium?.value)}`).replace(/\s/g, ''),
    regular: (`${String(tokens?.core?.fontFamilies?.aeonik?.value)}-${String(tokens?.core?.fontWeights?.aeonik?.regular?.value)}`).replace(/\s/g, ''),
  },
}
