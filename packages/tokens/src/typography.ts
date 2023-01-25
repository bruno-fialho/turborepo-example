import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { letterSpacing } from './letterSpacing';
import { lineHeights } from './lineHeights';

function Convert(fontSize: String | Number, source: String | Number) {
  return (Number(fontSize) * Number(source)) / 100;
}

export const typography = {
  h1: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[9],
      lineHeight: Convert(fontSizes?.[9], Number(lineHeights?.sm)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[9],
      lineHeight: Convert(fontSizes?.[9], Number(lineHeights?.sm)),
      letterSpacing: letterSpacing.none,
    },
  },
  h2: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[8],
      lineHeight: Convert(fontSizes?.[8], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[8],
      lineHeight: Convert(fontSizes?.[8], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h3: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[7],
      lineHeight: Convert(fontSizes?.[7], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[7],
      lineHeight: Convert(fontSizes?.[7], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h4: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[6],
      lineHeight: Convert(fontSizes?.[6], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[6],
      lineHeight: Convert(fontSizes?.[6], Number(lineHeights?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h5: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[5],
      lineHeight: Convert(fontSizes?.[5], Number(lineHeights?.sm)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[5],
      lineHeight: Convert(fontSizes?.[5], Number(lineHeights?.sm)),
      letterSpacing: letterSpacing.none,
    },
  },
  subtitle1: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[4],
      lineHeight: Convert(fontSizes?.[4], Number(lineHeights?.md)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[4],
      lineHeight: Convert(fontSizes?.[4], Number(lineHeights?.md)),
      letterSpacing: letterSpacing.none,
    },
  },
  subtitle2: {
    medium: {
      fontFamily: fontFamilies?.aeonik?.medium,
      fontSize: fontSizes?.[3],
      lineHeight: Convert(fontSizes?.[3], Number(lineHeights?.md)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamilies?.aeonik?.regular,
      fontSize: fontSizes?.[3],
      lineHeight: Convert(fontSizes?.[3], Number(lineHeights?.md)),
      letterSpacing: letterSpacing.none,
    },
  },
  body1: {
    medium: {
      fontFamily: fontFamilies?.helvetica?.medium,
      fontSize: fontSizes?.[4],
      lineHeight: Convert(fontSizes?.[4], Number(lineHeights?.lg)),
      letterSpacing: Convert(fontSizes?.[4], Number(letterSpacing.sm)),
    },
    bold: {
      fontFamily: fontFamilies?.helvetica?.bold,
      fontSize: fontSizes?.[4],
      lineHeight: Convert(fontSizes?.[4], Number(lineHeights?.lg)),
      letterSpacing: Convert(fontSizes?.[4], Number(letterSpacing.sm)),
    },
  },
  body2: {
    medium: {
      fontFamily: fontFamilies?.helvetica?.medium,
      fontSize: fontSizes?.[3],
      lineHeight: Convert(fontSizes?.[3], Number(lineHeights?.lg)),
      letterSpacing: Convert(fontSizes?.[3], Number(letterSpacing.sm)),
    },
    bold: {
      fontFamily: fontFamilies?.helvetica?.bold,
      fontSize: fontSizes?.[3],
      lineHeight: Convert(fontSizes?.[3], Number(lineHeights?.lg)),
      letterSpacing: Convert(fontSizes?.[3], Number(letterSpacing.sm)),
    },
  },
  body3: {
    medium: {
      fontFamily: fontFamilies?.helvetica?.medium,
      fontSize: fontSizes?.[2],
      lineHeight: Convert(fontSizes?.[2], Number(lineHeights?.md)),
      letterSpacing: Convert(fontSizes?.[2], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamilies?.helvetica?.bold,
      fontSize: fontSizes?.[2],
      lineHeight: Convert(fontSizes?.[2], Number(lineHeights?.md)),
      letterSpacing: Convert(fontSizes?.[2], Number(letterSpacing.md)),
    },
  },
  small: {
    medium: {
      fontFamily: fontFamilies?.helvetica?.medium,
      fontSize: fontSizes?.[1],
      lineHeight: Convert(fontSizes?.[1], Number(lineHeights?.xs)),
      letterSpacing: Convert(fontSizes?.[1], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamilies?.helvetica?.bold,
      fontSize: fontSizes?.[1],
      lineHeight: Convert(fontSizes?.[1], Number(lineHeights?.xs)),
      letterSpacing: Convert(fontSizes?.[1], Number(letterSpacing.md)),
    },
  },
  smaller: {
    medium: {
      fontFamily: fontFamilies?.helvetica?.medium,
      fontSize: fontSizes?.[0],
      lineHeight: Convert(fontSizes?.[0], Number(lineHeights?.md)),
      letterSpacing: Convert(fontSizes?.[0], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamilies?.helvetica?.bold,
      fontSize: fontSizes?.[0],
      lineHeight: Convert(fontSizes?.[0], Number(lineHeights?.md)),
      letterSpacing: Convert(fontSizes?.[0], Number(letterSpacing.md)),
    },
  },
}
