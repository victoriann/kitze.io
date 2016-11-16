import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {RightSide} from 'styles/shared/styled-components';

export const RightSideThought = styled(RightSide)``;

export const Content = styled.div`
  color: #2d2d2d;
  font-weight: 300;
  padding-bottom: 100px;
  
  h1 {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  color: #545454;
  
  ${media.phablet`
    font-size: 20px;
  `}
`;

export const Top = styled.div`
  flex: 1;
`;