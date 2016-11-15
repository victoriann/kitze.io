import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {Link} from 'mobx-router';

export const UnderlinedLink = styled.a`
    color: white;
    text-decoration: none;
    ${props => props.href && `
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
    `}
    padding-bottom: 1px;
`;

export const Section = styled.section`
   margin-bottom: 100px;
   &:first-of-type {
      margin-top: 50px;
   }
`;

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
  margin: 0 0 20px 0;
  color: white;
  font-weight: 300;
  padding-bottom: 5px;
  position: relative;

  &:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 100%;
      color: white;
      background-color: white;
      position: absolute;
      left: -87px;
      top: 7px;
      border: 5px solid #333959;
      
      ${media.phoneM`
        left: -47px;
      `}
  }

  &:first-of-type:before {
      top: 0px;
  }
  
  ${media.phoneM`
    font-size: 25px;
  `}
`;

export const ListItem = styled.li`
    font-size: 18px;
    list-style-type: none;
    margin: 10px 0;
    font-weight: 100;
    line-height: 25px;
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;