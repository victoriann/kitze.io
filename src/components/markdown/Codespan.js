import React from 'react';
import styled from 'styled-components';

const Codespan = styled.code`
    padding: 3px 5px;
    background-color: #ececec;
    font-size: 14px;
`;

const CodeComponent = ({children}) => {
  return <Codespan>{children}</Codespan>;
}

export default CodeComponent;