import styled from 'styled-components';

export const Link = styled.a`
  transition: all 200ms linear;
  cursor: pointer;
  display:block;
  color: gray;
  margin:10px 0;
  text-decoration: none;
  padding: 10px 0px;
  
  &:hover h3{
    color: #424c54;
  }
  
  &:hover div{
    color: #2e373e;
  }
`;

export const DateTime = styled.div`
  font-size: 13px;
  font-weight: 100;
  margin-top: 5px;
  color: gray;
`;

export const Title = styled.h3`
  transition: all 100ms linear;
  margin: 0;
  color: #57626b;
  font-weight: 300;
`;