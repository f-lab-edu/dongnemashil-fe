import { css } from 'styled-components';

const colors = {
  whiteColor: '#ffffff',
  lightGrayColor: '#e2e2e2',
  mediumGrayColor: '#878787',
  darkGrayColor: '#656e75',
  blackColor: '#000000',

  mainColor: '#9A7B9A',
  subColor: '#B5A6CA',
  pointColor: '#886F88',

  mainTextColor: '#333333',
  titleTextColor: '#060606',
};

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1000px',
};

const authLayout = css`
  width: 100%;
  height: 100%;
  background-color: whiteColor;
  padding: 43px 26px;
`;

export const theme = {
  ...colors,
  authLayout,
  device: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
};

// 사용법

// @media ${props => props.theme.device.mobile} {
//  ...
// }

// @media ${props => props.theme.device.tablet} {
//  ...
// }

// @media ${props => props.theme.device.desktop} {
//  ...
// }
