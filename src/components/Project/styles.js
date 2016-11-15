import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {ListItem} from 'styles/shared/styled-components';
import {UnderlinedLink} from 'styles/shared/styled-components';

export const Wrapper = styled(ListItem)`
    margin: 35px 0;
`;

export const Link = styled(UnderlinedLink)`
    margin-bottom: 15px;
    padding-bottom: 10px;
    display: inline-block;
`;

export const Points = styled.div``;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 300;
    position: relative;
    
    &:before{
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 100%;
      color: white;
      background-color: #66dbff;
      position: absolute;
      left: -87px;
      top: 0px;
      border: 5px solid #333959;
      
      ${media.phoneM`
        left: -47px;
      `}
    }
    
    ${media.phoneM`
       font-size: 22px;
    `}
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
    
  &:before{
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -81px;
    top: 4px;
    border: 5px solid #333959;
    ${media.phoneM`
        left: -41px;
    `}
  }
`;