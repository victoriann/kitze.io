import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import sizes from 'styles/sizes';

export const childStyles = {
  KitzeInfo: {
    home: {
      Wrapper: `
        color: white;
      `
    },
    other: {
      Title: `
        color: #616161;
      `,
      Description: `
        color: gray
      `,
      SocialIcon: {
        Icon: `
          color: gray;
        `
      },
      Image: `
        box-shadow: 0 0 9px 1px rgba(49, 49, 49, 0.17);
      `
    }
  },
  Header: {
    home: {
      Wrapper: `
        background-color: #2b304c;
      `
    },
    other: {
      Wrapper: `
        background-color: #333959;
      `
    }
  }
};

export const Wrapper = styled.div`
  position: relative;
  top: ${sizes.header.height}px;
  padding-top: 70px;
`;

export const Sides = styled.div`
    display: flex;
    flex-direction: row;
    
    ${media.tablet`
      flex-direction: column;
    `}
`;

export const LeftSide = styled.div`
    width: auto;
    min-width: 300px;
    padding-right: 40px;
    
    ${media.tablet`
        min-width: 0;
        width: 100%;
    `}
    
    ${media.phoneM`
        min-height: 100vh;
        padding-right: 0;
        padding-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;