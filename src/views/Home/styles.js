import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {Page} from 'styles/shared/styled-components';

export const Wrapper = styled(Page)`
    padding: 20px;
    max-width: 960px;
    margin: auto;
    color: white;

    ${media.tablet`
      padding: 12px;
    `}
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
    padding-top: 50px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
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

export const Contact = styled.div`
`;

export const RightSide = styled.div`
    border-left: 4px solid rgba(255, 255, 255, 0.5);
    padding-left: 70px;
    ${media.phoneM`
      padding-left: 30px;
    `}
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: 0px 0px;
    margin-top: 0px;
    border-radius: 100%;
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

export const ShowMoreButton = styled.button`
    background-color: rgba(255, 255, 255, 0.16);
    transition: all 200ms linear;
    border: 0;
    cursor: pointer;
    border-radius: 3px;
    color: white;
    font-weight: 100;
    padding: 10px 15px;
    font-size: 15px;
    border: 1px solid rgba(255, 255, 255, 0.69);
    margin-top: 50px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
`;