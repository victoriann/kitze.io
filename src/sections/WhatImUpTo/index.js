import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const WhatImUpTo = () => (
  <Section id="sup" className="animated fadeInDown">
    <SectionTitle> What I'm up to </SectionTitle>
    <UnorderedList>
      <ListItem>
        Making products and helping startups launch with <UnderlinedLink
        target="_blank"
        href="http://bit.ly/kitze-squads">
        Squads
      </UnderlinedLink>!
      </ListItem>
      <ListItem>Recently moved to the Netherlands.</ListItem>
      <ListItem>
        <UnderlinedLink href="https://twitter.com/thekitze" target="_blank">
          Tweeting like there's no tomorrow!
        </UnderlinedLink>
      </ListItem>
    </UnorderedList>
  </Section>
);

export default WhatImUpTo;