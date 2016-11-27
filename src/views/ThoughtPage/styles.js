import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {RightSideThoughts} from 'styles/shared/styled-components';
import colors from 'config/colors';

export const RightSide = styled(RightSideThoughts)``;

export const Content = styled.div`
  color: #5f5f5f;
  font-weight: 300;
  padding-bottom: 100px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 300;
  
  a {
    color: ${colors.accent};
    text-decoration: none;
    border-bottom: 1px dashed ${colors.accent};
    padding-bottom: 2px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  color: #4d5686;
  margin-top: 0;
  font-size: 33px;
  line-height: 40px;
  
  ${media.phablet`
    font-size: 25px;
    line-height: 35px;
  `}
`;

export const Top = styled.div`
  flex: 1;
`;