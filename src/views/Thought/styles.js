import styled from 'styled-components';
import {ThoughtPage} from 'styles/shared/styled-components';
import {media} from 'utils/responsive-utils';

export const Wrapper = styled(ThoughtPage)`
`;

export const Content = styled.div`
  color: #2d2d2d;
  font-weight: 300;
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