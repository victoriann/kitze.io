import React from 'react';

//data
import {socialIcons} from 'data/social';

//images
import me from  'img/me.jpg';

import {UnorderedList} from 'styles/shared/styled-components';

//styled
import {Image, Title, Description, Contact, Wrapper} from './styles';

//components
import MouseScroll from 'components/MouseScroll';
import SocialIcon from 'components/SocialIcon';

const KitzeInfo = ({styles = {}}) => {
  return (
    <Wrapper styles={styles.Wrapper}>
      <Image src={me} alt="me" styles={styles.Image}/>
      <Title> Hi, I'm Kitze! </Title>
      <Description> I make stuff happen. </Description>

      <Contact>
        <UnorderedList>
          {socialIcons.map((icon, key) => <SocialIcon styles={styles.SocialIcon} key={key} icon={icon}/>)}
        </UnorderedList>
      </Contact>

      <MouseScroll/>
    </Wrapper>
  )
}

export default KitzeInfo;