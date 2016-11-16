import styled from 'styled-components';
import flex from 'styles/flex';

export const Wrapper = styled.div`
  ${props => props.styles}
  
  ${flex.vertical}
  ${flex.centerVertical}
`;
export const Contact = styled.div`
  text-align:center;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: 0px 0px;
    margin-top: 0px;
    border-radius: 100%;
    ${props => props.styles}
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    margin: 50px 0 0px 0;
`;

export const Description = styled.h4`
    margin-top: 10px;
    font-weight: 100;
    font-size: 17px;
`;

export const ClickableTop = styled.div`
  cursor: ${props => props.isClickable ? 'pointer': 'default'};
`;