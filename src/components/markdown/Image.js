import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  padding: 10px;
`;

const ImageComponent = ({src}) => {
  return <Image src={src}/>;
}

export default ImageComponent;