import React from 'react';
import {Icon, Link, Wrapper} from './styles';

const SocialIcon = ({styles = {}, icon:{href, icon}}) => (
  <Wrapper styles={styles.Wrapper}>
    <Link href={href} target="_blank">
      <Icon styles={styles.Icon} className={`fa fa-${icon}`}/>
    </Link>
  </Wrapper>
);

export default SocialIcon;