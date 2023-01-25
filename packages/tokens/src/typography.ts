import {fontFamily} from './fontFamily';
import {fontSize} from './fontSize';
import {letterSpacing} from './letterSpacing';
import { lineHeight } from './lineHeight';

function Convert(fontSize: String | Number, source: String | Number) {
  return (Number(fontSize) * Number(source)) / 100;
}

export const typography = {
  h1: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[9],
      lineHeight: Convert(fontSize?.[9], Number(lineHeight?.sm)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[9],
      lineHeight: Convert(fontSize?.[9], Number(lineHeight?.sm)),
      letterSpacing: letterSpacing.none,
    },
  },
  h2: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[8],
      lineHeight: Convert(fontSize?.[8], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[8],
      lineHeight: Convert(fontSize?.[8], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h3: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[7],
      lineHeight: Convert(fontSize?.[7], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[7],
      lineHeight: Convert(fontSize?.[7], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h4: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[6],
      lineHeight: Convert(fontSize?.[6], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[6],
      lineHeight: Convert(fontSize?.[6], Number(lineHeight?.xs)),
      letterSpacing: letterSpacing.none,
    },
  },
  h5: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[5],
      lineHeight: Convert(fontSize?.[5], Number(lineHeight?.sm)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[5],
      lineHeight: Convert(fontSize?.[5], Number(lineHeight?.sm)),
      letterSpacing: letterSpacing.none,
    },
  },
  subtitle1: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[4],
      lineHeight: Convert(fontSize?.[4], Number(lineHeight?.md)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[4],
      lineHeight: Convert(fontSize?.[4], Number(lineHeight?.md)),
      letterSpacing: letterSpacing.none,
    },
  },
  subtitle2: {
    medium: {
      fontFamily: fontFamily?.aeonik?.medium,
      fontSize: fontSize?.[3],
      lineHeight: Convert(fontSize?.[3], Number(lineHeight?.md)),
      letterSpacing: letterSpacing.none,
    },
    regular: {
      fontFamily: fontFamily?.aeonik?.regular,
      fontSize: fontSize?.[3],
      lineHeight: Convert(fontSize?.[3], Number(lineHeight?.md)),
      letterSpacing: letterSpacing.none,
    },
  },
  body1: {
    medium: {
      fontFamily: fontFamily?.helvetica?.medium,
      fontSize: fontSize?.[4],
      lineHeight: Convert(fontSize?.[4], Number(lineHeight?.lg)),
      letterSpacing: Convert(fontSize?.[4], Number(letterSpacing.sm)),
    },
    bold: {
      fontFamily: fontFamily?.helvetica?.bold,
      fontSize: fontSize?.[4],
      lineHeight: Convert(fontSize?.[4], Number(lineHeight?.lg)),
      letterSpacing: Convert(fontSize?.[4], Number(letterSpacing.sm)),
    },
  },
  body2: {
    medium: {
      fontFamily: fontFamily?.helvetica?.medium,
      fontSize: fontSize?.[3],
      lineHeight: Convert(fontSize?.[3], Number(lineHeight?.lg)),
      letterSpacing: Convert(fontSize?.[3], Number(letterSpacing.sm)),
    },
    bold: {
      fontFamily: fontFamily?.helvetica?.bold,
      fontSize: fontSize?.[3],
      lineHeight: Convert(fontSize?.[3], Number(lineHeight?.lg)),
      letterSpacing: Convert(fontSize?.[3], Number(letterSpacing.sm)),
    },
  },
  body3: {
    medium: {
      fontFamily: fontFamily?.helvetica?.medium,
      fontSize: fontSize?.[2],
      lineHeight: Convert(fontSize?.[2], Number(lineHeight?.md)),
      letterSpacing: Convert(fontSize?.[2], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamily?.helvetica?.bold,
      fontSize: fontSize?.[2],
      lineHeight: Convert(fontSize?.[2], Number(lineHeight?.md)),
      letterSpacing: Convert(fontSize?.[2], Number(letterSpacing.md)),
    },
  },
  small: {
    medium: {
      fontFamily: fontFamily?.helvetica?.medium,
      fontSize: fontSize?.[1],
      lineHeight: Convert(fontSize?.[1], Number(lineHeight?.xs)),
      letterSpacing: Convert(fontSize?.[1], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamily?.helvetica?.bold,
      fontSize: fontSize?.[1],
      lineHeight: Convert(fontSize?.[1], Number(lineHeight?.xs)),
      letterSpacing: Convert(fontSize?.[1], Number(letterSpacing.md)),
    },
  },
  smaller: {
    medium: {
      fontFamily: fontFamily?.helvetica?.medium,
      fontSize: fontSize?.[0],
      lineHeight: Convert(fontSize?.[0], Number(lineHeight?.md)),
      letterSpacing: Convert(fontSize?.[0], Number(letterSpacing.md)),
    },
    bold: {
      fontFamily: fontFamily?.helvetica?.bold,
      fontSize: fontSize?.[0],
      lineHeight: Convert(fontSize?.[0], Number(lineHeight?.md)),
      letterSpacing: Convert(fontSize?.[0], Number(letterSpacing.md)),
    },
  },
}
