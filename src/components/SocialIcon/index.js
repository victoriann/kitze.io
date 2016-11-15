import React from 'react';
import {Icon, Link, Wrapper} from './styles';

const SocialIcon = ({icon:{href, icon}}) => (
  <Wrapper>
    <Link href={href} target="_blank">
      <Icon className={`fa fa-${icon}`}/>
    </Link>
  </Wrapper>
);

export default SocialIcon;