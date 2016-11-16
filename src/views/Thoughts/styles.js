import styled from 'styled-components';
import {RightSide} from 'styles/shared/styled-components';

export const Wrapper = styled.div`
  
`;

export const List = styled.ul`
  padding:0;
  margin: 50px 0 0 0;
  list-style-type:none;
`;

export const Title = styled.h3`
  margin:0;
`;

export const Link = styled.a`
  transition: all 200ms linear;
  cursor: pointer;
  display:block;
  color: black;
  margin:10px 0;
  text-decoration: none;
  padding: 10px 15px;
  
  &:hover{
    background-color: #f5f5f5;
  }
`;

export const Tags = styled.div`
  display:flex;
`;

export const DateTime = styled.div`
  font-size: 14px;
  font-weight: 100;
  margin-top: 5px;
`;

export const Tag = styled.button`
  margin-right: 5px;
  outline: 0;
  font-weight: ${props => props.selected ? '600' : '100'}
`;

export const RightSideThoughts = styled(RightSide)`
  
`;