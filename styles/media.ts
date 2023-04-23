import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'large' | 'medium' | 'small';

const sizes: Record<DeviceType, number> = {
  large: 1200,
  medium: 768,
  small: 600,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
