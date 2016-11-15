import React from 'react';
import {Wrapper} from './styles';

const Event = ({event:{date, name, talk, finished}}) => (
  <Wrapper finished={finished}>
    <span> {date} - </span>
    <b> {name} </b>
    <span> - {talk} </span>
  </Wrapper>
);

export default Event;