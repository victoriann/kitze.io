import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//data
import {socialIcons} from 'data/social';

//images
import me from  'img/me.jpg';

import {UnorderedList} from 'styles/shared/styled-components';

//styled
import {Image, Title, Description, Contact, Wrapper, ClickableTop} from './styles';

//components
import MouseScroll from 'components/MouseScroll';
import SocialIcon from 'components/SocialIcon';

const KitzeInfo = ({store, styles = {}}) => {
  return (
    <Wrapper styles={styles.Wrapper}>

      <ClickableTop
        isClickable={store.router.currentView.id !== 'home'}
        onClick={() => store.router.goTo(views.home, {}, store)}
      >
        <Image src={me} alt="me" styles={styles.Image}/>
        <Title> Hi, I'm Kitze! </Title>
        <Description> I make stuff happen. </Description>
      </ClickableTop>

      <Contact>
        <UnorderedList>
          {socialIcons.map((icon, key) => <SocialIcon styles={styles.SocialIcon} key={key} icon={icon}/>)}
        </UnorderedList>
      </Contact>

      <MouseScroll/>
    </Wrapper>
  )
}

export default observer(['store'])(KitzeInfo);