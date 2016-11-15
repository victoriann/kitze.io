import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const Interesting = () => (
  <Section id="interesting" className="animated fadeInDown">
    <SectionTitle>Interesting</SectionTitle>
    <UnorderedList>
      <ListItem>
        I met Katy Perry and participated in one of her music videos. <UnderlinedLink
        href="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/58131_1649556157292_3531213_n.jpg?oh=52ec3f5da58cf4a3a75529c414b65e60&oe=58646D41"
        target="_blank"
      >
        No, seriously, she's cool.
      </UnderlinedLink>
      </ListItem>
      <ListItem>
        Visited a 1 week "basics of photography" seminar where we learned to take photos with frickin'
        coffee
        tins.
        Believe it or not.
      </ListItem>
      <ListItem>
        I have the funniest dog ever and <UnderlinedLink
        href="https://instagram.com/benjithemaltese/"
        target="_blank"
      >
        he has an Instagram profile
      </UnderlinedLink>.
        It's 2016, shut up.
      </ListItem>
    </UnorderedList>
  </Section>
);

export default Interesting;